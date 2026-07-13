import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../utils/errors";
import { verifyAccessToken } from "../utils/jwt";

/**
 * Authenticates requests via Bearer access token.
 * Attaches `req.user` for downstream handlers.
 */
export function authenticate(req: Request, _res: Response, next: NextFunction): void {
  try {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
      throw new UnauthorizedError("Missing or invalid Authorization header");
    }
    const token = header.split(" ")[1];
    const payload = verifyAccessToken(token);
    req.user = {
      userId: payload.userId,
      role: payload.role,
      studentId: payload.studentId,
    };
    next();
  } catch (err) {
    next(err);
  }
}

/**
 * Restricts access to specific roles. Must run after `authenticate`.
 */
export function authorize(...roles: string[]) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    if (!req.user || !roles.includes(req.user.role)) {
      next(new UnauthorizedError("Insufficient privileges"));
      return;
    }
    next();
  };
}
