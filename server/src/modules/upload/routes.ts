import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import { handleUpload, uploadMiddleware } from "./controller";

export const uploadRouter = Router();

uploadRouter.post("/", authenticate, uploadMiddleware, handleUpload);
