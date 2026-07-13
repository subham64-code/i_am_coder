"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { TypingText } from "@/components/ui/TypingText";

const Hero3D = dynamic(() => import("./Hero3D").then((m) => m.Hero3D), {
  ssr: false,
  loading: () => null,
});

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grid-glow">
      <div className="absolute inset-0 opacity-60">
        <Hero3D />
      </div>
      <div className="section relative z-10 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-block px-4 py-1 rounded-full glass text-sm text-cyan-300 mb-6"
          >
            🚀 100% FREE · Beginner to Advanced
          </motion.span>
          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Learn Coding <br />
            <span className="text-gradient">Completely FREE</span>
          </motion.h1>
          <motion.p variants={item} className="mt-4 text-xl text-cyan-300 font-medium">
            <TypingText
              words={[
                "Become Industry Ready",
                "Master Full Stack Dev",
                "Build with AI & ML",
                "Crack Your Dream Job",
              ]}
            />
          </motion.p>
          <motion.p variants={item} className="mt-4 text-white/70 max-w-lg">
            Programming, Data Analytics, AI, Machine Learning, Generative AI, Agentic AI, Interview
            Prep and Industrial Projects — everything you need.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <Link href="/apply" className="btn-neon">
              Apply Now
            </Link>
            <Link href="/#courses" className="btn-ghost">
              Explore Courses
            </Link>
            <Link href="/#features" className="btn-ghost">
              ▶ Why Us
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block"
        >
          <div className="glass-strong p-6 animate-float">
            <FloatingIcons />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingIcons() {
  const items = [
    { icon: "⚛️", label: "React" },
    { icon: "🟢", label: "Node.js" },
    { icon: "🐍", label: "Python" },
    { icon: "🤖", label: "AI" },
    { icon: "🧠", label: "ML" },
    { icon: "🗄️", label: "MongoDB" },
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((it) => (
        <div key={it.label} className="glass p-4 text-center card-hover">
          <div className="text-3xl">{it.icon}</div>
          <div className="text-xs mt-2 text-white/70">{it.label}</div>
        </div>
      ))}
    </div>
  );
}
