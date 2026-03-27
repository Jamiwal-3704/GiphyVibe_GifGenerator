/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "system-ui", "sans-serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      colors: {
        canvas: {
          deep: "#0c0a12",
          mid: "#15122a",
          accent: "#1e1a35",
        },
        brand: {
          coral: "#ff6b5c",
          peach: "#ffb38a",
          violet: "#a78bfa",
          cyan: "#22d3ee",
        },
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(255, 107, 92, 0.35)",
        "glow-cyan": "0 0 50px -10px rgba(34, 211, 238, 0.35)",
        card: "0 25px 50px -12px rgba(0, 0, 0, 0.45)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.85" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
