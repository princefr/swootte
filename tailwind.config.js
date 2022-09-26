const path = require('path');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './notifications/*.{js,ts,jsx,tsx}', './components/**/**/*.{js,ts,jsx,tsx}', path.resolve(__dirname, './node_modules/litepie-datepicker/**/*.js')],
  darkMode: 'media', // or 'media' or 'class' or false
  theme: {
    fontFamily: {
      'anek': ['Anek Latin', 'Arial', 'sans-serif'],
      'montserrat': ['Montserrat', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        midnight: '#121b4f',
        mint: '#e1f3ea',
        peach: '#f5edf2',
        azure: '#9ddee5',
        roud: '#FF6666',
        "litepie-primary": colors.lightBlue, // color system for light mode
        "litepie-secondary": colors.coolGray // color system for dark mode

      },

    },
    zIndex: {
      '0': 0,
     '10': 10,
     '20': 20,
     '30': 30,
     '40': 40,
     '45': 45,
     '50': 50,
     '75': 75,
     '100': 100,
      'auto': 'auto',
    },
  },
  variants: {
    extend: {
      opacity: ['disabled', 'checked'],
      backgroundColor: ['disabled', 'checked']
      
    },
  },
  plugins: [],
}

