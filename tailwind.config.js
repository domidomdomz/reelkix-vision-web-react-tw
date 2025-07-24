/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html','./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // adjust to your red-dot color if needed
          DEFAULT: '#E50C2C',
        },
      },
    },
  },
  plugins: [],
}
