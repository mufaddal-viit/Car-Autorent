/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // ⛔️
    colors: {
      primary: "#1E40AF",
      secondary: "#F59E0B",
      accent: "#10B981",
      neutral: "#374151",
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
    },
    extend: {
      keyframes: {
        slideInDown: {
          "0%": { opacity: "0", transform: "translateY(-100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        slideInDown: "slideInDown 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
