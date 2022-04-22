module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        redd : '#FF4C3B',
        oredd : '#E40C5B',
        learnmoreBtn : '#645aff',
        acalaBackgound : '#f0f1f5',
        tokenBtnColor1 : '#645aff',
        tokenBtnColor2 : '#e40c5b',
        tokenBtnColor3 : '#ff4c3b',
      },
      backgroundImage : {
        'header': "url('/images/acala-bg.png')",
        'acala-background': "url('/images/section-3.svg')",
        'token-btn-bg': 'linear-gradient(328deg, rgba(00, 90, 255) -40.69%, rgba(228, 12, 91) 36.17%, rgb(255, 76, 59) 79.87%)',
      },
      width : {
        'headingWidth' : '1087px',
        'acala-basis' : '588px',
        'card-width':'388px',
      },
      height:{
        'card-height': '260px',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      
    },
  },
  variants: {
    extend: {
      visibility : ['group-hover'],
    },
  },
  plugins: [],
}
