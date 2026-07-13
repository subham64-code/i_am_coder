import { z } from "zod";

export const createCourseSchema = z.object({
  slug: z.string().min(3),
  title: z.string().min(3),
  category: z.string().min(1),
  level: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]).default("BEGINNER"),
  description: z.string().min(10),
  thumbnail: z.string().url().optional(),
  tags: z.array(z.string()).default([]),
  instructor: z.string().optional(),
  isFree: z.boolean().default(true),
  modules: z.any().optional(),
});

export const listQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  category: z.string().optional(),
  level: z.string().optional(),
  search: z.string().optional(),
});
