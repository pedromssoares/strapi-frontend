import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F5E1A4", // 🔹 Bege claro (background principal)
        secondary: "#E6C38F", // 🔹 Dourado queimado (elementos secundários)
        accent: "#B6895A", // 🔹 Marrom caramelo (destaques, títulos)
        highlight: "#8C5E3C", // 🔹 Marrom escuro (botões, links ativos)
        muted: "#5D3A1A", // 🔹 Marrom profundo (detalhes, hover)
        text: "#3E2C15", // 🔹 Marrom suave (texto principal)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // 🔹 Define Inter como padrão
      },
    },
  },
  plugins: []
} satisfies Config;
