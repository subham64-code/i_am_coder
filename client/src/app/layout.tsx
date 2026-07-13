import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Chrome } from "@/components/layout/Chrome";
import { CursorGlow } from "@/components/ui/CursorGlow";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "I AM CODER — Learn Coding Completely FREE",
  description:
    "World-class free e-learning platform. Programming, Full Stack, AI, ML, Generative AI, Agentic AI and more. Become industry ready.",
  keywords: ["free coding", "e-learning", "full stack", "AI", "machine learning", "I AM CODER"],
  openGraph: { title: "I AM CODER", description: "Learn Coding Completely FREE", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${display.variable} bg-ink-900 text-white`}>
        <Providers>
          <CursorGlow />
          <Chrome>
            <main className="relative z-10">{children}</main>
          </Chrome>
        </Providers>
      </body>
    </html>
  );
}
