import { Router } from "express";
import { validate } from "../../middleware/validate";
import { authenticate } from "../../middleware/auth";
import { authorize } from "../../middleware/auth";
import { createQuizSchema, submitQuizSchema } from "./validation";
import { createQuiz, getQuiz, leaderboard, listQuizzes, submitQuiz } from "./controller";

export const quizRouter = Router();

quizRouter.get("/", listQuizzes);
quizRouter.get("/leaderboard", leaderboard);
quizRouter.get("/:id", getQuiz);
quizRouter.post("/submit", authenticate, validate(submitQuizSchema), submitQuiz);
quizRouter.post("/", authenticate, authorize("ADMIN", "FACULTY"), validate(createQuizSchema), createQuiz);
