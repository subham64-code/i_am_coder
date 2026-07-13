"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { api } from "@/lib/api";
import { useAppDispatch } from "@/lib/hooks";
import { setCredentials } from "@/lib/store";

const studentSchema = z.object({
  identifier: z.string().min(3, "Enter email / username / student ID"),
  password: z.string().min(6, "Password min 6 chars"),
});

const adminOtpSchema = z.object({
  email: z.string().email("Enter admin email"),
  otp: z.string().length(6, "6-digit OTP"),
});

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [tab, setTab] = useState<"student" | "admin">("student");
  const [error, setError] = useState("");
  const [adminStep, setAdminStep] = useState<"email" | "otp">("email");
  const [adminEmail, setAdminEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof studentSchema>>({ resolver: zodResolver(studentSchema) });

  const onStudent = async (data: z.infer<typeof studentSchema>) => {
    setError("");
    try {
      const res = await api.post<{ data: { accessToken: string; refreshToken: string; role: string } }>(
        "/auth/login",
        data,
      );
      const { accessToken, refreshToken, role } = res.data;
      dispatch(setCredentials({ token: accessToken, refreshToken, user: { userId: "", role } }));
      router.push(role === "ADMIN" || role === "FACULTY" ? "/admin" : "/student");
    } catch (e: any) {
      setError(e.message ?? "Login failed");
    }
  };

  const requestOtp = async () => {
    setError("");
    try {
      await api.post("/auth/admin/otp/request", { email: adminEmail });
      setAdminStep("otp");
    } catch (e: any) {
      setError(e.message ?? "Could not send OTP");
    }
  };

  const onAdminOtp = async (data: z.infer<typeof adminOtpSchema>) => {
    setError("");
    try {
      const res = await api.post<{ data: { accessToken: string; refreshToken: string } }>(
        "/auth/admin/otp/verify",
        data,
      );
      dispatch(
        setCredentials({
          token: res.data.accessToken,
          refreshToken: res.data.refreshToken,
          user: { userId: "", role: "ADMIN" },
        }),
      );
      router.push("/admin");
    } catch (e: any) {
      setError(e.message ?? "Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen grid place-items-center px-4 pt-24 pb-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-strong w-full max-w-md p-8">
        <h1 className="font-display text-3xl font-bold text-center">
          Welcome <span className="text-gradient">Back</span>
        </h1>

        <div className="flex gap-2 mt-6 p-1 glass rounded-xl">
          {(["student", "admin"] as const).map((t) => (
            <button
              key={t}
              onClick={() => {
                setTab(t);
                setError("");
              }}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold capitalize transition-colors ${
                tab === t ? "bg-gradient-brand text-white" : "text-white/60"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "student" ? (
          <form onSubmit={handleSubmit(onStudent)} className="mt-6 space-y-4">
            <div>
              <label className="text-sm text-white/70">Identifier</label>
              <input {...register("identifier")} placeholder="email / username / student ID" className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400" />
              {errors.identifier && <p className="text-red-400 text-xs mt-1">{errors.identifier.message}</p>}
            </div>
            <div>
              <label className="text-sm text-white/70">Password</label>
              <input type="password" {...register("password")} placeholder="••••••••" className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400" />
              {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button type="submit" disabled={isSubmitting} className="btn-neon w-full">
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>
        ) : (
          <div className="mt-6 space-y-4">
            {adminStep === "email" ? (
              <>
                <div>
                  <label className="text-sm text-white/70">Admin Email</label>
                  <input value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} placeholder="admin@iamcoder.dev" className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400" />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button onClick={requestOtp} className="btn-neon w-full">Send OTP</button>
              </>
            ) : (
              <OtpForm email={adminEmail} onSubmit={onAdminOtp} error={error} />
            )}
          </div>
        )}

        <p className="text-center text-sm text-white/60 mt-5">
          New here?{" "}
          <Link href="/apply" className="text-cyan-300 hover:underline">
            Apply Now — it&apos;s free
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

function OtpForm({
  email,
  onSubmit,
  error,
}: {
  email: string;
  onSubmit: (d: { email: string; otp: string }) => void;
  error: string;
}) {
  const { register, handleSubmit } = useForm<{ otp: string }>();
  return (
    <form onSubmit={handleSubmit((d) => onSubmit({ email, otp: d.otp }))} className="space-y-4">
      <div>
        <label className="text-sm text-white/70">Enter OTP sent to {email}</label>
        <input {...register("otp")} placeholder="6-digit code" className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 tracking-widest text-center" />
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button type="submit" className="btn-neon w-full">Verify & Login</button>
    </form>
  );
}
