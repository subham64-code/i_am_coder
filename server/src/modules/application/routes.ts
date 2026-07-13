import { Router } from "express";
import { validate } from "../../middleware/validate";
import { applicationStatusSchema } from "./validation";
import { applyUpload, getStatus, submitApplication } from "./controller";

export const applicationRouter = Router();

applicationRouter.post("/apply", applyUpload, submitApplication);
applicationRouter.get("/status", validate(applicationStatusSchema, "query"), getStatus);
