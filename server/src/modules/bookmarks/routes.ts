import { Router } from "express";
import { validate } from "../../middleware/validate";
import { authenticate } from "../../middleware/auth";
import { bookmarkSchema } from "./validation";
import { addBookmark, listBookmarks, removeBookmark } from "./controller";

export const bookmarkRouter = Router();

bookmarkRouter.use(authenticate);
bookmarkRouter.post("/", validate(bookmarkSchema), addBookmark);
bookmarkRouter.get("/", listBookmarks);
bookmarkRouter.delete("/:id", removeBookmark);
