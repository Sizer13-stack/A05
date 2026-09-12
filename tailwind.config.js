/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          bg: "#0a0d14",
          surface: "#10141f",
          border: "#232a3b",
          muted: "#8892a6",
          text: "#e8eaf1",
        },
        brand: {
          orange: "#ff7a45",
          pink: "#ef4f9e",
          violet: "#7c5cfc",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(100deg, var(--brand-orange) 0%, var(--brand-pink) 50%, var(--brand-violet) 100%)",
      },
    },
  },
  plugins: [],
};
