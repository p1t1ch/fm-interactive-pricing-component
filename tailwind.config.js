const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        cyan: '#10D8C4',
        'cyan-soft': '#A4F3EB',
        red: '#FF8D68',
        'red-light': '#FF8D68',
        blue: '#BECDFF',
      },
      neutral: {
        white: '#FFF',
        'blue-pale': '#F9FAFF',
        'blue-grayish-light': '#ECF0FB',
        'blue-grayish-lightest': '#ECF0FB',
        'blue-grayish': '#848EAD',
        'blue-dark': '#293356',
      },
    },
    extend: {
      fontFamily: {
        sans: ['ManropeVariable', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        body: ['.9375rem', 1.25],
      },
    },
  },
}
