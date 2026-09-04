/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0A0E14',
        panel: '#0F161F',
        line: '#232E3A',
        ivory: '#ECE7DA',
        'ivory-dim': '#B9B4A6',
        gold: '#B8935F',
        'gold-dim': '#8A6D48',
        mist: '#3A5570',
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: 0, transform: 'translateY(14px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        reveal: 'reveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}
