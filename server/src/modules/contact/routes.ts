import { Router } from "express";
import { validate } from "../../middleware/validate";
import { contactSchema } from "./validation";
import { submitContact } from "./controller";

export const contactRouter = Router();

contactRouter.post("/", validate(contactSchema), submitContact);
