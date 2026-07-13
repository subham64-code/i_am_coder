import Link from "next/link";
import { ApplyMultiStepForm } from "@/components/apply/ApplyMultiStepForm";

export default function ApplyPage() {
  return (
    <div className="min-h-screen px-4 pt-28 pb-16 bg-grid-glow">
      <div className="text-center mb-8">
        <Link href="/" className="font-display text-2xl font-bold text-gradient">
          I AM CODER
        </Link>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mt-4">
          Apply Now — <span className="text-gradient">100% FREE</span>
        </h1>
        <p className="text-white/60 mt-2 max-w-xl mx-auto">
          Complete the multi-step application. Our admin team verifies your documents and emails
          your Student ID & login credentials upon approval.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 glass px-4 py-2 rounded-xl">
          <span>Already applied?</span>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdxPuFU50xerjV5TU7IkNXAoVKXjiRY71Y0NCCvA-hDHM-b_Q/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:underline"
          >
            Fill the confirmation form →
          </a>
        </div>
      </div>
      <ApplyMultiStepForm />
    </div>
  );
}
