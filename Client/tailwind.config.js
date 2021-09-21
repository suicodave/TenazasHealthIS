const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
  prefix: "",
  important: true,
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
