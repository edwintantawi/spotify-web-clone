/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#1DB954',
        black: {
          default: '#000000',
          base: '#121212',
        },
        gray: {
          base: '#b3b3b3',
        },
      },
    },
  },
  plugins: [],
};
