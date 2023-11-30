/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/pages/Home.js",
    "./src/NavBar.js",
    "./src/pages/Login.js",
    "./src/pages/Community.js",
    "./src/pages/login-comps/Popup.js",
    "./src/pages/login-comps/Google.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}