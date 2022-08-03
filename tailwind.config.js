import tailwindTypography from '@tailwindcss/typography'
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
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
      },
      accent: '#4D3DF7'
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans]
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            'ol[type="A"]': false,
            'ol[type="a"]': false,
            'ol[type="A" s]': false,
            'ol[type="a" s]': false,
            'ol[type="I"]': false,
            'ol[type="i"]': false,
            'ol[type="I" s]': false,
            'ol[type="i" s]': false,
            'ol[type="1"]': false
          }
        }
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [tailwindTypography]
}
