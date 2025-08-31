/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        pretendard: [
          'Pretendard-Regular',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'sans-serif',
        ],
      },
      fontSize: {
        xs: '10px',
        sm: '12px',
        base: '14px',
        lg: '16px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50%) translateY(calc(-50% + 50px))',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(-50%) translateY(-50%)',
          },
        },
        'fade-right': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'fade-out-right': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(200%)',
          },
        },
        'dropdown-active': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'dropdown-deactive': {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        spinner: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(90deg)',
          },
          '50%': {
            transform: 'rotate(180deg)',
          },
          '75%': {
            transform: 'rotate(270deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.65s ease',
        'fade-right': 'fade-right 0.65s ease',
        'fade-out-right': 'fade-out-right 0.65s ease',
        'dropdown-active': 'dropdown-active 0.2s ease-in-out',
        'dropdown-deactive': 'dropdown-deactive 0.2s ease-in-out',
        spinner: 'spinner 1s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
