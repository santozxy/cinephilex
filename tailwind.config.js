/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1d1d1d",
        light: "#f5f5f5",
        primary: "#FF004B",
      },
    },
  },
  plugins: [],
};
