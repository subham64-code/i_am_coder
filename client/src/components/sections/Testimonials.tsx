"use client";

import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "SDE @ TCS",
    text: "I learned Full Stack completely free and landed my first job. The projects and quizzes are industry-grade.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
  },
  {
    name: "Priya Nair",
    role: "AI Engineer",
    text: "The Generative AI and Agentic AI tracks are ahead of the curve. Best free platform out there.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
  },
  {
    name: "Rohit Verma",
    role: "ML Intern",
    text: "Daily quizzes with leaderboard kept me consistent. The community and mentors are amazing.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit",
  },
];

export function Testimonials() {
  return (
    <section className="section">
      <Reveal>
        <h2 className="text-center font-display text-3xl sm:text-4xl font-bold mb-10">
          What <span className="text-gradient">Students Say</span>
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <motion.div whileHover={{ y: -6 }} className="glass p-6 card-hover h-full">
              <p className="text-white/80 italic">“{t.text}”</p>
              <div className="flex items-center gap-3 mt-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full bg-white/10" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-cyan-300">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
