const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      },
      colors: {
        primaryLight: colors.slate["100"],
        primaryDark: colors.slate["700"],
        primaryDarker: colors.slate["800"]
      }
    }
  },
  plugins: []
};
