import { Router } from "express";
import { authRouter } from "../modules/auth/routes";
import { applicationRouter } from "../modules/application/routes";
import { courseRouter } from "../modules/courses/routes";
import { quizRouter } from "../modules/quiz/routes";
import { attendanceRouter } from "../modules/attendance/routes";
import { projectRouter } from "../modules/projects/routes";
import { notificationRouter } from "../modules/notifications/routes";
import { uploadRouter } from "../modules/upload/routes";
import { adminRouter } from "../modules/admin/routes";
import { studentRouter } from "../modules/student/routes";
import { queryRouter } from "../modules/queries/routes";
import { bookmarkRouter } from "../modules/bookmarks/routes";
import { reportsRouter } from "../modules/reports/routes";
import { contactRouter } from "../modules/contact/routes";

export const router = Router();

router.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "I AM CODER API",
    version: "1.0.0",
    endpoints: [
      "/auth",
      "/application",
      "/courses",
      "/quiz",
      "/attendance",
      "/projects",
      "/notifications",
      "/upload",
      "/admin",
      "/student",
      "/queries",
      "/bookmarks",
      "/reports",
      "/contact",
    ],
  });
});

router.use("/auth", authRouter);
router.use("/application", applicationRouter);
router.use("/courses", courseRouter);
router.use("/quiz", quizRouter);
router.use("/attendance", attendanceRouter);
router.use("/projects", projectRouter);
router.use("/notifications", notificationRouter);
router.use("/upload", uploadRouter);
router.use("/admin", adminRouter);
router.use("/student", studentRouter);
router.use("/queries", queryRouter);
router.use("/bookmarks", bookmarkRouter);
router.use("/reports", reportsRouter);
router.use("/contact", contactRouter);
