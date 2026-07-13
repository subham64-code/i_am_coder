import { z } from "zod";

export const loginSchema = z.object({
  identifier: z.string().min(3, "Identifier required"),
  password: z.string().min(6, "Password min 6 chars"),
});

export const refreshSchema = z.object({
  refreshToken: z.string().min(10),
});

export const otpRequestSchema = z.object({
  email: z.string().email(),
});

export const otpVerifySchema = z.object({
  email: z.string().email(),
  otp: z.string().length(6, "OTP must be 6 digits"),
});

export const changePasswordSchema = z.object({
  oldPassword: z.string().min(6),
  newPassword: z.string().min(8, "New password min 8 chars"),
});
