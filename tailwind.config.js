/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inria Sans', 'sans-serif'],
      },
      colors: {
        'orange': '#EF9C66',
        'yellow': '#FCDC94',
        'green': '#78ABA8',
        'bluegreen': '#C8CFA0',
        custom: {
          grey: '#E2E7ED',
          grey100: '#E5E5E5',
        },
      },
    },
  },
  plugins: [],
}
