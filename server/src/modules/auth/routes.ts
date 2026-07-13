import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import { validate } from "../../middleware/validate";
import {
  changePassword,
  login,
  logout,
  refresh,
  requestOtp,
  verifyOtpLogin,
  adminOtpRequest,
  adminOtpVerify,
} from "./controller";
import {
  changePasswordSchema,
  loginSchema,
  otpRequestSchema,
  otpVerifySchema,
  refreshSchema,
} from "./validation";

export const authRouter = Router();

authRouter.post("/login", validate(loginSchema), login);
authRouter.post("/refresh", validate(refreshSchema), refresh);
authRouter.post("/otp/request", validate(otpRequestSchema), requestOtp);
authRouter.post("/otp/verify", validate(otpVerifySchema), verifyOtpLogin);
authRouter.post("/change-password", authenticate, validate(changePasswordSchema), changePassword);
authRouter.post("/logout", authenticate, logout);

// Admin OTP login (predefined admin emails only)
authRouter.post("/admin/otp/request", validate(otpRequestSchema), adminOtpRequest);
authRouter.post("/admin/otp/verify", validate(otpVerifySchema), adminOtpVerify);
