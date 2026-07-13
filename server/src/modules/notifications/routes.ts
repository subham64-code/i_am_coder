import { Router } from "express";
import { validate } from "../../middleware/validate";
import { authenticate, authorize } from "../../middleware/auth";
import { z } from "zod";
import { announcements, createAnnouncement, markRead, myNotifications, notify } from "./controller";

const notifySchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
  type: z.enum(["GENERAL", "QUIZ", "ASSIGNMENT", "ATTENDANCE", "ANNOUNCEMENT", "COURSE"]).default("GENERAL"),
  userId: z.string().optional(),
});

export const notificationRouter = Router();

notificationRouter.get("/", authenticate, myNotifications);
notificationRouter.get("/announcements", announcements);
notificationRouter.patch("/:id/read", authenticate, markRead);
notificationRouter.post("/send", authenticate, authorize("ADMIN", "FACULTY"), validate(notifySchema), notify);
notificationRouter.post(
  "/announcement",
  authenticate,
  authorize("ADMIN"),
  validate(z.object({ title: z.string(), body: z.string(), pinned: z.boolean().default(false) })),
  createAnnouncement,
);
