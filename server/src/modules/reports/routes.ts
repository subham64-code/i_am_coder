import { Router } from "express";
import { authenticate, authorize } from "../../middleware/auth";
import { exportReport } from "./controller";

export const reportsRouter = Router();

reportsRouter.get("/export", authenticate, authorize("ADMIN"), exportReport);
