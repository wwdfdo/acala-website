module.exports = {
  mode : 'jit',
  purge: [
    './*.html',
    './*.{js,jsx,ts,tsx,vue}',
  ],

  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        redd: "#FF4C3B",
        oredd: "#E40C5B",
        learnmoreBtn: "#645aff",
        acalaBackgound: "#f0f1f5",
        tokenBtnColor1: "#645aff",
        tokenBtnColor2: "#e40c5b",
        tokenBtnColor3: "#ff4c3b",
        kusamaBg: "#262626",
        
      },
      backgroundImage: {
        header: "url('/images/acala-bg.png')",
        "acala-background": "url('/images/section-3.svg')",
        tokenBtnbg:
          "linear-gradient(328deg, rgba(00, 90, 255) -40.69%, rgba(228, 12, 91) 36.17%, rgb(255, 76, 59) 79.87%)",
      },
      width: {
        headingWidth: "1087px",
        "acala-basis": "588px",
        "card-width": "388px",
        partnerWidth :" calc(15.28571% - 73px)",
      },
      height: {
        "card-height": "260px",
        "kamura-b-height": "60px",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        team : "0 10 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)0px 30px rgb(65 32 255 / 11%)",
      },

      borderWidth: {
        full: "100vw",
        half: "60px",
      },
    },
  },
  plugins: [],
};
