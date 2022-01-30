const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Josefin Sans"', ...fontFamily.sans],
        display: ['"Josefin Sans"', ...fontFamily.sans],
        body: ['"Josefin Sans"', ...fontFamily.sans],
        sans: ['"Josefin Sans"', ...fontFamily.sans],
      },
      colors: {
        spray: {
          DEFAULT: '#63E0F1',
          50: '#F6FCFE',
          100: '#E6F6FD',
          200: '#C5ECFA',
          300: '#A5E5F7',
          400: '#84E1F4',
          500: '#63E0F1',
          600: '#30DFEC',
          700: '#13CDD1',
          800: '#0E9E99',
          900: '#0A6A63',
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s 1',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
