import { Response } from "express";
import { prisma } from "../../config/db";
import { asyncHandler } from "../../utils/asyncHandler";
import { sendSuccess } from "../../utils/apiResponse";
import { authenticate } from "../../middleware/auth";
import { bookmarkSchema } from "./validation";

export const addBookmark = asyncHandler(async (req, res) => {
  const data = bookmarkSchema.parse(req.body);
  const existing = await prisma.bookmark.findFirst({
    where: { userId: req.user!.userId, type: data.type, refId: data.refId },
  });
  if (existing) return sendSuccess(res, existing, "Already bookmarked");
  const bookmark = await prisma.bookmark.create({
    data: { ...data, userId: req.user!.userId },
  });
  sendSuccess(res, bookmark, "Bookmarked", 201);
});

export const listBookmarks = asyncHandler(async (req, res) => {
  const bookmarks = await prisma.bookmark.findMany({
    where: { userId: req.user!.userId },
    orderBy: { createdAt: "desc" },
  });
  sendSuccess(res, bookmarks, "Bookmarks");
});

export const removeBookmark = asyncHandler(async (req, res) => {
  await prisma.bookmark.deleteMany({ where: { userId: req.user!.userId, id: req.params.id } });
  sendSuccess(res, null, "Removed");
});
