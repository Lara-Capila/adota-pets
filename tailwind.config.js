/** @type {import('tailwindcss').Config} */

const defaultColors = require('./default-colors.json');

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: defaultColors.colors,
    },
  },
  plugins: [],
};
