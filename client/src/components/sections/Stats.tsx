"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { label: "Students", value: 25000, suffix: "+" },
  { label: "Projects", value: 40, suffix: "+" },
  { label: "Courses", value: 120, suffix: "+" },
  { label: "Placements", value: 3500, suffix: "+" },
  { label: "Hours of Content", value: 1200, suffix: "+" },
];

function useCountUp(target: number, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setVal(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return val;
}

function Stat({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const count = useCountUp(value);
  return (
    <Reveal className="glass p-6 text-center card-hover">
      <div className="font-display text-4xl font-bold text-gradient">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-white/60">{label}</div>
    </Reveal>
  );
}

export function Stats() {
  return (
    <section className="section">
      <Reveal>
        <h2 className="text-center font-display text-3xl font-bold mb-10">
          Our <span className="text-gradient">Impact</span>
        </h2>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
