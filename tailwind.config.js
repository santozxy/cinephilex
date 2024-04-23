/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark:"#1d1d1d",
        primary: "#9450D1",
        secondary: "#ffed4a",
        danger: "#e3342f",
      },
    },
  },
  plugins: [],
};
