import { z } from "zod";

export const createProjectSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  category: z.string().min(1),
  techStack: z.array(z.string()).default([]),
  sourceUrl: z.string().url().optional(),
  demoUrl: z.string().url().optional(),
  architecture: z.string().optional(),
  difficulty: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]).default("BEGINNER"),
});
