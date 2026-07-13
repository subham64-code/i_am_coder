"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="section" id="apply">
      <Reveal>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="glass-strong p-10 sm:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-glow opacity-40" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-5xl font-bold">
              Ready to become <span className="text-gradient">Industry Ready?</span>
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Apply now — it is free. Get verified, log in to your dashboard and start learning today.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link href="/apply" className="btn-neon">
                Apply Now — It&apos;s FREE
              </Link>
              <Link href="/login" className="btn-ghost">
                Student / Admin Login
              </Link>
            </div>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}
