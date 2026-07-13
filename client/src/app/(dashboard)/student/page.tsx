"use client";

import { motion } from "framer-motion";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { DashboardShell, studentLinks } from "@/components/layout/DashboardShell";
import { useQuery } from "@/lib/hooks";
import { api } from "@/lib/api";
import { Reveal } from "@/components/ui/Reveal";
import { ChangePassword } from "@/components/auth/ChangePassword";

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <Reveal className="glass p-5 card-hover">
      <div className="font-display text-3xl font-bold text-gradient">{value}</div>
      <div className="text-sm text-white/60 mt-1">{label}</div>
    </Reveal>
  );
}

export default function StudentDashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["student-dashboard"],
    queryFn: () => api.get<{ data: any }>("/student/dashboard"),
  });

  const d = data?.data;

  return (
    <ProtectedRoute role="STUDENT">
      <DashboardShell title="Student Dashboard" links={studentLinks}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard label="XP Points" value={d?.xp ?? 0} />
          <StatCard label="Coding Streak" value={`${d?.streak ?? 0} days`} />
          <StatCard label="Badges" value={(d?.badges ?? []).length} />
          <StatCard label="Quizzes Taken" value={(d?.quizResults ?? []).length} />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass p-6">
            <h2 className="font-semibold text-lg mb-4">Recent Quiz Results</h2>
            {isLoading ? (
              <p className="text-white/50">Loading…</p>
            ) : (d?.quizResults ?? []).length === 0 ? (
              <p className="text-white/50">No quizzes yet. Head to the Quiz section!</p>
            ) : (
              <div className="space-y-2">
                {(d.quizResults as any[]).map((q: any) => (
                  <div key={q.id} className="flex justify-between glass px-4 py-2 rounded-lg">
                    <span className="text-sm">Quiz {q.quizId.slice(-6)}</span>
                    <span className="text-cyan-300 font-semibold">
                      {q.score}/{q.totalMarks}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="glass p-6">
            <h2 className="font-semibold text-lg mb-4">Notifications</h2>
            {(d?.notifications ?? []).length === 0 ? (
              <p className="text-white/50 text-sm">You&apos;re all caught up.</p>
            ) : (
              <div className="space-y-2">
                {(d.notifications as any[]).map((n: any) => (
                  <div key={n.id} className="glass px-3 py-2 rounded-lg">
                    <div className="text-sm font-medium">{n.title}</div>
                    <div className="text-xs text-white/60">{n.body}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-6">
          <ChangePassword />
        </div>
      </DashboardShell>
    </ProtectedRoute>
  );
}
