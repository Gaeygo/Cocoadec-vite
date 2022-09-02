/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#403131",
        invalid: "#B02828",
      },
      fontFamily: {
        clash: ['"Clash Display"', "sans-serif"],
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),

    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
