/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          bg: "#f7f8fb",
          surface: "#ffffff",
          border: "#e2e5ee",
          muted: "#667085",
          text: "#171923",
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