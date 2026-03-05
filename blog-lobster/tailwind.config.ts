import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: "#FDF6F0",
        coral: "#E85A4F",
        "coral-dark": "#D04A3F",
        "cream-light": "#F5E6D3",
        "text-primary": "#2D2D2D",
        "text-secondary": "#666666",
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
        'pill': '16px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.08)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};
export default config;
