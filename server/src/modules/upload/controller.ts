import { Request, Response } from "express";
import multer from "multer";
import { asyncHandler } from "../../utils/asyncHandler";
import { BadRequestError } from "../../utils/errors";
import { sendSuccess } from "../../utils/apiResponse";
import { uploadBuffer } from "../../utils/cloudinary";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 15 * 1024 * 1024 }, // 15MB
  fileFilter: (_req, file, cb) => {
    const allowed = /jpeg|jpg|png|pdf|doc|docx/;
    const ok = allowed.test(file.mimetype) || allowed.test(file.originalname);
    cb(null, ok);
  },
});

export const uploadMiddleware = upload.single("file");

export const handleUpload = asyncHandler(async (req: Request, res: Response) => {
  if (!req.file) throw new BadRequestError("No file uploaded");
  const resourceType = req.file.mimetype.startsWith("image/") ? "image" : "raw";
  const filename = `${Date.now()}-${req.file.originalname.replace(/\s+/g, "_")}`;
  const result = await uploadBuffer(req.file.buffer, resourceType, filename);
  sendSuccess(res, result, "Upload successful", 201);
});
