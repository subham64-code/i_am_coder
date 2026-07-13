import { Response } from "express";
import { prisma } from "../../config/db";
import { asyncHandler } from "../../utils/asyncHandler";
import { NotFoundError } from "../../utils/errors";
import { sendSuccess, paginate } from "../../utils/apiResponse";
import { authenticate } from "../../middleware/auth";
import { authorize } from "../../middleware/auth";
import { createQuerySchema, listQuerySchema, replyQuerySchema } from "./validation";

export const createQuery = asyncHandler(async (req, res) => {
  const data = createQuerySchema.parse(req.body);
  const query = await prisma.query.create({
    data: { ...data, userId: req.user!.userId },
  });
  sendSuccess(res, query, "Query submitted", 201);
});

export const myQueries = asyncHandler(async (req, res) => {
  const queries = await prisma.query.findMany({
    where: { userId: req.user!.userId },
    orderBy: { createdAt: "desc" },
  });
  sendSuccess(res, queries, "Your queries");
});

export const listQueries = asyncHandler(async (req, res) => {
  const { page, limit, status } = listQuerySchema.parse(req.query);
  const where = status ? { status } : {};
  const [rows, total] = await Promise.all([
    prisma.query.findMany({ where, skip: (page - 1) * limit, take: limit, orderBy: { createdAt: "desc" } }),
    prisma.query.count({ where }),
  ]);
  sendSuccess(res, rows, "Queries", 200, paginate(page, limit, total));
});

export const replyQuery = asyncHandler(async (req, res) => {
  const { queryId, reply } = replyQuerySchema.parse(req.body);
  const query = await prisma.query.findUnique({ where: { id: queryId } });
  if (!query) throw new NotFoundError("Query not found");
  const updated = await prisma.query.update({
    where: { id: queryId },
    data: { reply, status: "ANSWERED", repliedAt: new Date() },
  });
  sendSuccess(res, updated, "Query replied");
});
