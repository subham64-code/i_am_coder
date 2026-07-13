import { z } from "zod";

export const approveSchema = z.object({
  applicationId: z.number().int().positive(),
  decision: z.enum(["APPROVED", "REJECTED"]),
  note: z.string().optional(),
});

export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  search: z.string().optional(),
});
