import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/features/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        purple: { DEFAULT: "#a78bfa", 500: "#a78bfa", 600: "#8b5cf6" },
        cyan: { DEFAULT: "#22d3ee", 500: "#22d3ee" },
        ink: {
          900: "#060914",
          800: "#0b1020",
          700: "#111827",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.25), transparent 60%)",
        "gradient-brand":
          "linear-gradient(135deg, #3b82f6 0%, #a78bfa 50%, #22d3ee 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(31, 38, 135, 0.25)",
        neon: "0 0 24px rgba(34,211,238,0.45)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-pan": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "cursor-glow": {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
        "cursor-glow": "cursor-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
