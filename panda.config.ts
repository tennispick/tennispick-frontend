import { defineConfig } from '@pandacss/dev';
import { keyframes } from '@styles/animation';
import { globalStyles } from '@styles/globalStyles';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  cwd: process.cwd(),

  // Where to look for your css declarations
  include: [
    './src/styles/**/*.{js,jsx,ts,tsx,css}',
    './src/features/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/widgets/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: { keyframes },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',

  jsxFramework: 'react',

  globalCss: globalStyles,
});
