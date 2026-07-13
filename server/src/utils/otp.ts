import crypto from "crypto";
import { env } from "../config/env";

/**
 * Generate a numeric OTP and return its hash (for storage) plus raw value (for sending).
 * Uses a constant-time HMAC hash so raw OTP is never stored.
 */
export function generateOtp(length = 6): { raw: string; hash: string } {
  const raw = Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");
  const hash = crypto.createHmac("sha256", env.jwtRefreshSecret).update(raw).digest("hex");
  return { raw, hash };
}

export function hashOtp(raw: string): string {
  return crypto.createHmac("sha256", env.jwtRefreshSecret).update(raw).digest("hex");
}

export function verifyOtp(raw: string, hash: string): boolean {
  return hashOtp(raw) === hash;
}

/** Generate a readable, unique student id like IAC2026XXXXX. */
export function generateStudentId(): string {
  const year = new Date().getFullYear();
  const rand = crypto.randomBytes(3).toString("hex").toUpperCase().slice(0, 5);
  return `IAC${year}${rand}`;
}

/** Generate a username from a name + random suffix. */
export function generateUsername(fullName: string): string {
  const base = fullName
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 12);
  const rand = crypto.randomBytes(2).toString("hex");
  return `${base || "student"}${rand}`;
}
