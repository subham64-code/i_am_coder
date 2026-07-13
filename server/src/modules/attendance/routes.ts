import { Router } from "express";
import { validate } from "../../middleware/validate";
import { authenticate, authorize } from "../../middleware/auth";
import { markAttendanceSchema } from "./validation";
import { adminReport, markAttendance, monthlyReport, myAttendance } from "./controller";

export const attendanceRouter = Router();

attendanceRouter.post("/mark", authenticate, validate(markAttendanceSchema), markAttendance);
attendanceRouter.get("/me", authenticate, myAttendance);
attendanceRouter.get("/report", authenticate, monthlyReport);
attendanceRouter.get("/admin", authenticate, authorize("ADMIN", "FACULTY"), adminReport);
