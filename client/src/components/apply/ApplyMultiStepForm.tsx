"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheck, FiChevronLeft, FiChevronRight, FiPlus, FiX } from "react-icons/fi";
import { applySchema, steps, type ApplyForm } from "./applySchema";
import { api } from "@/lib/api";
import { cn } from "@/lib/utils";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdxPuFU50xerjV5TU7IkNXAoVKXjiRY71Y0NCCvA-hDHM-b_Q/viewform?usp=publish-editor";

const courses = [
  "Full Stack Development",
  "Programming (C/C++/Java/Python)",
  "Data Analytics",
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "Agentic AI",
  "Interview Preparation",
  "Soft Skills",
];
const languages = ["English", "Hindi", "Odia"];

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman & Nicobar", "Chandigarh", "Delhi", "Jammu & Kashmir", "Ladakh",
  "Lakshadweep", "Puducherry",
];

function Captcha({
  a,
  b,
  value,
  onChange,
}: {
  a: number;
  b: number;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-sm text-white/70">
        Captcha: What is {a} + {b}?
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400"
      />
    </div>
  );
}

export function ApplyMultiStepForm() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaA] = useState(Math.floor(Math.random() * 9 + 1));
  const [captchaB] = useState(Math.floor(Math.random() * 9 + 1));

  const {
    register,
    handleSubmit,
    control,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<ApplyForm>({
    resolver: zodResolver(applySchema),
    mode: "onTouched",
    defaultValues: {
      skills: [],
      gender: undefined,
      country: "India",
      preferredLang: "English",
    } as any,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills" as never,
  });

  const next = async () => {
    const valid = await trigger(steps[step].fields as any);
    if (valid) setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = async () => {
    setServerError("");
    if (Number(captcha) !== captchaA + captchaB) {
      setServerError("Captcha answer is incorrect");
      return;
    }
    setSubmitting(true);
    try {
      const vals = getValues();
      const fd = new FormData();
      (Object.keys(vals) as (keyof ApplyForm)[]).forEach((k) => {
        const v = vals[k] as any;
        if (v instanceof FileList) {
          if (v.length) fd.append(k, v[0]);
        } else if (v instanceof File) {
          fd.append(k, v);
        } else if (Array.isArray(v)) {
          fd.append(k, JSON.stringify(v.filter(Boolean)));
        } else if (v !== undefined && v !== null) {
          fd.append(k, String(v));
        }
      });
      await api.upload("/application/apply", fd);
      setDone(true);
    } catch (e: any) {
      setServerError(e.message ?? "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-strong max-w-xl mx-auto p-10 text-center"
      >
        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-brand grid place-items-center text-white text-3xl">
          <FiCheck />
        </div>
        <h2 className="font-display text-3xl font-bold mt-4">Application Submitted!</h2>
        <p className="text-white/70 mt-2">
          Our admin team will verify your documents. You&apos;ll receive your Student ID and login
          credentials by email once approved.
        </p>

        <div className="mt-6 p-5 rounded-2xl bg-white/5 border border-white/10 text-left">
          <h3 className="font-semibold text-cyan-300">Next step — confirm your details</h3>
          <p className="text-white/70 text-sm mt-1">
            Please also fill our confirmation Google Form. After submitting it, our admin team will
            review your application and you will receive <strong>approval</strong> along with your
            <strong> User ID &amp; password</strong> via email.
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon text-sm inline-block mt-4"
          >
            Open Confirmation Form
          </a>
        </div>

        <a href="/login" className="text-cyan-300 hover:underline text-sm inline-block mt-6">
          Go to Login
        </a>
      </motion.div>
    );
  }

  return (
    <div className="glass-strong w-full max-w-3xl mx-auto p-6 sm:p-10">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {steps.map((s, i) => (
          <div key={s.title} className="flex-1">
            <div
              className={cn(
                "h-1.5 rounded-full transition-all",
                i <= step ? "bg-gradient-brand" : "bg-white/10",
              )}
            />
          </div>
        ))}
      </div>
      <h2 className="font-display text-2xl font-bold mb-1">
        Step {step + 1}: <span className="text-gradient">{steps[step].title}</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {step === 0 && (
              <>
                <Field label="Full Name" err={errors.fullName?.message}>
                  <input {...register("fullName")} className={inputCls} />
                </Field>
                <Field label="Gender" err={errors.gender?.message}>
                  <select {...register("gender")} className={selectCls}>
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Date of Birth" err={errors.dob?.message}>
                  <input type="date" {...register("dob")} className={inputCls} />
                </Field>
                <Field label="Father's Name" err={errors.fatherName?.message}>
                  <input {...register("fatherName")} className={inputCls} />
                </Field>
                <Field label="Mother's Name" err={errors.motherName?.message}>
                  <input {...register("motherName")} className={inputCls} />
                </Field>
              </>
            )}

            {step === 1 && (
              <>
                <Field label="Phone" err={errors.phone?.message}>
                  <input {...register("phone")} className={inputCls} />
                </Field>
                <Field label="WhatsApp" err={errors.whatsapp?.message}>
                  <input {...register("whatsapp")} className={inputCls} />
                </Field>
                <Field label="Email" err={errors.email?.message}>
                  <input {...register("email")} className={inputCls} />
                </Field>
                <Field label="Password" err={errors.password?.message}>
                  <input type="password" {...register("password")} className={inputCls} />
                </Field>
                <Field label="Confirm Password" err={errors.confirmPassword?.message}>
                  <input type="password" {...register("confirmPassword")} className={inputCls} />
                </Field>
                <Field label="PIN" err={errors.pin?.message}>
                  <input {...register("pin")} className={inputCls} />
                </Field>
                <Field label="District" err={errors.district?.message}>
                  <input {...register("district")} className={inputCls} />
                </Field>
                <Field label="State" err={errors.state?.message}>
                  <select {...register("state")} className={selectCls}>
                    <option value="">Select</option>
                    {states.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Country" err={errors.country?.message}>
                  <input {...register("country")} className={inputCls} />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Address" err={errors.address?.message}>
                    <textarea {...register("address")} className={cn(inputCls, "h-20")} />
                  </Field>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <Field label="College Name" err={errors.collegeName?.message}>
                  <input {...register("collegeName")} className={inputCls} />
                </Field>
                <Field label="University" err={errors.university?.message}>
                  <input {...register("university")} className={inputCls} />
                </Field>
                <Field label="Branch" err={errors.branch?.message}>
                  <input {...register("branch")} className={inputCls} />
                </Field>
                <Field label="Semester (1-8)" err={errors.semester?.message}>
                  <input type="number" {...register("semester")} className={inputCls} />
                </Field>
                <Field label="Roll Number" err={errors.rollNumber?.message}>
                  <input {...register("rollNumber")} className={inputCls} />
                </Field>
                <Field label="Registration No" err={errors.registrationNo?.message}>
                  <input {...register("registrationNo")} className={inputCls} />
                </Field>
                <Field label="10th %" err={errors.tenthPct?.message}>
                  <input type="number" step="0.01" {...register("tenthPct")} className={inputCls} />
                </Field>
                <Field label="12th % (optional)" err={errors.twelfthPct?.message}>
                  <input type="number" step="0.01" {...register("twelfthPct")} className={inputCls} />
                </Field>
                <Field label="Diploma % (optional)" err={errors.diplomaPct?.message}>
                  <input type="number" step="0.01" {...register("diplomaPct")} className={inputCls} />
                </Field>
                <Field label="Degree CGPA (0-10)" err={errors.degreeCgpa?.message}>
                  <input type="number" step="0.01" {...register("degreeCgpa")} className={inputCls} />
                </Field>
                <div className="sm:col-span-2">
                  <label className="text-sm text-white/70">Skills</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {fields.map((f, i) => (
                      <div key={f.id} className="flex items-center gap-1 glass px-3 py-1 rounded-full">
                        <input
                          {...register(`skills.${i}` as const)}
                          className="bg-transparent outline-none text-sm w-24"
                        />
                        <button type="button" onClick={() => remove(i)}>
                          <FiX />
                        </button>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => append("")}
                    className="mt-2 inline-flex items-center gap-1 text-cyan-300 text-sm"
                  >
                    <FiPlus /> Add skill
                  </button>
                  {errors.skills && (
                    <p className="text-red-400 text-xs mt-1">{errors.skills.message as string}</p>
                  )}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <Field label="Aadhaar Number" err={errors.aadhaar?.message}>
                  <input {...register("aadhaar")} className={inputCls} />
                </Field>
                <Field label="Interested Course" err={errors.interestedCourse?.message}>
                  <select
                    {...register("interestedCourse")}
                    className="w-full mt-1 px-4 py-3 rounded-xl bg-cyan-950/40 text-cyan-100 border border-cyan-400/30 outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="">Select</option>
                    {courses.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Preferred Language" err={errors.preferredLang?.message}>
                  <select {...register("preferredLang")} className={selectCls}>
                    {languages.map((l) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Emergency Contact" err={errors.emergencyContact?.message}>
                  <input {...register("emergencyContact")} className={inputCls} />
                </Field>
                <div className="sm:col-span-2 grid sm:grid-cols-2 gap-4">
                  <FileField label="Resume (optional)" {...register("resumeUrl")} />
                  <FileField label="Aadhaar Upload (optional)" {...register("aadhaarUrl")} />
                  <FileField label="Profile Picture (optional)" {...register("profilePicUrl")} />
                  <FileField label="Student ID Card (optional)" {...register("studentIdCardUrl")} />
                </div>
                <div className="sm:col-span-2">
                  <Captcha a={captchaA} b={captchaB} value={captcha} onChange={setCaptcha} />
                  {captcha && Number(captcha) !== captchaA + captchaB && (
                    <p className="text-red-400 text-xs mt-1">Incorrect captcha</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label className="flex items-start gap-2 text-sm text-white/70">
                    <input type="checkbox" {...register("declaration")} className="mt-1" />
                    I declare that the information provided is true and I agree to the code of conduct.
                  </label>
                  {errors.declaration && (
                    <p className="text-red-400 text-xs mt-1">{errors.declaration.message}</p>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {serverError && <p className="text-red-400 text-sm">{serverError}</p>}

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={prev}
            disabled={step === 0}
            className={cn("btn-ghost text-sm", step === 0 && "opacity-40 cursor-not-allowed")}
          >
            <FiChevronLeft className="inline" /> Back
          </button>
          {step < steps.length - 1 ? (
            <button type="button" onClick={next} className="btn-neon text-sm">
              Next <FiChevronRight className="inline" />
            </button>
          ) : (
            <button type="submit" disabled={submitting} className="btn-neon text-sm">
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

const inputCls =
  "w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 transition-colors";

const selectCls =
  "w-full mt-1 px-4 py-3 rounded-xl bg-ink-900 text-white border border-white/10 outline-none focus:border-cyan-400 transition-colors";

function Field({
  label,
  err,
  children,
}: {
  label: string;
  err?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-sm text-white/70">{label}</label>
      {children}
      {err && <p className="text-red-400 text-xs mt-1">{err}</p>}
    </div>
  );
}

function FileField({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm text-white/70">{label}</label>
      <input type="file" {...rest} className="w-full mt-1 text-sm text-white/60 file:mr-3 file:px-3 file:py-1 file:rounded-lg file:border-0 file:bg-white/10" />
    </div>
  );
}
