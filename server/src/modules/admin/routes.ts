import { Router } from "express";
import { authenticate, authorize } from "../../middleware/auth";
import { validate } from "../../middleware/validate";
import { approveSchema, paginationSchema } from "./validation";
import {
  dashboardStats,
  listApplications,
  listStudents,
  reviewApplication,
} from "./controller";

export const adminRouter = Router();

// All admin routes require ADMIN role
adminRouter.use(authenticate, authorize("ADMIN"));

adminRouter.post("/application/review", validate(approveSchema), reviewApplication);
adminRouter.get("/applications", validate(paginationSchema, "query"), listApplications);
adminRouter.get("/students", validate(paginationSchema, "query"), listStudents);
adminRouter.get("/stats", dashboardStats);

// Management scaffolds (extend with full CRUD)
adminRouter.get("/courses", async (_req, res) => res.json({ success: true, message: "course mgmt" }));
adminRouter.get("/quiz", async (_req, res) => res.json({ success: true, message: "quiz mgmt" }));
adminRouter.get("/attendance", async (_req, res) => res.json({ success: true, message: "attendance mgmt" }));
adminRouter.get("/notifications", async (_req, res) => res.json({ success: true, message: "notification mgmt" }));
