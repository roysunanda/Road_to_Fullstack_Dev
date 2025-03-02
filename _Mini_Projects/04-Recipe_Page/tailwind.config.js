/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'young': ['"Young Serif"', 'sans-serif' ],
      'outfit': ["Outfit", 'serif']
    },
    screens: {
      'desktop': '700px'
    },
    extend: {
    },
  },
  plugins: [],
};
