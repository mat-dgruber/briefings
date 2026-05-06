/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#141414',
        'netflix-red': '#E50914',
        'soft-gray': '#B3B3B3',
      },
    },
  },
  plugins: [],
}
