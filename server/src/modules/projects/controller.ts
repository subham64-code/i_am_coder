import { prisma } from "../../config/db";
import { asyncHandler } from "../../utils/asyncHandler";
import { sendSuccess, paginate } from "../../utils/apiResponse";
import { createProjectSchema } from "./validation";
import { z } from "zod";

const listQuery = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  category: z.string().optional(),
});

export const listProjects = asyncHandler(async (req, res) => {
  const { page, limit, category } = listQuery.parse(req.query);
  const where = category ? { category } : {};
  const [rows, total] = await Promise.all([
    prisma.project.findMany({ where, skip: (page - 1) * limit, take: limit, orderBy: { createdAt: "desc" } }),
    prisma.project.count({ where }),
  ]);
  sendSuccess(res, rows, "Projects", 200, paginate(page, limit, total));
});

export const getProject = asyncHandler(async (req, res) => {
  const project = await prisma.project.findUnique({ where: { id: req.params.id } });
  sendSuccess(res, project, "Project");
});

export const createProject = asyncHandler(async (req, res) => {
  const data = createProjectSchema.parse(req.body);
  const project = await prisma.project.create({ data });
  sendSuccess(res, project, "Project created", 201);
});

export const deleteProject = asyncHandler(async (req, res) => {
  await prisma.project.delete({ where: { id: req.params.id } });
  sendSuccess(res, null, "Project deleted");
});
