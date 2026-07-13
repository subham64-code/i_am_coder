import { z } from "zod";

/** Mirrors the backend application schema (server/src/modules/application/validation.ts). */
export const applySchema = z
  .object({
    // Personal
    fullName: z.string().min(2, "Full name required"),
    gender: z.enum(["Male", "Female", "Other"], { errorMap: () => ({ message: "Select gender" }) }),
    dob: z.string().refine((v) => !isNaN(Date.parse(v)), "Invalid date of birth"),
    fatherName: z.string().min(2),
    motherName: z.string().min(2),

    // Contact
    phone: z.string().regex(/^[0-9]{10}$/, "10-digit phone"),
    whatsapp: z.string().regex(/^[0-9]{10}$/, "10-digit WhatsApp"),
    email: z.string().email(),
    password: z.string().min(8, "Password min 8 chars"),
    confirmPassword: z.string().min(8),
    address: z.string().min(5),
    district: z.string().min(1),
    state: z.string().min(1),
    country: z.string().min(1),
    pin: z.string().regex(/^[0-9]{6}$/, "6-digit PIN"),

    // Academic
    collegeName: z.string().min(2),
    university: z.string().min(2),
    branch: z.string().min(1),
    semester: z.coerce.number().int().min(1).max(8),
    rollNumber: z.string().min(1),
    registrationNo: z.string().min(1),
    tenthPct: z.coerce.number().min(0).max(100),
    twelfthPct: z.coerce.number().min(0).max(100).optional(),
    diplomaPct: z.coerce.number().min(0).max(100).optional(),
    degreeCgpa: z.coerce.number().min(0).max(10),
    skills: z.array(z.string()).min(1, "Add at least one skill"),

    // Documents / extras (optional files — omitted when empty)
    aadhaar: z.string().regex(/^[0-9]{12}$/, "12-digit Aadhaar"),
    interestedCourse: z.string().min(1),
    preferredLang: z.string().min(1),
    emergencyContact: z.string().regex(/^[0-9]{10}$/, "10-digit emergency contact"),
    photoUrl: z.any().optional(),
    resumeUrl: z.any().optional(),
    aadhaarUrl: z.any().optional(),
    profilePicUrl: z.any().optional(),
    studentIdCardUrl: z.any().optional(),

    declaration: z.literal(true, {
      errorMap: () => ({ message: "You must accept the declaration" }),
    }),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ApplyForm = z.infer<typeof applySchema>;

export const steps: { title: string; fields: (keyof ApplyForm)[] }[] = [
  { title: "Personal Details", fields: ["fullName", "gender", "dob", "fatherName", "motherName"] },
  {
    title: "Contact & Address",
    fields: [
      "phone",
      "whatsapp",
      "email",
      "password",
      "confirmPassword",
      "address",
      "district",
      "state",
      "country",
      "pin",
    ],
  },
  {
    title: "Academic Background",
    fields: [
      "collegeName",
      "university",
      "branch",
      "semester",
      "rollNumber",
      "registrationNo",
      "tenthPct",
      "twelfthPct",
      "diplomaPct",
      "degreeCgpa",
      "skills",
    ],
  },
  {
    title: "Documents & Confirm",
    fields: [
      "aadhaar",
      "interestedCourse",
      "preferredLang",
      "emergencyContact",
      "photoUrl",
      "resumeUrl",
      "aadhaarUrl",
      "profilePicUrl",
      "studentIdCardUrl",
      "declaration",
    ],
  },
];
