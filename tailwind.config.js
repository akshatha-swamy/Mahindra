/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        navbar:{
          100:"#070F2B",//background

        }
      },

    fontFamily:{
      'exotwo': ['Exo 2', 'sans-serif']
    }
    },
  },
  plugins:[],
}

