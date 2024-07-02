/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    
    extend: {
      screens:{
        'xs': '480px',
      },
      
      fontFamily:{
        Karla:['Karla','sans-serif']
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },},
         fadeIn:{
            form:{opacity:0},
            to:{ opacity:1}
         },      
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
        fadeIn: 'fadeIn .5s ease-in-out',
      },

      

    },
  },
  plugins: [],
}
