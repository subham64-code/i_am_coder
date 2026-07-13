import { prisma } from "../../config/db";
import { asyncHandler } from "../../utils/asyncHandler";
import { NotFoundError } from "../../utils/errors";
import { sendSuccess } from "../../utils/apiResponse";
import { createQuizSchema, submitQuizSchema } from "./validation";

export const createQuiz = asyncHandler(async (req, res) => {
  const data = createQuizSchema.parse(req.body);
  const quiz = await prisma.quiz.create({
    data: {
      title: data.title,
      courseId: data.courseId,
      questions: data.questions,
      durationMin: data.durationMin,
      scheduledAt: data.scheduledAt ? new Date(data.scheduledAt) : undefined,
      negativeMarking: data.negativeMarking,
      createdBy: req.user!.userId,
    },
  });
  sendSuccess(res, quiz, "Quiz created", 201);
});

export const listQuizzes = asyncHandler(async (_req, res) => {
  const quizzes = await prisma.quiz.findMany({ orderBy: { createdAt: "desc" } });
  sendSuccess(res, quizzes, "Quizzes");
});

export const getQuiz = asyncHandler(async (req, res) => {
  const quiz = await prisma.quiz.findUnique({ where: { id: req.params.id } });
  if (!quiz) throw new NotFoundError("Quiz not found");
  // Strip answers when returning to student
  const safe = { ...quiz, questions: (quiz.questions as any[]).map((q) => ({ ...q, answer: undefined })) };
  sendSuccess(res, safe, "Quiz");
});

/** Score a submission with negative marking and instant result. */
export const submitQuiz = asyncHandler(async (req, res) => {
  const { quizId, answers } = submitQuizSchema.parse(req.body);
  const quiz = await prisma.quiz.findUnique({ where: { id: quizId } });
  if (!quiz) throw new NotFoundError("Quiz not found");

  const questions = quiz.questions as any[];
  let score = 0;
  let correct = 0;
  let wrong = 0;
  const detailed = questions.map((q) => {
    const ans = answers.find((a) => a.questionId === q.id);
    const isCorrect = ans && JSON.stringify(ans.answer) === JSON.stringify(q.answer);
    if (isCorrect) {
      score += q.marks;
      correct++;
    } else if (ans) {
      score -= quiz.negativeMarking ? q.negative : 0;
      wrong++;
    }
    return {
      questionId: q.id,
      correct: !!isCorrect,
      explanation: q.explanation ?? null,
    };
  });

  const totalMarks = questions.reduce((s, q) => s + q.marks, 0);
  const result = await prisma.quizResult.create({
    data: {
      userId: req.user!.userId,
      quizId,
      score: Math.max(0, score),
      totalMarks,
      correct,
      wrong,
      answers: detailed,
    },
  });
  sendSuccess(res, result, "Quiz submitted", 201);
});

export const leaderboard = asyncHandler(async (_req, res) => {
  const results = await prisma.quizResult.findMany({
    orderBy: { score: "desc" },
    take: 50,
  });
  sendSuccess(res, results, "Leaderboard");
});
