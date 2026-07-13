import { prisma } from "../../config/db";
import { asyncHandler } from "../../utils/asyncHandler";
import { sendSuccess } from "../../utils/apiResponse";

export const me = asyncHandler(async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user!.userId },
    select: {
      id: true,
      fullName: true,
      email: true,
      username: true,
      studentId: true,
      role: true,
      status: true,
      avatar: true,
      createdAt: true,
    },
  });
  sendSuccess(res, user, "Profile");
});

export const dashboard = asyncHandler(async (req, res) => {
  const userId = req.user!.userId;
  const [quizResults, attendance, badges, notifications] = await Promise.all([
    prisma.quizResult.findMany({ where: { userId }, orderBy: { submittedAt: "desc" }, take: 10 }),
    prisma.attendance.findMany({ where: { userId }, orderBy: { date: "desc" }, take: 30 }),
    prisma.badge.findMany({ where: { userId } }),
    prisma.notification.findMany({ where: { userId }, orderBy: { createdAt: "desc" }, take: 10 }),
  ]);
  const xp = badges.reduce((s, b) => s + b.xp, 0);
  sendSuccess(
    res,
    {
      xp,
      badges,
      quizResults,
      attendance,
      notifications,
      streak: attendance.length,
    },
    "Student dashboard",
  );
});

export const achievements = asyncHandler(async (req, res) => {
  const badges = await prisma.badge.findMany({ where: { userId: req.user!.userId } });
  sendSuccess(res, badges, "Achievements");
});
