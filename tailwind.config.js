/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        faded: '#121213',
        btn: '#818384',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        platypi: ['Platypi', 'serif'],
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(0)' },
          '50%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        showUp: {
          '0%': { opacity: '0.2' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        once: 'flip 1s ease-in-out 1',
        wrong: 'showUp 0.2s ease-in-out 1 ',
      },
    },
  },
  plugins: [],
};
