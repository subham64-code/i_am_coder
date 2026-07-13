import { Response } from "express";
import { prisma } from "../../config/db";
import { asyncHandler } from "../../utils/asyncHandler";
import { sendSuccess } from "../../utils/apiResponse";
import { authenticate } from "../../middleware/auth";
import { authorize } from "../../middleware/auth";
import { markAttendanceSchema } from "./validation";

/** Self / admin attendance marking. One record per student per day. */
export const markAttendance = asyncHandler(async (req, res) => {
  const { userId, status, method } = markAttendanceSchema.parse(req.body);
  const targetId = userId ?? req.user!.userId;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const existing = await prisma.attendance.findFirst({
    where: { userId: targetId, date: { gte: today } },
  });
  if (existing) {
    const updated = await prisma.attendance.update({
      where: { id: existing.id },
      data: { status, method, markedBy: req.user!.userId },
    });
    sendSuccess(res, updated, "Attendance updated");
    return;
  }
  const created = await prisma.attendance.create({
    data: {
      userId: targetId,
      date: new Date(),
      status,
      method,
      markedBy: req.user?.userId,
    },
  });
  sendSuccess(res, created, "Attendance marked", 201);
});

export const myAttendance = asyncHandler(async (req, res) => {
  const records = await prisma.attendance.findMany({
    where: { userId: req.user!.userId },
    orderBy: { date: "desc" },
    take: 90,
  });
  const present = records.filter((r) => r.status === "PRESENT" || r.status === "LATE").length;
  sendSuccess(res, { records, percentage: records.length ? (present / records.length) * 100 : 0 }, "Attendance");
});

export const monthlyReport = asyncHandler(async (req, res) => {
  const { userId } = req.query as { userId?: string };
  const target = userId ?? req.user!.userId;
  const records = await prisma.attendance.findMany({ where: { userId: target } });
  const report = { total: records.length, present: records.filter((r) => r.status !== "ABSENT").length };
  sendSuccess(res, report, "Monthly report");
});

export const adminReport = asyncHandler(async (_req, res) => {
  const records = await prisma.attendance.findMany({ orderBy: { date: "desc" }, take: 200 });
  sendSuccess(res, records, "All attendance");
});
