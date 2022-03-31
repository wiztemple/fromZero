module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: '#F28D00',
        darkorange: '#D27C03',
        blueroom: '#2358E0',
        loon: '#35495E',
        kiwi: '#0e182a',
        yellowcard: '#FFCE31',
        grey: '#EEF6FE'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
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
