/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "App.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#704F38",
        secondary: "#282932",
      },
    },
  },
  plugins: [],
};
