/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: "320px",
      pc: "1080px",
    },
    extend: {
      fontFamily: {
        sans: ["KG HAPPY Solid"],
      },
    },
  },
  plugins: [],
};
