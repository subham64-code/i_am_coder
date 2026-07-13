"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { DashboardShell, adminLinks } from "@/components/layout/DashboardShell";
import { useMutation, useQuery, useQueryClient } from "@/lib/hooks";
import { api } from "@/lib/api";
import { Reveal } from "@/components/ui/Reveal";

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <Reveal className="glass p-5 card-hover">
      <div className="font-display text-3xl font-bold text-gradient">{value}</div>
      <div className="text-sm text-white/60 mt-1">{label}</div>
    </Reveal>
  );
}

export default function AdminDashboard() {
  const qc = useQueryClient();
  const [decision, setDecision] = useState<{ id: number; decision: "APPROVED" | "REJECTED" } | null>(
    null,
  );

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: () => api.get<{ data: any }>("/admin/stats"),
  });
  const { data: apps, isLoading } = useQuery({
    queryKey: ["admin-applications"],
    queryFn: () => api.get<{ data: any[] }>("/admin/applications?limit=50"),
  });

  const review = useMutation({
    mutationFn: (body: { applicationId: number; decision: "APPROVED" | "REJECTED" }) =>
      api.post("/admin/application/review", body),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-applications"] });
      qc.invalidateQueries({ queryKey: ["admin-stats"] });
      setDecision(null);
    },
  });

  const s = stats?.data;

  return (
    <ProtectedRoute role="ADMIN">
      <DashboardShell title="Admin Dashboard" links={adminLinks}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <StatCard label="Students" value={s?.students ?? 0} />
          <StatCard label="Courses" value={s?.courses ?? 0} />
          <StatCard label="Projects" value={s?.projects ?? 0} />
          <StatCard label="Quizzes" value={s?.quizzes ?? 0} />
          <StatCard label="Pending Apps" value={s?.pendingApplications ?? 0} />
        </div>

          <div className="glass p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">Pending Applications</h2>
            <div className="flex gap-2">
              <a href="/reports/export?type=applications&format=csv" className="text-xs px-3 py-1.5 rounded-lg glass hover:bg-white/10">
                Export CSV
              </a>
              <a href="/reports/export?type=applications&format=xlsx" className="text-xs px-3 py-1.5 rounded-lg glass hover:bg-white/10">
                Export XLSX
              </a>
            </div>
          </div>
          {isLoading ? (
            <p className="text-white/50">Loading…</p>
          ) : (apps?.data ?? []).length === 0 ? (
            <p className="text-white/50">No applications yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-white/50 text-left border-b border-white/10">
                    <th className="py-2 pr-4">Name</th>
                    <th className="py-2 pr-4">Email</th>
                    <th className="py-2 pr-4">Course</th>
                    <th className="py-2 pr-4">Status</th>
                    <th className="py-2 pr-4">Documents</th>
                    <th className="py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {(apps!.data as any[]).map((a) => (
                    <tr key={a.id} className="border-b border-white/5">
                      <td className="py-3 pr-4">{a.fullName}</td>
                      <td className="py-3 pr-4 text-white/70">{a.email}</td>
                      <td className="py-3 pr-4 text-white/70">{a.interestedCourse}</td>
                      <td className="py-3 pr-4">
                        <span className="px-2 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-300">
                          {a.status}
                        </span>
                      </td>
                      <td className="py-3 pr-4">
                        <DocLinks a={a} />
                      </td>
                      <td className="py-3 flex gap-2">
                        <button
                          onClick={() => review.mutate({ applicationId: a.id, decision: "APPROVED" })}
                          className="px-3 py-1 rounded-lg bg-green-500/20 text-green-300 hover:bg-green-500/30"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => review.mutate({ applicationId: a.id, decision: "REJECTED" })}
                          className="px-3 py-1 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500/30"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <BroadcastCard />
      </DashboardShell>
    </ProtectedRoute>
  );
}

function DocLinks({ a }: { a: any }) {
  const docs: { label: string; url?: string | null }[] = [
    { label: "Photo", url: a.photoUrl ?? a.profilePicUrl },
    { label: "Resume", url: a.resumeUrl },
    { label: "Aadhaar", url: a.aadhaarUrl },
    { label: "ID Card", url: a.studentIdCard },
  ];
  return (
    <div className="flex flex-wrap gap-1">
      {docs.map((d) =>
        d.url ? (
          <a
            key={d.label}
            href={d.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 rounded-md text-xs bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30"
          >
            {d.label}
          </a>
        ) : (
          <span
            key={d.label}
            className="px-2 py-1 rounded-md text-xs bg-white/5 text-white/30"
          >
            {d.label}
          </span>
        ),
      )}
    </div>
  );
}

function BroadcastCard() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const send = useMutation({
    mutationFn: () => api.post("/notifications/send", { title, body, type: "ANNOUNCEMENT" }),
    onSuccess: () => {
      setTitle("");
      setBody("");
    },
  });
  return (
    <div className="glass p-6">
      <h2 className="font-semibold text-lg mb-3">Send Notification to All Students</h2>
      <div className="space-y-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-cyan-400"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Message"
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-cyan-400 h-20"
        />
        <button onClick={() => send.mutate()} className="btn-neon text-sm">
          Broadcast
        </button>
      </div>
    </div>
  );
}
