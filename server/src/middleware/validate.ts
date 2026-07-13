import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
import { BadRequestError } from "../utils/errors";

type Target = "body" | "query" | "params";

/** Validate and coerce a request segment using a Zod schema. */
export function validate(schema: ZodSchema, target: Target = "body") {
  return (req: Request, _res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req[target]);
    if (!result.success) {
      next(
        new BadRequestError("Validation failed", result.error.flatten().fieldErrors),
      );
      return;
    }
    req[target] = result.data as never;
    next();
  };
}
