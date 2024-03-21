const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./public/*.html",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/views/**/*.{erb,haml,html,slim}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["montserrat", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      margin: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
      },
    },
    colors: {
      blackFont: "#121f32",
      pinkFont: "#ef8f7c",
    },
  },
  plugins: [],
}
