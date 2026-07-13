"use client";

import { Reveal } from "@/components/ui/Reveal";
import { DashboardShell, studentLinks } from "@/components/layout/DashboardShell";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { useQuery, useMutation, useQueryClient } from "@/lib/hooks";
import { api } from "@/lib/api";
import { FiTrash2 } from "react-icons/fi";

export default function BookmarksPage() {
  const qc = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["bookmarks"],
    queryFn: () => api.get<{ data: any[] }>("/bookmarks"),
  });

  const remove = useMutation({
    mutationFn: (id: string) => api.delete(`/bookmarks/${id}`),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["bookmarks"] }),
  });

  const items = data?.data ?? [];

  return (
    <ProtectedRoute role="STUDENT">
      <DashboardShell title="My Bookmarks" links={studentLinks}>
        {isLoading ? (
          <p className="text-white/50">Loading…</p>
        ) : items.length === 0 ? (
          <p className="text-white/50">No bookmarks yet. Bookmark courses, videos or quizzes to find them here.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((b: any, i) => (
              <Reveal key={b.id} delay={i * 0.04}>
                <div className="glass p-5 card-hover flex items-center justify-between">
                  <div>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 uppercase">{b.type}</span>
                    <p className="mt-2 font-medium">{b.title}</p>
                  </div>
                  <button onClick={() => remove.mutate(b.id)} className="text-red-300 hover:text-red-200">
                    <FiTrash2 />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </DashboardShell>
    </ProtectedRoute>
  );
}
