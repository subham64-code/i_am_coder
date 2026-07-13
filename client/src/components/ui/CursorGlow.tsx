"use client";

import { useEffect, useRef } from "react";

/** Soft neon glow that follows the cursor for an immersive feel. */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div ref={ref} className="cursor-glow hidden md:block" aria-hidden />;
}
