"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "@/lib/api";
import { Reveal } from "@/components/ui/Reveal";

const schema = z
  .object({
    oldPassword: z.string().min(6, "Enter current password"),
    newPassword: z.string().min(8, "Password min 8 chars"),
    confirm: z.string().min(8),
  })
  .refine((d) => d.newPassword === d.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

export function ChangePassword() {
  const [status, setStatus] = useState<"idle" | "saving" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema) });

  const onSubmit = async (d: z.infer<typeof schema>) => {
    setStatus("saving");
    setMsg("");
    try {
      await api.post("/auth/change-password", {
        oldPassword: d.oldPassword,
        newPassword: d.newPassword,
      });
      setStatus("ok");
      setMsg("Password changed successfully.");
      reset();
    } catch (e: any) {
      setStatus("err");
      setMsg(e.message ?? "Could not change password");
    }
  };

  return (
    <Reveal className="glass p-6">
      <h2 className="font-semibold text-lg mb-4">Change Password</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="text-sm text-white/70">Current Password</label>
          <input type="password" {...register("oldPassword")} className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400" />
          {errors.oldPassword && <p className="text-red-400 text-xs mt-1">{errors.oldPassword.message}</p>}
        </div>
        <div>
          <label className="text-sm text-white/70">New Password</label>
          <input type="password" {...register("newPassword")} className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400" />
          {errors.newPassword && <p className="text-red-400 text-xs mt-1">{errors.newPassword.message}</p>}
        </div>
        <div>
          <label className="text-sm text-white/70">Confirm New Password</label>
          <input type="password" {...register("confirm")} className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400" />
          {errors.confirm && <p className="text-red-400 text-xs mt-1">{errors.confirm.message}</p>}
        </div>
        <button type="submit" disabled={status === "saving"} className="btn-neon text-sm">
          {status === "saving" ? "Saving…" : "Update Password"}
        </button>
        {status === "ok" && <p className="text-green-400 text-sm">{msg}</p>}
        {status === "err" && <p className="text-red-400 text-sm">{msg}</p>}
      </form>
    </Reveal>
  );
}
