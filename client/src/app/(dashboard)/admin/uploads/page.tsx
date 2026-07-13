"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { DashboardShell, adminLinks } from "@/components/layout/DashboardShell";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { useMutation, useQueryClient } from "@/lib/hooks";
import { api } from "@/lib/api";

export default function AdminUploadsPage() {
  const qc = useQueryClient();
  const [form, setForm] = useState({
    slug: "",
    title: "",
    category: "Programming",
    level: "BEGINNER",
    description: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [uploadUrl, setUploadUrl] = useState("");

  const createCourse = useMutation({
    mutationFn: () => api.post("/courses", form),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-stats"] });
      setForm({ slug: "", title: "", category: "Programming", level: "BEGINNER", description: "" });
    },
  });

  const upload = useMutation({
    mutationFn: async () => {
      if (!file) return;
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api/v1"}/upload`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${localStorage.getItem("iac_token")}` },
          body: fd,
        },
      );
      const body = await res.json();
      setUploadUrl(body?.data?.url ?? "");
    },
  });

  return (
    <ProtectedRoute role="ADMIN">
      <DashboardShell title="Uploads & Content" links={adminLinks}>
        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal className="glass p-6">
            <h2 className="font-semibold text-lg mb-4">Create Course</h2>
            <div className="space-y-3">
              <input placeholder="Slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 outline-none" />
              <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 outline-none" />
              <div className="grid grid-cols-2 gap-3">
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 outline-none">
                  {["Programming", "Full Stack", "Data Analytics", "Machine Learning", "Deep Learning", "Generative AI", "Agentic AI", "Soft Skills", "Projects"].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
                <select value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 outline-none">
                  {["BEGINNER", "INTERMEDIATE", "ADVANCED"].map((l) => (
                    <option key={l}>{l}</option>
                  ))}
                </select>
              </div>
              <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 outline-none h-24" />
              <button onClick={() => createCourse.mutate()} className="btn-neon text-sm">Create Course</button>
            </div>
          </Reveal>

          <Reveal className="glass p-6">
            <h2 className="font-semibold text-lg mb-4">Upload File (Notes / Video / Photo)</h2>
            <input type="file" onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="text-sm text-white/60 file:mr-3 file:px-3 file:py-1 file:rounded-lg file:border-0 file:bg-white/10" />
            <button onClick={() => upload.mutate()} className="btn-neon text-sm mt-4">Upload to Cloudinary</button>
            {uploadUrl && (
              <p className="mt-3 text-xs text-cyan-300 break-all">Uploaded: {uploadUrl}</p>
            )}
          </Reveal>
        </div>
      </DashboardShell>
    </ProtectedRoute>
  );
}
