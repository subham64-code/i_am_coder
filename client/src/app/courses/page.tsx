"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiBookmark, FiSearch } from "react-icons/fi";
import { useQuery, useMutation, useQueryClient } from "@/lib/hooks";
import { api } from "@/lib/api";
import { Reveal } from "@/components/ui/Reveal";

interface Course {
  id: string;
  slug: string;
  title: string;
  category: string;
  level: string;
  description: string;
  tags: string[];
  enrolled: number;
}

const categories = [
  "All",
  "Mathematics",
  "Personal Interview",
  "Group Discussion",
  "Programming Languages",
  "Full Stack",
  "Python Frameworks",
  "Databases",
  "DSA",
  "AI & ML",
  "GenAI & Agentic AI",
  "Data Analytics",
  "Microsoft & No-Code",
  "Build & Deploy",
  "Game Development",
  "Tools Exploration",
];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const qc = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["courses", search, category],
    queryFn: () =>
      api.get<{ data: Course[] }>(
        `/courses?${new URLSearchParams({
          search,
          ...(category !== "All" ? { category } : {}),
        })}`,
      ),
  });

  const bookmark = useMutation({
    mutationFn: (c: Course) =>
      api.post("/bookmarks", { type: "course", refId: c.id, title: c.title }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["bookmarks"] }),
  });

  const courses = useMemo(() => data?.data ?? [], [data]);

  return (
    <div className="min-h-screen px-4 pt-28 pb-16">
      <div className="text-center mb-8">
        <h1 className="font-display text-4xl font-bold">
          Explore <span className="text-gradient">Free Courses</span>
        </h1>
        <p className="text-white/60 mt-2">A-to-Z, beginner to advanced — 100% free.</p>
      </div>

      <div className="max-w-3xl mx-auto flex gap-2 mb-6">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-3 text-white/40" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              category === c ? "bg-gradient-brand text-white" : "glass text-white/70"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {isLoading ? (
        <p className="text-center text-white/50">Loading courses…</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {courses.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.04}>
              <motion.div whileHover={{ y: -6 }} className="glass p-5 card-hover h-full flex flex-col">
                <div className="flex items-start justify-between">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10">{c.category}</span>
                  <button
                    onClick={() => bookmark.mutate(c)}
                    title="Bookmark"
                    className="text-white/60 hover:text-cyan-300"
                  >
                    <FiBookmark />
                  </button>
                </div>
                <h3 className="font-semibold text-lg mt-3">{c.title}</h3>
                <p className="text-white/60 text-sm mt-1 flex-1">{c.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-white/50">{c.level} · {c.enrolled} enrolled</span>
                  <Link href={`/quiz`} className="text-cyan-300 text-sm font-medium">
                    Start →
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
