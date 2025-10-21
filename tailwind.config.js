/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brown": {
          100: '#ECE0D1',
          300: '#DBC1AC',
          600: '#967259',
          900: '#634832',
        }
      },
      boxShadow: {
        "shadow-normal": "0px 1px 10px rgba('0, 0, 0, 0.05')"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      fontFamily:{
        "dana-r":"dana regular", /*400*/
        "dana-m":"dana medium", /*500*/
        "dana-b":"dana bold", /*600*/
      }
    },
  },
  plugins: [],
}

