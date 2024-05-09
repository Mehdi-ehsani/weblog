/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html"
    ,"./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'conic': "conic-gradient(rgb(13 , 165 ,233) , rgb(87, 202, 255))"
      }
    },
  },
  plugins: [],
}

