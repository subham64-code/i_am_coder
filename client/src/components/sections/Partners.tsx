"use client";

import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const partners = ["Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "Accenture", "Cognizant"];

export function Partners() {
  return (
    <section className="section" id="partners">
      <Reveal>
        <h2 className="text-center font-display text-2xl font-bold mb-8 text-white/80">
          Trusted by learners aiming for
        </h2>
      </Reveal>
      <div className="flex flex-wrap justify-center gap-6 opacity-70">
        {partners.map((p, i) => (
          <Reveal key={p} delay={i * 0.05}>
            <motion.span
              whileHover={{ scale: 1.08 }}
              className="text-lg font-semibold px-5 py-2 glass rounded-xl"
            >
              {p}
            </motion.span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
