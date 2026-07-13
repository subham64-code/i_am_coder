import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import { achievements, dashboard, me } from "./controller";

export const studentRouter = Router();

studentRouter.use(authenticate);
studentRouter.get("/me", me);
studentRouter.get("/dashboard", dashboard);
studentRouter.get("/achievements", achievements);
