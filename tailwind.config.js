const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: 'Jost, sans-serif',
      custom: 'Pacifico, cursive'
    },
    colors: {
      pastelPink: {
        default: '#fcbcbc',
        dark: 'hsl(0, 91%, 68%)'
      },
      pastelBlue: {
        transparent: 'rgb(255, 255, 255, 0.2)',
        lightest: '#ecf7f9',
        lighter: '#d9eff2',
        light: '#b3dfe5',
        default: 'hsl(187, 50%, 60%)',
        dark: '#41b0bf'
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
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
