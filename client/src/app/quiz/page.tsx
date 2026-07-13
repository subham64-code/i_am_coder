"use client";

import Link from "next/link";
import { useQuery } from "@/lib/hooks";
import { api } from "@/lib/api";
import { Reveal } from "@/components/ui/Reveal";

export default function QuizListPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["quizzes"],
    queryFn: () => api.get<{ data: any[] }>("/quiz"),
  });

  return (
    <div className="min-h-screen px-4 pt-28 pb-16">
      <div className="text-center mb-8">
        <h1 className="font-display text-4xl font-bold">
          Daily <span className="text-gradient">Quiz</span>
        </h1>
        <p className="text-white/60 mt-2">MCQ, OMR-style, fill-in, long-answer & coding — with timer.</p>
      </div>

      {isLoading ? (
        <p className="text-center text-white/50">Loading…</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {(data?.data ?? []).map((q: any, i: number) => (
            <Reveal key={q.id} delay={i * 0.04}>
              <Link
                href={`/quiz/${q.id}`}
                className="glass p-5 card-hover block hover:border-cyan-400"
              >
                <h3 className="font-semibold text-lg">{q.title}</h3>
                <p className="text-white/60 text-sm mt-1">
                  {Array.isArray(q.questions) ? q.questions.length : 0} questions ·{" "}
                  {q.durationMin} min
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
