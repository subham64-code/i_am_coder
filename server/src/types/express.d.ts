import "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        role: string;
        studentId?: string;
      };
      traceId?: string;
    }
  }
}
