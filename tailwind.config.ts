/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
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
      animation: {
        'in': 'fadeIn .3s forwards',
        'out': 'fadeOut .3s forwards'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}
