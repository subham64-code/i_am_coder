import { z } from "zod";

const genderEnum = z.enum(["Male", "Female", "Other"]);
const stateEnum = z.string().min(1);
const countryEnum = z.string().min(1);
const semesterEnum = z.number().int().min(1).max(8);

/**
 * Full application schema used by the multi-step animated form.
 * Every field is validated; files are uploaded separately and referenced by URL.
 */
export const applicationSchema = z.object({
  fullName: z.string().min(2, "Full name required"),
  gender: genderEnum,
  dob: z.string().refine((v) => !isNaN(Date.parse(v)), "Invalid DOB"),

  fatherName: z.string().min(2),
  motherName: z.string().min(2),

  phone: z.string().regex(/^[0-9]{10}$/, "10-digit phone"),
  whatsapp: z.string().regex(/^[0-9]{10}$/, "10-digit whatsapp"),
  email: z.string().email(),

  password: z.string().min(8, "Password min 8 chars"),
  confirmPassword: z.string().min(8),

  address: z.string().min(5),
  district: z.string().min(1),
  state: stateEnum,
  country: countryEnum,
  pin: z.string().regex(/^[0-9]{6}$/, "6-digit PIN"),

  aadhaar: z.string().regex(/^[0-9]{12}$/, "12-digit Aadhaar"),

  collegeName: z.string().min(2),
  university: z.string().min(2),
  branch: z.string().min(1),
  semester: semesterEnum,
  rollNumber: z.string().min(1),
  registrationNo: z.string().min(1),

  tenthPct: z.number().min(0).max(100),
  twelfthPct: z.number().min(0).max(100).optional(),
  diplomaPct: z.number().min(0).max(100).optional(),
  degreeCgpa: z.number().min(0).max(10),

  skills: z.array(z.string()).min(1, "Add at least one skill"),

  interestedCourse: z.string().min(1),
  preferredLang: z.string().min(1),
  emergencyContact: z.string().regex(/^[0-9]{10}$/, "10-digit emergency contact"),

  declaration: z.literal(true, { errorMap: () => ({ message: "You must accept the declaration" }) }),

  // File URLs (uploaded prior via /upload)
  photoUrl: z.string().url().optional(),
  resumeUrl: z.string().url().optional(),
  aadhaarUrl: z.string().url().optional(),
  profilePicUrl: z.string().url().optional(),
  studentIdCardUrl: z.string().url().optional(),
}).refine((d) => d.password === d.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export const applicationStatusSchema = z.object({
  email: z.string().email(),
});
