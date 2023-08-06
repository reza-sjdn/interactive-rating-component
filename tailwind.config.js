/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "orange": "hsl(25, 97%, 53%)",
        "light-gray": "hsl(217, 12%, 63%)",
        "medium-gray": "hsl(216, 12%, 54%)",
        "medium-gray-st": "hsla(216, 12%, 54%, 0.2)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "very-dark-blue": "hsl(216, 12%, 8%)"
      }
    },
    fontFamily: {
      "primary": ["Overpass", "sans-serif"]
    },
  },
  plugins: [],
}

