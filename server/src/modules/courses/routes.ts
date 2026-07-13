import { Router } from "express";
import { validate } from "../../middleware/validate";
import { authenticate, authorize } from "../../middleware/auth";
import { createCourseSchema, listQuerySchema } from "./validation";
import {
  createCourse,
  deleteCourse,
  getCourse,
  listCategories,
  listCourses,
  updateCourse,
} from "./controller";

export const courseRouter = Router();

courseRouter.get("/", validate(listQuerySchema, "query"), listCourses);
courseRouter.get("/categories", listCategories);
courseRouter.get("/:id", getCourse);

courseRouter.post("/", authenticate, authorize("ADMIN", "FACULTY"), validate(createCourseSchema), createCourse);
courseRouter.put("/:id", authenticate, authorize("ADMIN", "FACULTY"), validate(createCourseSchema.partial()), updateCourse);
courseRouter.delete("/:id", authenticate, authorize("ADMIN"), deleteCourse);
