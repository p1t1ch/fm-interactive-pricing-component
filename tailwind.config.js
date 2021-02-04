const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        cyan: '#10D8C4',
        'cyan-soft': '#A4F3EB',
        red: '#FF8D68',
        'red-light': '#FEEDE8',
        blue: '#BECDFF',
      },
      neutral: {
        white: '#FFF',
        'blue-pale': '#F9FAFF',
        'blue-grayish-light': '#CFD8EF',
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
        heading: ['1.75rem', 1.36],
        price: ['2.5rem', 1.375],
        'price-mobile': ['2rem', 1.375],
        sale: ['.625rem', 1.4],
      },
      zIndex: {
        '-10': '-10',
      },
      boxShadow: {
        DEFAULT: '0px 20px 30px -5px rgba(127, 137, 185, 0.152073)',
      },
      maxWidth: {
        container: '33.75rem',
      },
      padding: {
        22: '5.5rem',
      },
      backgroundImage: {
        pattern: 'url(../images/bg-pattern.svg)',
      },
    },
  },
  variants: {
    extend: {
      margin: ['last'],
    },
  },
}
