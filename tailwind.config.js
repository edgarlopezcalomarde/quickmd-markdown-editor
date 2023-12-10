/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        editor: "#23262f",
        preview: "#17181c",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
