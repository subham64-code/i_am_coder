"use client";

import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const categories = [
  { title: "Mathematics", items: ["Aptitude", "Reasoning", "English"], icon: "🧮" },
  { title: "Personal Interview", items: ["Soft Skills", "CV / Resume"], icon: "🎯" },
  { title: "Group Discussion", items: ["Current Affairs", "General Knowledge"], icon: "🗣️" },
  { title: "Programming Languages", items: ["C", "C++", "Java", "Python"], icon: "💻" },
  { title: "Full Stack", items: ["HTML", "CSS", "JS", "React", "Node", "Next.js", "TypeScript", "Git"], icon: "🧩" },
  { title: "Python Frameworks", items: ["Django", "Tkinter", "WSGI"], icon: "🐍" },
  { title: "Databases", items: ["DBMS", "SQL", "MongoDB"], icon: "🗄️" },
  { title: "DSA", items: ["LeetCode", "Codeforces"], icon: "⚡" },
  { title: "AI & ML", items: ["ML", "DL", "NLP", "CNN", "RNN", "DNN", "GNN", "CV", "MLOps"], icon: "🤖" },
  { title: "GenAI & Agentic AI", items: ["GenAI", "Agentic AI", "Prompt Eng"], icon: "✨" },
  { title: "Data Analytics", items: ["Excel", "Power BI", "Tableau"], icon: "📊" },
  { title: "Microsoft & No-Code", items: ["Scratch", "Micro:bit", "NotebookLM", "Wokwi", "PictoBlox", "Word", "PPT"], icon: "🧰" },
  { title: "Build & Deploy", items: ["Website", "App", "Scratch → Deploy"], icon: "🚀" },
  { title: "Game Development", items: ["Game Dev using AI"], icon: "🎮" },
];

export function CourseCategories() {
  return (
    <section id="courses" className="section">
      <Reveal>
        <h2 className="text-center font-display text-3xl sm:text-4xl font-bold mb-3">
          Explore <span className="text-gradient">Course Categories</span>
        </h2>
        <p className="text-center text-white/60 max-w-2xl mx-auto mb-10">
          A complete, free roadmap — from Mathematics & Aptitude to Full Stack, AI/ML, GenAI,
          Data Analytics, No-Code tools and AI-assisted Game Development.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.04}>
            <motion.div whileHover={{ y: -6 }} className="glass p-5 card-hover h-full">
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
              <div className="flex flex-wrap gap-2">
                {c.items.map((it) => (
                  <span key={it} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
