import { Response } from "express";

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  meta?: Record<string, unknown>;
  error?: { code: string; details?: unknown };
}

/** Send a successful JSON response. */
export function sendSuccess<T>(
  res: Response,
  data: T,
  message = "Success",
  status = 200,
  meta?: Record<string, unknown>,
): Response {
  const body: ApiResponse<T> = { success: true, message, data, ...(meta ? { meta } : {}) };
  return res.status(status).json(body);
}

/** Send an error JSON response. */
export function sendError(
  res: Response,
  status: number,
  message: string,
  code = "ERROR",
  details?: unknown,
): Response {
  const body: ApiResponse = {
    success: false,
    message,
    error: { code, details },
  };
  return res.status(status).json(body);
}

/** Build a paginated meta object. */
export function paginate(page: number, limit: number, total: number) {
  return {
    page,
    limit,
    total,
    totalPages: Math.max(1, Math.ceil(total / limit)),
    hasNext: page * limit < total,
  };
}
