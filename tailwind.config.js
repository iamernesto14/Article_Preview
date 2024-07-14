/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          'dark-blue': '#6d7f97',
          'grayish-blue': '#9eafc2'
        },
        secondary: {
          'dark-grayish-blue': '#48556a',
          'light-grayish-blue': '#ecf2f8'
        }
      }
    },
  },
  plugins: [],
}
