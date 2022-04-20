module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        redd : '#FF4C3B',
        oredd : '#E40C5B',
      },
      backgroundImage : {
        'header': "url('/images/acala-bg.png')"
      },
      fontSize : {
        'heading' : '4.7rem',
      }
    },
  },
  variants: {
    extend: {
      visibility : ['group-hover'],
    },
  },
  plugins: [],
}
