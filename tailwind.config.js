/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "dojo-day" : "url('/src/assets/dojo-day.jpg')",
        'dojo-night' : "url('/src/assets/dojo-night.jpg')"
      }
    },
  },
  plugins: [],
}

