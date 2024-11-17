/* @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    animation: {
      marquee: 'marquee 10s linear infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateY(0)' },
        '100%': { transform: 'translateY(-100%)' },
      },
    },
  },
  plugins: [],
}