module.exports = {
  mode: "jit",
  purge: ["./*.html", "./*.{js,jsx,ts,tsx,vue}"],

  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        alphaBg: "url('/images/Alpha-coming-bg.png')",
      },
    },
  },
  plugins: [],
};
