/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Space Grotesk', 'Inter', 'system-ui'],
      },
      colors: {
        base: {
          900: '#0a0a0c',
          800: '#101014',
          700: '#17171d',
        },
        ember: '#ff6a3d',
        amber: '#ffb347',
      },
      dropShadow: {
        warm: '0 0 30px rgba(255,140,60,0.35)',
      },
    },
  },
  plugins: [],
};
