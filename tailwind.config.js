/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        purple: {
          700: "#6f42c1",
          800: "#5a32a3",
        },
        gray: {
          100: "#f8f9fa",
          800: "#343a40",
        },
      },
    },
  },
  plugins: [],
};
