/** Standardized HTTP error. */
export class HttpError extends Error {
  public readonly status: number;
  public readonly code: string;
  public readonly details?: unknown;

  constructor(status: number, message: string, code = "ERROR", details?: unknown) {
    super(message);
    this.status = status;
    this.code = code;
    this.details = details;
    this.name = "HttpError";
  }
}

export class BadRequestError extends HttpError {
  constructor(message = "Bad Request", details?: unknown) {
    super(400, message, "BAD_REQUEST", details);
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message = "Unauthorized", details?: unknown) {
    super(401, message, "UNAUTHORIZED", details);
  }
}

export class ForbiddenError extends HttpError {
  constructor(message = "Forbidden", details?: unknown) {
    super(403, message, "FORBIDDEN", details);
  }
}

export class NotFoundError extends HttpError {
  constructor(message = "Not Found", details?: unknown) {
    super(404, message, "NOT_FOUND", details);
  }
}

export class ConflictError extends HttpError {
  constructor(message = "Conflict", details?: unknown) {
    super(409, message, "CONFLICT", details);
  }
}
