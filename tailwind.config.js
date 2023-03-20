/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/index.html"],
  theme: {
    extend: {
      colors: {
        brightOrange: "hsl(31,77%,52%)",
        darkCyan: "hsl(184, 100%, 22%)",
        veryDarkCyan: "hsl(179, 100%, 13%)"
      },
      textColor: {
        transparentWhite: "hsla(0, 0%, 100%, 0.75)",
        veryLightGray: "hsla(0, 0%, 100%, 0.75)"
      },
      fontFamily: {
        lexed: ['Lexend Deca', 'sans-serif'],
        bigShoulder: ["Big Shoulders Display", "serif"]

      }
    },
  },
  plugins: [],
}