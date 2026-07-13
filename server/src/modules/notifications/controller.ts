import { prisma } from "../../config/db";
import { asyncHandler } from "../../utils/asyncHandler";
import { sendSuccess } from "../../utils/apiResponse";
import { z } from "zod";

const notifySchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
  type: z.enum(["GENERAL", "QUIZ", "ASSIGNMENT", "ATTENDANCE", "ANNOUNCEMENT", "COURSE"]).default("GENERAL"),
  userId: z.string().optional(),
});

export const notify = asyncHandler(async (req, res) => {
  const data = notifySchema.parse(req.body);
  const notification = await prisma.notification.create({
    data: { title: data.title, body: data.body, type: data.type, userId: data.userId },
  });
  sendSuccess(res, notification, "Notification created", 201);
});

export const myNotifications = asyncHandler(async (req, res) => {
  const notifications = await prisma.notification.findMany({
    where: { OR: [{ userId: req.user!.userId }, { userId: null }] },
    orderBy: { createdAt: "desc" },
    take: 50,
  });
  sendSuccess(res, notifications, "Notifications");
});

export const markRead = asyncHandler(async (req, res) => {
  await prisma.notification.updateMany({
    where: { id: req.params.id, userId: req.user!.userId },
    data: { read: true },
  });
  sendSuccess(res, null, "Marked read");
});

export const announcements = asyncHandler(async (_req, res) => {
  const rows = await prisma.announcement.findMany({ orderBy: { createdAt: "desc" } });
  sendSuccess(res, rows, "Announcements");
});

export const createAnnouncement = asyncHandler(async (req, res) => {
  const data = z.object({ title: z.string(), body: z.string(), pinned: z.boolean().default(false) }).parse(req.body);
  const ann = await prisma.announcement.create({ data });
  sendSuccess(res, ann, "Announcement created", 201);
});
