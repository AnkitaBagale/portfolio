const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      custom: 'Jost, sans-serif',
      brand: 'Pacifico, cursive',
      sans: 'Poppins, sans-serif'
    },
    colors: {
      pastelPink: {
        default: '#fcbcbc',
        dark: 'hsl(0, 91%, 68%)'
      },
      pastelBlue: {
        transparent: 'rgb(102, 192, 204,0.2)',
        lightest: '#ecf7f9',
        lighter: '#d9eff2',
        light: '#b3dfe5',
        default: '#66c0cc',
        dark: '#41b0bf',
        darker: '#3b9eac'
      },
      cardColor: {
        pista: 'rgb(181, 220, 205)',
        pink: 'rgb(252, 188, 188)',
        yellow: 'rgb(252, 188, 123)'
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber
    },
    extend: {
      spacing: {
        29: '9.375rem',
        30: '9.875rem',
        31: '10.375rem',
        32: '10.875rem'
      },
      width: { '6/7': 'calc(100% - 9.875rem)' }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
