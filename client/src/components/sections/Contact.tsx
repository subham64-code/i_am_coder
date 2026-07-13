"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { api } from "@/lib/api";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await api.post("/contact", form);
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setError(err?.message ?? "Something went wrong. Try emailing us directly.");
    }
  }

  return (
    <section className="section" id="contact">
      <Reveal>
        <h2 className="text-center font-display text-3xl sm:text-4xl font-bold mb-3">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-center text-white/60 max-w-2xl mx-auto mb-10">
          Questions about the free program? Reach out — we usually reply within 24 hours.
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div whileHover={{ y: -4 }} className="glass p-6 h-full">
          <h3 className="font-semibold text-lg mb-4">Contact details</h3>
          <ul className="space-y-4 text-white/70">
            <li className="flex items-center gap-3">
              <FiMail className="text-cyan-300" /> <a href="mailto:admin@iamcoder.dev" className="hover:text-white">admin@iamcoder.dev</a>
            </li>
            <li className="flex items-center gap-3">
              <FiPhone className="text-cyan-300" /> <span>+91 00000 00000</span>
            </li>
            <li className="flex items-center gap-3">
              <FiMapPin className="text-cyan-300" /> <span>India — 100% Online</span>
            </li>
          </ul>
        </motion.div>

        <form onSubmit={onSubmit} className="glass p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required value={form.name} onChange={update("name")}
              placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400"
            />
            <input
              required type="email" value={form.email} onChange={update("email")}
              placeholder="Your email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400"
            />
          </div>
          <input
            required value={form.subject} onChange={update("subject")}
            placeholder="Subject" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400"
          />
          <textarea
            required value={form.message} onChange={update("message")} rows={4}
            placeholder="Your message" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 resize-none"
          />
          <button type="submit" disabled={status === "sending"} className="btn-neon w-full disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
          {status === "sent" && <p className="text-green-400 text-sm text-center">✅ Thanks! Your message was received.</p>}
          {status === "error" && <p className="text-red-400 text-sm text-center">{error}</p>}
        </form>
      </div>
    </section>
  );
}
