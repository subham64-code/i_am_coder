"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { DashboardShell, studentLinks } from "@/components/layout/DashboardShell";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { useQuery, useMutation, useQueryClient } from "@/lib/hooks";
import { api } from "@/lib/api";

export default function QueriesPage() {
  const qc = useQueryClient();
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["my-queries"],
    queryFn: () => api.get<{ data: any[] }>("/queries/me"),
  });

  const send = useMutation({
    mutationFn: () => api.post("/queries", { subject, message }),
    onSuccess: () => {
      setSubject("");
      setMessage("");
      qc.invalidateQueries({ queryKey: ["my-queries"] });
    },
  });

  const items = data?.data ?? [];

  return (
    <ProtectedRoute role="STUDENT">
      <DashboardShell title="My Queries" links={studentLinks}>
        <div className="glass p-5 mb-6 space-y-3">
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your doubt…"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 h-28"
          />
          <button onClick={() => send.mutate()} className="btn-neon text-sm">
            Submit Query
          </button>
        </div>

        <div className="space-y-3">
          {isLoading ? (
            <p className="text-white/50">Loading…</p>
          ) : items.length === 0 ? (
            <p className="text-white/50">No queries yet.</p>
          ) : (
            items.map((q: any, i) => (
              <Reveal key={q.id} delay={i * 0.04}>
                <div className="glass p-4">
                  <div className="flex justify-between">
                    <span className="font-medium">{q.subject}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${q.status === "ANSWERED" ? "bg-green-500/20 text-green-300" : "bg-yellow-500/20 text-yellow-300"}`}>
                      {q.status}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm mt-1">{q.message}</p>
                  {q.reply && (
                    <p className="text-cyan-300 text-sm mt-2 border-l-2 border-cyan-400 pl-3">
                      Admin: {q.reply}
                    </p>
                  )}
                </div>
              </Reveal>
            ))
          )}
        </div>
      </DashboardShell>
    </ProtectedRoute>
  );
}
