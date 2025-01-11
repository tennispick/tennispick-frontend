/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class'],
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    important: true,
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        white: {
          100: 'rgba(255, 255, 255, 1)',
          200: 'rgba(254, 254, 254, 1)',
          300: 'rgba(251, 251, 251, 1)',
          400: 'rgba(244, 244, 244, 1)',
          500: 'rgba(238, 238, 238, 1)',
          600: 'rgba(228, 228, 228, 1)',
        },
        black: '#212121',
        gray: {
          100: 'rgba(221, 222, 223, 1)',
          200: 'rgba(187, 189, 191, 1)',
          300: 'rgba(154, 156, 160, 1)',
          400: 'rgba(120, 123, 128, 1)',
          500: 'rgba(86, 90, 96, 1)',
          600: 'rgba(69, 72, 77, 1)',
          700: 'rgba(52, 54, 58, 1)',
          800: 'rgba(34, 36, 38, 1)',
          900: 'rgba(17, 18, 19, 1)',
        },
        blue: {
          100: 'rgba(204, 229, 255, 1)',
          200: 'rgba(153, 204, 255, 1)',
          300: 'rgba(102, 178, 255, 1)',
          400: 'rgba(51, 153, 255, 1)',
          500: 'rgba(0, 127, 255, 1)',
          600: 'rgba(0, 102, 204, 1)',
          700: 'rgba(0, 76, 153, 1)',
          800: 'rgba(0, 51, 102, 1)',
          900: 'rgba(0, 25, 51, 1)',
        },
        green: {
          100: 'rgba(215, 244, 220, 1)',
          200: 'rgba(176, 232, 184, 1)',
          300: 'rgba(136, 221, 149, 1)',
          400: 'rgba(96, 210, 113, 1)',
          500: 'rgba(56, 199, 78, 1)',
          600: 'rgba(45, 159, 62, 1)',
          700: 'rgba(34, 119, 47, 1)',
          800: 'rgba(23, 79, 31, 1)',
          900: 'rgba(11, 40, 16, 1)',
        },
        red: {
          100: 'rgba(255, 204, 207, 1)',
          200: 'rgba(255, 153, 159, 1)',
          300: 'rgba(255, 102, 110, 1)',
          400: 'rgba(255, 51, 62, 1)',
          500: 'rgba(255, 0, 14, 1)',
          600: 'rgba(204, 0, 11, 1)',
          700: 'rgba(153, 0, 8, 1)',
          800: 'rgba(102, 0, 6, 1)',
          900: 'rgba(51, 0, 3, 1)',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          100: 'rgba(224, 237, 241, 1)',
          200: 'rgba(193, 219, 227, 1)',
          300: 'rgba(163, 201, 213, 1)',
          400: 'rgba(132, 183, 199, 1)',
          500: 'rgba(101, 165, 185, 1)',
          600: 'rgba(81, 132, 148, 1)',
          700: 'rgba(61, 99, 111, 1)',
          800: 'rgba(40, 66, 74, 1)',
          900: 'rgba(20, 33, 37, 1)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          100: 'rgba(212, 219, 223, 1)',
          200: 'rgba(169, 184, 192, 1)',
          300: 'rgba(127, 148, 160, 1)',
          400: 'rgba(84, 113, 129, 1)',
          500: 'rgba(41, 77, 97, 1)',
          600: 'rgba(33, 62, 78, 1)',
          700: 'rgba(25, 46, 58, 1)',
          800: 'rgba(16, 31, 39, 1)',
          900: 'rgba(8, 15, 19, 1)',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
