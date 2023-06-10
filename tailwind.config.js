/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        primary:" #800080 ",
        secondary:"#E5E5E5",
        back:"#E5E5E5;",
        Text:" #4D4D4D",

      },
      fontFamily:{
        poppins:["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}
