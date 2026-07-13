import { Response } from "express";
import { prisma } from "../../config/db";
import { asyncHandler } from "../../utils/asyncHandler";
import { NotFoundError } from "../../utils/errors";
import { sendSuccess, paginate } from "../../utils/apiResponse";
import { authenticate } from "../../middleware/auth";
import { authorize } from "../../middleware/auth";
import { createCourseSchema, listQuerySchema } from "./validation";

export const listCourses = asyncHandler(async (req, res) => {
  const { page, limit, category, level, search } = listQuerySchema.parse(req.query);
  const where: Record<string, unknown> = { published: true };
  if (category) where.category = category;
  if (level) where.level = level;
  if (search) where.title = { contains: search, mode: "insensitive" };

  const [rows, total] = await Promise.all([
    prisma.course.findMany({ where, skip: (page - 1) * limit, take: limit, orderBy: { createdAt: "desc" } }),
    prisma.course.count({ where }),
  ]);
  sendSuccess(res, rows, "Courses", 200, paginate(page, limit, total));
});

export const getCourse = asyncHandler(async (req, res) => {
  const course = await prisma.course.findUnique({ where: { id: req.params.id } });
  if (!course) throw new NotFoundError("Course not found");
  sendSuccess(res, course, "Course");
});

export const createCourse = asyncHandler(async (req, res) => {
  const data = createCourseSchema.parse(req.body);
  const course = await prisma.course.create({ data: { ...data, published: true } });
  sendSuccess(res, course, "Course created", 201);
});

export const updateCourse = asyncHandler(async (req, res) => {
  const data = createCourseSchema.partial().parse(req.body);
  const course = await prisma.course.update({ where: { id: req.params.id }, data });
  sendSuccess(res, course, "Course updated");
});

export const deleteCourse = asyncHandler(async (req, res) => {
  await prisma.course.delete({ where: { id: req.params.id } });
  sendSuccess(res, null, "Course deleted");
});

export const listCategories = asyncHandler(async (_req, res) => {
  const courses = await prisma.course.findMany({ where: { published: true }, select: { category: true } });
  const categories = Array.from(new Set(courses.map((c) => c.category)));
  sendSuccess(res, categories, "Categories");
});
