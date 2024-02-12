/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#D0AF5C',
        'selected': '#764620',
        'inactive': '#D9D9D9'
      }
    },
  },
  plugins: [],
}