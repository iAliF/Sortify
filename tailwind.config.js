/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: false
  }
};
