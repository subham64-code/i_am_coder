import { z } from "zod";

export const bookmarkSchema = z.object({
  type: z.enum(["course", "video", "note", "project", "quiz"]),
  refId: z.string().min(1),
  title: z.string().min(1),
});
