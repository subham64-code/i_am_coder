"use client";

import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { FiAward, FiBarChart2, FiBookOpen, FiCamera, FiCpu, FiUsers } from "react-icons/fi";

const features = [
  { icon: FiBookOpen, title: "Structured Courses", text: "Roadmaps, video, notes PDF and assignments per course." },
  { icon: FiCpu, title: "AI Powered", text: "AI chatbot, quiz generator, code reviewer and doubt solver." },
  { icon: FiBarChart2, title: "Daily Quiz & Leaderboard", text: "MCQ, OMR-style, timer, negative marking and rankings." },
  { icon: FiCamera, title: "Attendance System", text: "QR, manual and admin attendance with monthly reports." },
  { icon: FiAward, title: "Certificates & Badges", text: "Verifiable certificates, XP, streaks and achievements." },
  { icon: FiUsers, title: "Community & Mentors", text: "Discussion board, support tickets and live classes." },
];

export function Features() {
  return (
    <section className="section" id="features">
      <Reveal>
        <h2 className="text-center font-display text-3xl sm:text-4xl font-bold mb-3">
          A <span className="text-gradient">Complete</span> Learning Ecosystem
        </h2>
        <p className="text-center text-white/60 max-w-2xl mx-auto mb-10">
          Built enterprise-grade for 100+ concurrent learners with gamification, analytics and real-time support.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <Reveal key={f.title} delay={i * 0.06}>
              <motion.div whileHover={{ y: -6 }} className="glass p-6 card-hover h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center text-white text-xl mb-4">
                  <Icon />
                </div>
                <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
                <p className="text-white/60 text-sm">{f.text}</p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
