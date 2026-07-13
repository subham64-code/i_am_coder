import { Response } from "express";
import multer from "multer";
import { mysql, prisma } from "../../config/db";
import { asyncHandler } from "../../utils/asyncHandler";
import { BadRequestError, ConflictError } from "../../utils/errors";
import { sendSuccess } from "../../utils/apiResponse";
import { hashPassword } from "../../utils/password";
import { sendMail, applicationPendingTemplate } from "../../utils/email";
import { uploadBuffer } from "../../utils/cloudinary";
import { applicationSchema, applicationStatusSchema } from "./validation";

/** Multer: accept the four optional document fields in memory (max 15MB each). */
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 15 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const ok = /pdf|jpe?g|png|docx?/i.test(file.originalname) || /pdf|jpe?g|png|docx?/i.test(file.mimetype);
    cb(null, ok);
  },
});
export const applyUpload = upload.fields([
  { name: "resumeUrl" },
  { name: "aadhaarUrl" },
  { name: "profilePicUrl" },
  { name: "studentIdCardUrl" },
]);

function parseSkills(v: any): string[] {
  if (Array.isArray(v)) return v.map((s) => String(s).trim()).filter(Boolean);
  if (typeof v === "string") {
    const s = v.trim();
    if (s.startsWith("[")) {
      try {
        const arr = JSON.parse(s);
        if (Array.isArray(arr)) return arr.map((x) => String(x).trim()).filter(Boolean);
      } catch {
        /* fall through */
      }
    }
    return s.split(",").map((x) => x.trim()).filter(Boolean);
  }
  return [];
}

const toNum = (v: any) => (v === "" || v === undefined || v === null ? undefined : Number(v));

/**
 * Student submits the multi-step application (multipart/form-data).
 * Documents are uploaded to Cloudinary (folder per student email) and stored as URLs.
 * The User is created only after admin approval.
 */
export const submitApplication = asyncHandler(async (req: any, res: Response) => {
  const files = (req.files ?? {}) as Record<string, Express.Multer.File[]>;
  const b = (req.body ?? {}) as Record<string, any>;

  const raw = {
    ...b,
    semester: toNum(b.semester),
    tenthPct: toNum(b.tenthPct),
    twelfthPct: toNum(b.twelfthPct),
    diplomaPct: toNum(b.diplomaPct),
    degreeCgpa: toNum(b.degreeCgpa),
    skills: parseSkills(b.skills),
    declaration: b.declaration === "true" || b.declaration === "on" || b.declaration === true,
  };

  const data = applicationSchema.parse(raw);

  const folder = `iamcoder/applications/${data.email.replace(/[^a-zA-Z0-9]/g, "_")}`;
  const uploadOne = async (field: string, type: string): Promise<string | undefined> => {
    const f = files[field]?.[0];
    if (!f) return undefined;
    const result = await uploadBuffer(
      f.buffer,
      f.mimetype.startsWith("image/") ? "image" : "raw",
      `${folder}/${type}-${Date.now()}`,
    );
    return result.url;
  };

  const photoUrl = await uploadOne("profilePicUrl", "photo");
  const resumeUrl = await uploadOne("resumeUrl", "resume");
  const aadhaarUrl = await uploadOne("aadhaarUrl", "aadhaar");
  const studentIdCardUrl = await uploadOne("studentIdCardUrl", "studentid");

  const existing = await mysql.applicationForm.findUnique({ where: { email: data.email } });
  if (existing) throw new ConflictError("Application already submitted for this email");

  await mysql.applicationForm.create({
    data: {
      fullName: data.fullName,
      gender: data.gender,
      dob: new Date(data.dob),
      fatherName: data.fatherName,
      motherName: data.motherName,
      phone: data.phone,
      whatsapp: data.whatsapp,
      email: data.email,
      passwordHash: await hashPassword(data.password),
      address: data.address,
      district: data.district,
      state: data.state,
      country: data.country,
      pin: data.pin,
      aadhaar: data.aadhaar,
      collegeName: data.collegeName,
      university: data.university,
      branch: data.branch,
      semester: data.semester,
      rollNumber: data.rollNumber,
      registrationNo: data.registrationNo,
      tenthPct: data.tenthPct,
      twelfthPct: data.twelfthPct,
      diplomaPct: data.diplomaPct,
      degreeCgpa: data.degreeCgpa,
      skills: data.skills.join(", "),
      interestedCourse: data.interestedCourse,
      preferredLang: data.preferredLang,
      emergencyContact: data.emergencyContact,
      declaration: data.declaration,
      photoUrl: photoUrl ?? null,
      resumeUrl: resumeUrl ?? null,
      aadhaarUrl: aadhaarUrl ?? null,
      profilePicUrl: photoUrl ?? null,
      studentIdCard: studentIdCardUrl ?? null,
      status: "PENDING",
    },
  });

  // Send the student a "pending / received" confirmation email (best-effort).
  try {
    await sendMail({
      to: data.email,
      subject: "I AM CODER — Application Received (Pending Review) ✅",
      html: applicationPendingTemplate(data.fullName, data.email),
      text: `Hi ${data.fullName}, your application from ${data.email} is received and pending review.`,
    });
  } catch (err) {
    console.error("Pending email failed:", err);
  }

  sendSuccess(res, null, "Application submitted. Awaiting admin verification.", 201);
});

/** Check application status by email. */
export const getStatus = asyncHandler(async (req, res) => {
  const { email } = applicationStatusSchema.parse(req.query);
  const app = await mysql.applicationForm.findUnique({
    where: { email },
    select: {
      status: true,
      fullName: true,
      generatedStudentId: true,
      reviewedAt: true,
    },
  });
  if (!app) throw new BadRequestError("No application found for this email");
  sendSuccess(res, app, "Status fetched");
});
