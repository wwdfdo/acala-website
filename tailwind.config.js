module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        redd : '#FF4C3B',
        oredd : '#E40C5B',
        learnmoreBtn : '#645aff',
      },
      backgroundImage : {
        'header': "url('/images/acala-bg.png')"
      },
      width : {
        'headingWidth' : '1087px',
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
