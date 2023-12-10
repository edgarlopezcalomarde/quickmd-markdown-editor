/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg1': "#23262f",
        "bg2": "#17181c",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
