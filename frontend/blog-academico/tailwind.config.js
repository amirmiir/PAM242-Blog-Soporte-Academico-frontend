/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#F8EDE3',
        'secondary': '#3A3A3A',
        'bg-color': '#F8EDE3'
      },
      fontFamily: { 
        'primary': ['Lato', 'serif']
      }
    },
  },
  plugins: []
}