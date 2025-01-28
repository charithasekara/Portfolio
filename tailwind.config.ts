// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#9f7aea',
          600: '#805ad5',
          900: '#44337a',
        },
        pink: {
          400: '#f687b3',
          600: '#d53f8c',
        },
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.15 },
        },
      },
    },
  },
  plugins: [],
}