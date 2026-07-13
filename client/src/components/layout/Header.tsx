"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/#courses" },
  { label: "Quiz", href: "/quiz" },
  { label: "About", href: "/#features" },
  { label: "Notes", href: "/courses" },
  { label: "Projects", href: "/courses" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-ink-900/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold">
          <img src="/logo.png" alt="I AM CODER logo" className="h-9 w-9 rounded-lg" />
          <span className="text-gradient">I AM CODER</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-6 text-sm text-white/80">
          {nav.map((n) => (
            <li key={n.label}>
              <Link href={n.href} className="hover:text-white transition-colors">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/login" className="btn-ghost text-sm">
            Login
          </Link>
          <Link href="/apply" className="btn-neon text-sm">
            Apply Now
          </Link>
        </div>

        <button className="lg:hidden text-2xl" onClick={() => setOpen((v) => !v)} aria-label="menu">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden glass mx-4 rounded-2xl overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-3">
              {nav.map((n) => (
                <li key={n.label}>
                  <Link href={n.href} onClick={() => setOpen(false)} className="block py-2">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li className="flex gap-3 pt-2">
                <Link href="/login" className="btn-ghost text-sm flex-1 text-center">
                  Login
                </Link>
                <Link href="/apply" className="btn-neon text-sm flex-1 text-center">
                  Apply Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
