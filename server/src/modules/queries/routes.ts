import { Router } from "express";
import { validate } from "../../middleware/validate";
import { authenticate, authorize } from "../../middleware/auth";
import { createQuerySchema, listQuerySchema, replyQuerySchema } from "./validation";
import { createQuery, listQueries, myQueries, replyQuery } from "./controller";

export const queryRouter = Router();

queryRouter.post("/", authenticate, validate(createQuerySchema), createQuery);
queryRouter.get("/me", authenticate, myQueries);
queryRouter.get("/", authenticate, authorize("ADMIN", "FACULTY"), validate(listQuerySchema, "query"), listQueries);
queryRouter.post("/reply", authenticate, authorize("ADMIN", "FACULTY"), validate(replyQuerySchema), replyQuery);
