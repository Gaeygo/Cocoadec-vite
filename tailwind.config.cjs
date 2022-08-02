/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
     colors: {
      "main": "#403131"
     },
     fontFamily: {
      clash : ['"Clash Display"', "sans-serif"]
     },
     
    },
    
    
  },
  plugins: [   function ({ addVariant }) {
    addVariant('child', '& > *');
    addVariant('child-hover', '& > *:hover');
}],
}
