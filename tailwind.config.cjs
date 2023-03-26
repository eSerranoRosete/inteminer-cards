const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { ...colors, primary: "#2563eb" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
