import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#0b0908",
        charcoal: "#161010",
        panel: "#1c1414",
        maroon: {
          DEFAULT: "#6a0d25",
          bright: "#b3123f",
        },
        ivory: "#f2ece7",
        muted: "#9c8d89",
        "muted-dim": "#5e5250",
        line: "rgba(242,236,231,0.08)",
      },
      fontFamily: {
        display: ["Clash Display", "sans-serif"],
        sans: ["General Sans", "sans-serif"],
      },
      boxShadow: {
        glow: "0 10px 40px rgba(179,18,63,0.35)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        loadBar: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
