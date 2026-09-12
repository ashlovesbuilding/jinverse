/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#1A120B',
        panel: '#241A10',
        parchment: '#F4E9D8',
        ink: '#2A1B10',
        'ink-dim': '#5C4630',
        line: '#4A3826',
        ivory: '#F1E6D2',
        'ivory-dim': '#C9BBA0',
        gold: '#C9A24A',
        'gold-dim': '#A07A3A',
        saffron: '#B23A20',
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
