"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { DashboardShell, studentLinks } from "@/components/layout/DashboardShell";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { useQuery, useMutation, useQueryClient } from "@/lib/hooks";
import { api } from "@/lib/api";

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <Reveal className="glass p-5 card-hover">
      <div className="font-display text-3xl font-bold text-gradient">{value}</div>
      <div className="text-sm text-white/60 mt-1">{label}</div>
    </Reveal>
  );
}

export default function AttendancePage() {
  const qc = useQueryClient();
  const [status, setStatus] = useState<"PRESENT" | "LATE" | "ABSENT">("PRESENT");

  const { data, isLoading } = useQuery({
    queryKey: ["attendance"],
    queryFn: () => api.get<{ data: { records: any[]; percentage: number } }>("/attendance/me"),
  });

  const mark = useMutation({
    mutationFn: () => api.post("/attendance/mark", { status, method: "manual" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["attendance"] }),
  });

  const d = data?.data;

  return (
    <ProtectedRoute role="STUDENT">
      <DashboardShell title="My Attendance" links={studentLinks}>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <StatCard label="Attendance %" value={`${Math.round(d?.percentage ?? 0)}%`} />
          <StatCard label="Days Marked" value={(d?.records ?? []).length} />
          <StatCard label="Status Today" value={status} />
        </div>

        <div className="glass p-5 mb-6 flex flex-wrap items-center gap-3">
          <span className="text-white/70">Mark today as:</span>
          {(["PRESENT", "LATE", "ABSENT"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`px-4 py-2 rounded-lg text-sm ${status === s ? "bg-gradient-brand text-white" : "glass"}`}
            >
              {s}
            </button>
          ))}
          <button onClick={() => mark.mutate()} className="btn-neon text-sm ml-auto">
            Mark Attendance
          </button>
        </div>

        <div className="glass p-5">
          <h2 className="font-semibold mb-3">Recent</h2>
          {isLoading ? (
            <p className="text-white/50">Loading…</p>
          ) : (d?.records ?? []).length === 0 ? (
            <p className="text-white/50">No records yet.</p>
          ) : (
            <div className="space-y-2">
              {d!.records.map((r: any) => (
                <div key={r.id} className="flex justify-between glass px-4 py-2 rounded-lg text-sm">
                  <span>{new Date(r.date).toLocaleDateString()}</span>
                  <span className="text-cyan-300">{r.status}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </DashboardShell>
    </ProtectedRoute>
  );
}
