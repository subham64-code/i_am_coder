import { z } from "zod";

export const createQuizSchema = z.object({
  title: z.string().min(3),
  courseId: z.string().optional(),
  questions: z
    .array(
      z.object({
        id: z.string(),
        type: z.enum(["MCQ", "FILL", "LONG", "CODING"]),
        question: z.string().min(1),
        options: z.array(z.string()).optional(),
        answer: z.any(),
        explanation: z.string().optional(),
        marks: z.number().default(1),
        negative: z.number().default(0.25),
      }),
    )
    .min(1),
  durationMin: z.number().int().min(1).default(10),
  scheduledAt: z.string().optional(),
  negativeMarking: z.boolean().default(true),
});

export const submitQuizSchema = z.object({
  quizId: z.string(),
  answers: z.array(
    z.object({
      questionId: z.string(),
      answer: z.any(),
    }),
  ),
});
