/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        business: {
          DEFAULT: 'rgba(41, 77, 97, 1)', // #294D61
          sub: 'rgba(101, 165, 185, 1)',
          active: 'rgba(101, 165, 185, 1)', // #65A5B9
        },
        white: {
          100: 'rgba(254, 254, 254, 1)', // #FEFEFE
        },
        red: {
          100: 'rgba(250, 8, 95, 1)',
          200: 'rgba(250, 86, 95, 1)', // #FA565F
          300: 'rgba(255, 204, 207, 1)', // #FFCCCF
        },
        pink: {
          100: 'rgba(173, 90, 155, 1)', // #AD5A9B
          900: 'rgba(239, 217, 234, 1)', // #EFD9EA
        },
        black: {
          100: 'rgba(58, 58, 58, 1)', // #3A3A3A
        },
        yellow: {
          100: 'rgba(250, 210, 100, 1)',
          200: 'rgba(255, 241, 221, 1)', // #FFF1DD
          300: 'rgba(241, 172, 68, 1)', // #F1AC44
        },
        blue: {
          100: 'rgba(66, 100, 251, 1)', // #4264FB
          200: 'rgba(20, 180, 199, 1)', // #14B4C7
          300: 'rgba(55, 159, 255, 1)', // #379FFF
          400: 'rgba(32, 77, 195, 1)', // #204DC3
          500: 'rgba(0, 119, 240, 1)', // #0077F0
          900: 'rgba(208, 217, 255, 1)', // #D0D9FF
          1200: 'rgba(244, 249, 255, 1)', // #F4F9FF
        },
        green: {
          50: 'rgba(0, 154, 136, 1)', // #009A88
          100: 'rgba(3, 199, 90, 1)', // #03C75A
          150: 'rgba(38, 173, 141, 1)', // #26AD8D
          200: 'rgba(105, 149, 84, 1)', // #699554
          900: 'rgba(177, 221, 210, 1)', // #B1DDD2
          960: 'rgba(206, 245, 227, 1)', // #DCFAEC
          980: 'rgba(220, 250, 236, 1)', // #CEF5E3
        },
        purple: {
          100: 'rgba(118, 42, 194, 1)', // #762AC2
        },
        navy: {
          100: 'rgba(29, 55, 99, 1)', // #1D3763
        },
        gold: {
          100: 'rgba(187, 159, 58, 1)', // #BB9F3A
        },
        grey: {
          100: 'rgba(222, 222, 222, 1)', // #DEDEDE
          110: 'rgba(226, 226, 226, 1)', // #E2E2E2
          200: 'rgba(234, 234, 234, 1)', // #EAEAEA
          300: 'rgba(206, 206, 206, 1)', // #CECECE
          400: 'rgba(248, 248, 248, 1)', // #F8F8F8
          500: 'rgba(243, 243, 243, 1)', // #F3F3F3
          600: 'rgba(249, 249, 249, 1)', // #F9F9F9
          800: 'rgba(174, 174, 174, 1)', // #AEAEAE
          1000: 'rgba(146, 146, 146, 1)', // #929292
          1500: 'rgba(102, 102, 102, 1)', // #666666
          1600: 'rgba(98, 98, 98, 1)', // #626262
        },
        deactive: 'rgba(204, 204, 204, 1)', // #CCCCCC
      },
      fontFamily: {
        pretendard: ['Pretendard-Regular', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'sans-serif'],
      },
      fontSize: {
        'xs': '10px',
        'sm': '12px',
        'base': '14px',
        'lg': '16px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50%) translateY(calc(-50% + 50px))',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(-50%) translateY(-50%)',
          },
        },
        "fade-right": {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        "fade-out-right": {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(200%)',
          },
        },
        "dropdown-active": {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        "dropdown-deactive": {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        "spinner": {
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.65s ease",
        "fade-right": "fade-right 0.65s ease",
        "fade-out-right": "fade-out-right 0.65s ease",
        "dropdown-active": "dropdown-active 0.2s ease-in-out",
        "dropdown-deactive": "dropdown-deactive 0.2s ease-in-out",
        "spinner": "spinner 1s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
