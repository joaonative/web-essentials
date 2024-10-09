/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        work: ["Work Sans", "sans-serif"],
        dm: ["DM Serif Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        noto: ["Noto Serif", "serif"],
      },
    },
  },
  plugins: [],
};
