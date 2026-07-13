import { Response } from "express";
import { mysql, prisma } from "../../config/db";
import { asyncHandler } from "../../utils/asyncHandler";
import { BadRequestError, NotFoundError } from "../../utils/errors";
import { sendSuccess, paginate } from "../../utils/apiResponse";
import { hashPassword } from "../../utils/password";
import { generateStudentId, generateUsername } from "../../utils/otp";
import { sendMail, credentialsEmailTemplate } from "../../utils/email";
import { env } from "../../config/env";
import { authenticate, authorize } from "../../middleware/auth";
import { approveSchema, paginationSchema } from "./validation";

/**
 * Approve or reject a student application.
 * On approval: generate Student ID + username, create User, send credentials email.
 */
export const reviewApplication = asyncHandler(async (req, res) => {
  const { applicationId, decision, note } = approveSchema.parse(req.body);
  const app = await mysql.applicationForm.findUnique({ where: { id: applicationId } });
  if (!app) throw new NotFoundError("Application not found");

  if (app.status !== "PENDING") {
    throw new BadRequestError(`Application already ${app.status}`);
  }

  await mysql.applicationForm.update({
    where: { id: applicationId },
    data: {
      status: decision,
      reviewedBy: req.user?.userId,
      reviewedAt: new Date(),
    },
  });

  if (decision === "APPROVED") {
    const studentId = generateStudentId();
    const username = generateUsername(app.fullName);
    const tempPassword = `${username}@${Math.floor(Math.random() * 9000 + 1000)}`;

    await prisma.user.create({
      data: {
        email: app.email,
        username,
        studentId,
        password: await hashPassword(tempPassword),
        role: "STUDENT",
        status: "APPROVED",
        fullName: app.fullName,
        phone: app.phone,
        mustChangePass: true,
      },
    });

    await mysql.studentRecord.create({
      data: { userId: app.email, applicationId: app.id },
    });

    await mysql.applicationForm.update({
      where: { id: applicationId },
      data: { generatedStudentId: studentId },
    });

    await sendMail({
      to: app.email,
      subject: "🎉 Your I AM CODER application is approved!",
      html: credentialsEmailTemplate(
        app.fullName,
        username,
        tempPassword,
        studentId,
        `${env.clientUrl}/login`,
      ),
    });
  }

  sendSuccess(res, { decision }, `Application ${decision.toLowerCase()}`);
});

export const listApplications = asyncHandler(async (req, res) => {
  const { page, limit, search } = paginationSchema.parse(req.query);
  const where = search
    ? { OR: [{ fullName: { contains: search } }, { email: { contains: search } }] }
    : {};
  const [rows, total] = await Promise.all([
    mysql.applicationForm.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: "desc" },
    }),
    mysql.applicationForm.count({ where }),
  ]);
  sendSuccess(res, rows, "Applications", 200, paginate(page, limit, total));
});

export const listStudents = asyncHandler(async (req, res) => {
  const { page, limit, search } = paginationSchema.parse(req.query);
  const where = search
    ? { OR: [{ fullName: { contains: search } }, { email: { contains: search } }] }
    : {};
  const [rows, total] = await Promise.all([
    prisma.user.findMany({
      where: { ...where, role: "STUDENT" },
      skip: (page - 1) * limit,
      take: limit,
      select: {
        id: true,
        fullName: true,
        email: true,
        studentId: true,
        status: true,
        createdAt: true,
      },
    }),
    prisma.user.count({ where: { ...where, role: "STUDENT" } }),
  ]);
  sendSuccess(res, rows, "Students", 200, paginate(page, limit, total));
});

export const dashboardStats = asyncHandler(async (_req, res) => {
  const [students, courses, projects, quizzes, pendingApps] = await Promise.all([
    prisma.user.count({ where: { role: "STUDENT" } }),
    prisma.course.count(),
    prisma.project.count(),
    prisma.quiz.count(),
    mysql.applicationForm.count({ where: { status: "PENDING" } }),
  ]);
  sendSuccess(
    res,
    { students, courses, projects, quizzes, pendingApplications: pendingApps },
    "Admin stats",
  );
});
