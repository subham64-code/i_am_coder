import { Response } from "express";
import crypto from "crypto";
import { prisma } from "../../config/db";
import { asyncHandler } from "../../utils/asyncHandler";
import { BadRequestError, UnauthorizedError } from "../../utils/errors";
import { sendSuccess } from "../../utils/apiResponse";
import { comparePassword, hashPassword } from "../../utils/password";
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from "../../utils/jwt";
import { generateOtp, hashOtp, verifyOtp } from "../../utils/otp";
import { sendMail, otpEmailTemplate } from "../../utils/email";
import { env } from "../../config/env";
import { OtpRecord } from "@prisma/client";
import {
  changePasswordSchema,
  loginSchema,
  otpRequestSchema,
  otpVerifySchema,
  refreshSchema,
} from "./validation";

async function issueTokens(userId: string, role: string, studentId?: string) {
  const payload = { userId, role, studentId };
  const accessToken = signAccessToken(payload);
  const refreshToken = signRefreshToken(payload);
  // Store refresh token hash for revocation (best-effort, supports session tracking)
  const hash = hashOtp(refreshToken);
  await prisma.user.update({
    where: { id: userId },
    data: { refreshTokens: { push: hash }, lastLogin: new Date() },
  });
  return { accessToken, refreshToken };
}

export const login = asyncHandler(async (req, res) => {
  const { identifier, password } = loginSchema.parse(req.body);
  const user = await prisma.user.findFirst({
    where: { OR: [{ email: identifier }, { username: identifier }, { studentId: identifier }] },
  });
  if (!user) throw new UnauthorizedError("Invalid credentials");

  if (user.status !== "APPROVED") {
    throw new UnauthorizedError(`Account is ${user.status.toLowerCase()}`);
  }

  const ok = await comparePassword(password, user.password);
  if (!ok) throw new UnauthorizedError("Invalid credentials");

  const tokens = await issueTokens(user.id, user.role, user.studentId ?? undefined);
  sendSuccess(res, {
    ...tokens,
    mustChangePass: user.mustChangePass,
    role: user.role,
    studentId: user.studentId,
  }, "Login successful");
});

export const refresh = asyncHandler(async (req, res) => {
  const { refreshToken } = refreshSchema.parse(req.body);
  let payload;
  try {
    payload = verifyRefreshToken(refreshToken);
  } catch {
    throw new UnauthorizedError("Invalid refresh token");
  }
  const user = await prisma.user.findUnique({ where: { id: payload.userId } });
  if (!user) throw new UnauthorizedError("User not found");
  const hash = hashOtp(refreshToken);
  if (!user.refreshTokens.includes(hash)) {
    throw new UnauthorizedError("Refresh token revoked");
  }
  const tokens = await issueTokens(user.id, user.role, user.studentId ?? undefined);
  sendSuccess(res, tokens, "Token refreshed");
});

export const requestOtp = asyncHandler(async (req, res) => {
  const { email } = otpRequestSchema.parse(req.body);
  const { raw, hash } = generateOtp(6);
  await prisma.otpRecord.create({
    data: {
      email,
      otpHash: hash,
      purpose: "login",
      expiresAt: new Date(Date.now() + env.otpExpiresMin * 60 * 1000),
    },
  });
  await sendMail({
    to: email,
    subject: "Your I AM CODER OTP",
    html: otpEmailTemplate(raw, "login"),
  });
  sendSuccess(res, null, "OTP sent to email");
});

export const verifyOtpLogin = asyncHandler(async (req, res) => {
  const { email, otp } = otpVerifySchema.parse(req.body);
  const record = await prisma.otpRecord.findFirst({
    where: { email, purpose: "login" },
    orderBy: { createdAt: "desc" },
  });
  if (!record) throw new BadRequestError("No OTP requested");
  if (record.expiresAt < new Date()) throw new BadRequestError("OTP expired");
  if (!verifyOtp(otp, record.otpHash)) throw new BadRequestError("Invalid OTP");

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new UnauthorizedError("No account for this email");
  if (user.status !== "APPROVED") throw new UnauthorizedError(`Account is ${user.status.toLowerCase()}`);

  await prisma.otpRecord.deleteMany({ where: { email, purpose: "login" } });
  const tokens = await issueTokens(user.id, user.role, user.studentId ?? undefined);
  sendSuccess(res, tokens, "OTP verified");
});

/**
 * Admin OTP login — only predefined admin emails (env.mail.adminEmails) may request.
 * Ensures an ADMIN user exists, then issues admin-scoped tokens on OTP verification.
 */
export const adminOtpRequest = asyncHandler(async (req, res) => {
  const { email } = otpRequestSchema.parse(req.body);
  if (!env.mail.adminEmails.includes(email.toLowerCase())) {
    throw new UnauthorizedError("This email is not authorized for admin access");
  }
  const { raw, hash } = generateOtp(6);
  await prisma.otpRecord.create({
    data: {
      email,
      otpHash: hash,
      purpose: "admin",
      expiresAt: new Date(Date.now() + env.otpExpiresMin * 60 * 1000),
    },
  });
  await sendMail({ to: email, subject: "I AM CODER — Admin OTP", html: otpEmailTemplate(raw, "admin access") });
  sendSuccess(res, null, "Admin OTP sent");
});

export const adminOtpVerify = asyncHandler(async (req, res) => {
  const { email, otp } = otpVerifySchema.parse(req.body);
  if (!env.mail.adminEmails.includes(email.toLowerCase())) {
    throw new UnauthorizedError("This email is not authorized for admin access");
  }
  const record = await prisma.otpRecord.findFirst({
    where: { email, purpose: "admin" },
    orderBy: { createdAt: "desc" },
  });
  if (!record) throw new BadRequestError("No OTP requested");
  if (record.expiresAt < new Date()) throw new BadRequestError("OTP expired");
  if (!verifyOtp(otp, record.otpHash)) throw new BadRequestError("Invalid OTP");

  let user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    // Bootstrap the admin account (OTP-only, random password hash)
    user = await prisma.user.create({
      data: {
        email,
        username: email.split("@")[0],
        password: await hashPassword(crypto.randomUUID()),
        role: "ADMIN",
        status: "APPROVED",
        fullName: "Administrator",
      },
    });
  } else if (user.role !== "ADMIN") {
    throw new UnauthorizedError("Account is not an admin");
  }

  await prisma.otpRecord.deleteMany({ where: { email, purpose: "admin" } });
  const tokens = await issueTokens(user.id, "ADMIN", user.studentId ?? undefined);
  sendSuccess(res, tokens, "Admin authenticated");
});

export const changePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = changePasswordSchema.parse(req.body);
  const userId = req.user!.userId;
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new UnauthorizedError("User not found");
  const ok = await comparePassword(oldPassword, user.password);
  if (!ok) throw new BadRequestError("Current password is incorrect");
  const hashed = await hashPassword(newPassword);
  await prisma.user.update({
    where: { id: userId },
    data: { password: hashed, mustChangePass: false },
  });
  sendSuccess(res, null, "Password changed successfully");
});

export const logout = asyncHandler(async (req, res) => {
  // Client also discards tokens; server keeps list for audit.
  sendSuccess(res, null, "Logged out");
});
