const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      colors: {
        emDark: {
          dark: "#010101",
          DEFAULT: "#3c3b3b",
          light: "#828282",
        },
        emPurple: {
          dark: "#2B2B2B",
          DEFAULT: "#6E6E6E",
          light: "#B3B3B3",
        },
        emLavender: {
          dark: "#596270",
          DEFAULT: "#7A8A9A",
          light: "#B0BCC9"
        }
      },
      fontFamily: {
        brand: ['"Work Sans"', 'sans-serif'],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
