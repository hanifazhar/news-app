/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      // colors: {
      //   primary: "#3182ce",
      //   secondary: "#ff9f1a",
      //   tertiary: "#e83e8c",
      //   quaternary: "#63b3ed",
      //   quinary: "#f73945",
      //   quaternaryDark: "#212121",
      //   quinaryLight: "#ffffff",
      // },
    },
  },
  plugins: [],
}