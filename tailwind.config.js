/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        'redrose': ['"Red Rose"', 'cursive'],
        ' gtwalsheimpro': ['" GT Walsheim Pro"', 'cursive'],
        'inter': ['"Inter"', 'sans-serif'],
      },
      colors: {
        lightPurple: "#a02279",
        metaBlack: "#434343",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};