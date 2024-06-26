const { nextui } = require("@nextui-org/react");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/renderer/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#474448',
        secondary: '#E0DDCF',
        tertiary: '#534b52',
        quaternary: '#2d232e',
        quinary: '#f1f0ea'
      },
      textColor: {
        white: '#f1f0ea' // Definir color de texto blanco
      }
    }
  },
  darkMode: "class",
  plugins: [require('@tailwindcss/typography'), nextui()]
}
