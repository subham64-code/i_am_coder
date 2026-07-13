"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is I AM CODER really free?",
    a: "Yes. Every course, project, quiz and resource is 100% free. You only need to apply and get verified by our admin team.",
  },
  {
    q: "Who can apply?",
    a: "Any student from any college, branch or semester can apply. We welcome beginners to advanced learners.",
  },
  {
    q: "Do I get a certificate?",
    a: "Yes. On completing a course and its assessments you earn a verifiable certificate and XP badges.",
  },
  {
    q: "What technologies are covered?",
    a: "Programming, Full Stack, Data Analytics, Machine Learning, Deep Learning, Generative AI, Agentic AI, Soft Skills and Industrial Projects.",
  },
  {
    q: "How does the application work?",
    a: "Submit the multi-step form with your details and documents. Admin verifies and approves, then your Student ID and login are emailed to you.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section" id="faq">
      <Reveal>
        <h2 className="text-center font-display text-3xl sm:text-4xl font-bold mb-10">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
      </Reveal>
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.05}>
            <div className="glass overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium">{f.q}</span>
                <FiChevronDown
                  className={`transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-4 pb-4 text-white/70"
                  >
                    {f.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
