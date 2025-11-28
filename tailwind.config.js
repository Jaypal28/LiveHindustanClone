/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './layouts/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Newsreader"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#c50f1f',
          dark: '#730b13',
        },
      },
      boxShadow: {
        hero: '0 20px 50px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}

