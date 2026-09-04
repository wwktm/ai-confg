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
          900: '#05070f',
          800: '#0a0e1c',
          700: '#101527',
        },
        ember: '#3b6bff',
        amber: '#9db9ff',
      },
      dropShadow: {
        warm: '0 0 30px rgba(90,138,242,0.4)',
      },
    },
  },
  plugins: [],
};
