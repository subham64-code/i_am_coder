import { NextFunction, Request, Response } from "express";
import { HttpError } from "../utils/errors";
import logger from "../config/logger";
import { sendError } from "../utils/apiResponse";

/** 404 handler for unmatched routes. */
export function notFound(_req: Request, res: Response): void {
  sendError(res, 404, `Route not found: ${_req.originalUrl}`, "NOT_FOUND");
}

/** Centralized error handler. */
export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
): void {
  if (err instanceof HttpError) {
    sendError(res, err.status, err.message, err.code, err.details);
    return;
  }

  if (err && typeof err === "object" && "name" in err) {
    const e = err as { name?: string; message?: string };
    if (e.name === "PrismaClientKnownRequestError") {
      sendError(res, 409, "Database conflict", "DB_CONFLICT");
      return;
    }
    if (e.name === "JsonWebTokenError") {
      sendError(res, 401, "Invalid token", "INVALID_TOKEN");
      return;
    }
    if (e.name === "TokenExpiredError") {
      sendError(res, 401, "Token expired", "TOKEN_EXPIRED");
      return;
    }
  }

  logger.error("Unhandled error", { error: err, path: req.path });
  sendError(res, 500, "Internal Server Error", "INTERNAL_ERROR");
}
