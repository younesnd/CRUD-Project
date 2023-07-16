const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      transformOrigin: {
        0: '0%',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        content: ['Nunito', 'sans-serif'],
      },
      zIndex: {
        '-1': '-1',
        
      },
    },
    colors: {
      ...colors,
    },
  },
  variants: {
    extend: {},

    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },

  plugins: [require('@tailwindcss/forms')],
}
