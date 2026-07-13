"use client";

import { useEffect, useState } from "react";

/** Rotating typing animation used in the hero. */
export function TypingText({ words, speed = 90 }: { words: string[]; speed?: number }) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wi % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text === current) {
            setTimeout(() => setDeleting(true), 1200);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text === "") {
            setDeleting(false);
            setWi((v) => v + 1);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, wi, words, speed]);

  return (
    <span className="border-r-2 border-cyan-400 pr-1">{text}</span>
  );
}
