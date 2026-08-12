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
          900: '#0a0716',
          800: '#120c26',
          700: '#1a1233',
        },
        ember: '#5546ff',
        amber: '#c98bff',
      },
      dropShadow: {
        warm: '0 0 30px rgba(130,90,255,0.4)',
      },
    },
  },
  plugins: [],
};
