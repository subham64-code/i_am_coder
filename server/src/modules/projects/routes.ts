import { Router } from "express";
import { validate } from "../../middleware/validate";
import { authenticate, authorize } from "../../middleware/auth";
import { createProjectSchema } from "./validation";
import { createProject, deleteProject, getProject, listProjects } from "./controller";

export const projectRouter = Router();

projectRouter.get("/", listProjects);
projectRouter.get("/:id", getProject);
projectRouter.post("/", authenticate, authorize("ADMIN", "FACULTY"), validate(createProjectSchema), createProject);
projectRouter.delete("/:id", authenticate, authorize("ADMIN"), deleteProject);
