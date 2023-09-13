/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "showcaseImg": "url('./assets/Poster.png')",
      },
    },
  },
  plugins: [],
};
