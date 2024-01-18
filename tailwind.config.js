/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Lemon: ['Lemon']
      },
      textColor: {
        skin: {
          base: '#1c1917',
          inverted: '#fafaf9',
          red: '#991b1b',
          gray: '#4b5563'
        }
      },
      backgroundColor: {
        skin: {
          fill: '#1c1917',
          inverted: '#fafaf9'
        }
      },
      borderColor: {
        skin: {
          base: '#1c1917',
        }
      },
     
    },
    variants: {}
  },
  plugins: [],
}
