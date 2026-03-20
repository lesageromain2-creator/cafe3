import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fef3c7",
        surface: "#fffbeb",
        ink: "#92400e",
        muted: "#b45309",
        divider: "#d4a574",
        accent: "#c2410c",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        label: ["var(--font-body)"],
      },
      borderRadius: { card: "4px" },
      boxShadow: { card: "0 4px 20px rgba(146,64,14,0.15)" },
    },
  },
  plugins: [],
};
export default config;
