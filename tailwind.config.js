module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './notifications/*.{js,ts,jsx,tsx}', './components/**/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class' or false
  theme: {
    extend: {
      colors: {
        midnight: '#121b4f',
        mint: '#e1f3ea',
        peach: '#f5edf2',
        azure: '#9ddee5',
        roud: '#FF6666'

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

