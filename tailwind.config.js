/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        glowText: {
          '0%': {
            textShadow: '0 0 10px #ffffff, 0 0 20px #ff4da6, 0 0 30px #ff4da6',
          },
          '100%': {
            textShadow: '0 0 20px #ffffff, 0 0 40px #ff4da6, 0 0 60px #ff4da6',
          },
        },
      },
      animation: {
        'glow-infinite': 'glowText 3s infinite alternate',
      },
    },
  },
  plugins: [],
};