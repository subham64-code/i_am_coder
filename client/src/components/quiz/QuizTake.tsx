"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useQuery, useMutation } from "@/lib/hooks";
import { api } from "@/lib/api";

interface Q {
  id: string;
  type: "MCQ" | "FILL" | "LONG" | "CODING";
  question: string;
  options?: string[];
  marks: number;
}

export function QuizTake() {
  const { id } = useParams();
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<any>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["quiz", id],
    queryFn: () => api.get<{ data: { id: string; title: string; durationMin: number; questions: Q[] } }>(`/quiz/${id}`),
    enabled: !!id,
  });

  const quiz = data?.data;
  const duration = useMemo(() => (quiz?.durationMin ?? 10) * 60, [quiz]);

  useEffect(() => {
    if (quiz && secondsLeft === null) setSecondsLeft(duration);
  }, [quiz, duration, secondsLeft]);

  useEffect(() => {
    if (secondsLeft === null) return;
    if (secondsLeft <= 0) {
      submit(true);
      return;
    }
    const t = setTimeout(() => setSecondsLeft((s) => (s ?? 0) - 1), 1000);
    return () => clearTimeout(t);
  }, [secondsLeft]);

  const submitMut = useMutation({
    mutationFn: (auto: boolean) =>
      api.post("/quiz/submit", {
        quizId: id,
        answers: Object.entries(answers).map(([questionId, answer]) => ({ questionId, answer })),
        auto,
      }),
    onSuccess: (res: any) => setSubmitted(res.data),
  });

  function submit(auto = false) {
    if (submitted) return;
    submitMut.mutate(auto);
  }

  if (isLoading) return <p className="text-center text-white/50 py-20">Loading quiz…</p>;
  if (!quiz) return <p className="text-center text-white/50 py-20">Quiz not found.</p>;

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-strong max-w-xl mx-auto p-10 text-center mt-28">
        <h2 className="font-display text-3xl font-bold">Quiz Submitted ✅</h2>
        <div className="mt-4 text-2xl font-bold text-gradient">
          {submitted.score} / {submitted.totalMarks}
        </div>
        <p className="text-white/60 mt-2">Correct: {submitted.correct} · Wrong: {submitted.wrong}</p>
        <button onClick={() => router.push("/quiz")} className="btn-neon mt-6">Back to Quizzes</button>
      </motion.div>
    );
  }

  const mm = String(Math.floor((secondsLeft ?? 0) / 60)).padStart(2, "0");
  const ss = String((secondsLeft ?? 0) % 60).padStart(2, "0");

  return (
    <div className="min-h-screen px-4 pt-24 pb-16 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-bold">{quiz.title}</h1>
        <div className={`px-4 py-2 rounded-xl font-mono text-lg ${secondsLeft && secondsLeft < 30 ? "bg-red-500/20 text-red-300" : "glass"}`}>
          ⏱ {mm}:{ss}
        </div>
      </div>

      <div className="space-y-6">
        {quiz.questions.map((q, idx) => (
          <div key={q.id} className="glass p-5">
            <p className="font-medium">
              {idx + 1}. {q.question}{" "}
              <span className="text-xs text-cyan-300">[{q.type} · {q.marks}]</span>
            </p>

            {q.type === "MCQ" && q.options && (
              <div className="mt-3 grid sm:grid-cols-2 gap-2">
                {q.options.map((opt, oi) => (
                  <label
                    key={oi}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition-colors ${
                      answers[q.id] === opt ? "border-cyan-400 bg-cyan-400/10" : "border-white/10 hover:bg-white/5"
                    }`}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      checked={answers[q.id] === opt}
                      onChange={() => setAnswers((a) => ({ ...a, [q.id]: opt }))}
                    />
                    <span className="text-sm">{String.fromCharCode(65 + oi)}. {opt}</span>
                  </label>
                ))}
              </div>
            )}

            {q.type === "FILL" && (
              <input
                value={answers[q.id] ?? ""}
                onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                placeholder="Fill in the blank"
                className="w-full mt-3 px-3 py-2 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-cyan-400"
              />
            )}

            {(q.type === "LONG" || q.type === "CODING") && (
              <textarea
                value={answers[q.id] ?? ""}
                onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                placeholder={q.type === "CODING" ? "Write your code…" : "Write your answer…"}
                className={`w-full mt-3 px-3 py-2 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-cyan-400 ${q.type === "CODING" ? "font-mono h-40" : "h-28"}`}
              />
            )}
          </div>
        ))}
      </div>

      <button onClick={() => submit(false)} className="btn-neon w-full mt-8">
        Submit Quiz
      </button>
    </div>
  );
}
