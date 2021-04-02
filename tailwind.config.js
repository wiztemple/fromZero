module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: '#F28D00',
        darkorange: '#D27C03',
        blueroom: '#2358E0'
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
