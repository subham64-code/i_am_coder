import { z } from "zod";

export const createQuerySchema = z.object({
  subject: z.string().min(3),
  message: z.string().min(5),
});

export const replyQuerySchema = z.object({
  queryId: z.string().min(1),
  reply: z.string().min(1),
});

export const listQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  status: z.enum(["OPEN", "ANSWERED"]).optional(),
});
