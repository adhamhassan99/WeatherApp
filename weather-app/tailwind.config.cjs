/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        lightGrey: "#f6f6f8",
        secondaryText: "#b8b8b8",
      },
      aspectRatio: {
        "16/7": "16 / 7",
      },
    },
  },
  plugins: [],
};
