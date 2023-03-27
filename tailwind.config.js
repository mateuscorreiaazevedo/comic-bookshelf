/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#E23636',
        secondary: '#518CCA'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })]
}
