const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      accent: '#4D3DF7',
      gray: {
        '050': '#F7F7F7',
        '075': '#ECECEC',
        100: '#E1E1E1',
        200: '#CFCFCF',
        300: '#B1B1B1',
        400: '#9E9E9E',
        500: '#7E7E7E',
        600: '#626262',
        700: '#515151',
        800: '#3B3B3B',
        850: '#2F2F2F',
        900: '#222222',
        925: '#1A1A1A',
        950: '#111111'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
