/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      'lc-green': {
        200: 'hsl(148, 38%, 91%)',
        600: 'hsl(169, 82%, 27%)'
      },
      'lc-red': 'hsl(0, 66%, 54%)',
      'lc-grey': {
        500: 'hsl(186, 15%, 59%)',
        900: 'hsl(187, 24%, 22%)'
      }
    },
    extend: {},
  },
  plugins: [],
}
