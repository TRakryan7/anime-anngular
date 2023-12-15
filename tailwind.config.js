/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors:{
        primary:'#eeeeee',
        accent:'#1976d2',
        secondary:'#393e46',
        dark:'#222831'
      }
    },
  },
  plugins: [],
}

