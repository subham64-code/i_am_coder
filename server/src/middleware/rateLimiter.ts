import rateLimit from "express-rate-limit";
import { env } from "../config/env";

/**
 * Configurable rate limiter. In production, swap the in-memory store for
 * a Redis-backed store (e.g. rate-limit-redis) for multi-instance support.
 */
export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: env.isProd ? 200 : 1000,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many requests, please try again later." },
});

/** Stricter limiter for auth endpoints to mitigate brute force. */
export const authRateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: env.isProd ? 20 : 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many authentication attempts." },
});
