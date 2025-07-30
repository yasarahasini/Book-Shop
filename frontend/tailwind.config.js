/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#ffce11",
        'secondary':"#0d0842",
        'blackBG':"#f3f3f3",
        'favorite':"#ff5841"
      },
      fontFamily:{
        'primary' : ["Montserrat","sans-serif"],
        'secondary':["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

