/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./faintv.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#B84545',
          green: '#3E9E6F',
          blue: '#5a8fd4',
          violet: '#b49ae0',
        },
      },
      transitionDuration: {
        850: '850ms',
      },
    },
  },
  plugins: [],
};
