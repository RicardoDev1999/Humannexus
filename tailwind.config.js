module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./public/index.html",
    "./src/**/*.{html,js}"], 
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
