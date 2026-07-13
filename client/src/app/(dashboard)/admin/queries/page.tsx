"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { DashboardShell, adminLinks } from "@/components/layout/DashboardShell";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { useQuery, useMutation, useQueryClient } from "@/lib/hooks";
import { api } from "@/lib/api";

export default function AdminQueriesPage() {
  const qc = useQueryClient();
  const [reply, setReply] = useState<Record<string, string>>({});

  const { data, isLoading } = useQuery({
    queryKey: ["admin-queries"],
    queryFn: () => api.get<{ data: any[] }>("/queries?limit=50"),
  });

  const send = useMutation({
    mutationFn: ({ queryId, reply }: { queryId: string; reply: string }) =>
      api.post("/queries/reply", { queryId, reply }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin-queries"] }),
  });

  const items = data?.data ?? [];

  return (
    <ProtectedRoute role="ADMIN">
      <DashboardShell title="Student Queries" links={adminLinks}>
        {isLoading ? (
          <p className="text-white/50">Loading…</p>
        ) : items.length === 0 ? (
          <p className="text-white/50">No queries yet.</p>
        ) : (
          <div className="space-y-4">
            {items.map((q: any, i) => (
              <Reveal key={q.id} delay={i * 0.04}>
                <div className="glass p-5">
                  <div className="flex justify-between">
                    <span className="font-medium">{q.subject}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${q.status === "ANSWERED" ? "bg-green-500/20 text-green-300" : "bg-yellow-500/20 text-yellow-300"}`}>
                      {q.status}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm mt-1">{q.message}</p>
                  {q.reply && <p className="text-cyan-300 text-sm mt-2">Admin: {q.reply}</p>}
                  <div className="flex gap-2 mt-3">
                    <input
                      value={reply[q.id] ?? ""}
                      onChange={(e) => setReply({ ...reply, [q.id]: e.target.value })}
                      placeholder="Type reply…"
                      className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-cyan-400 text-sm"
                    />
                    <button
                      onClick={() => send.mutate({ queryId: q.id, reply: reply[q.id] ?? "" })}
                      className="btn-neon text-sm"
                    >
                      Reply
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </DashboardShell>
    </ProtectedRoute>
  );
}
