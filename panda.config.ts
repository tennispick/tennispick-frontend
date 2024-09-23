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
    './src/constants/**/*.{js,jsx,ts,tsx}',
    './src/recipes/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: { ...keyframes },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',

  jsxFramework: 'react',

  globalCss: globalStyles,

  staticCss: {
    css: [
      {
        properties: {
          width: [
            'calc((100% / 7) * 9)',
            'calc((100% / 7) * 8)',
            'calc((100% / 7) * 7)',
            'calc((100% / 7) * 6)',
            'calc((100% / 7) * 5)',
            'calc((100% / 7) * 4)',
            'calc((100% / 7) * 3)',
            'calc((100% / 7) * 2)',
            'calc((100% / 7) * 1)',
            'calc(100% / 9)',
            'calc(100% / 8)',
            'calc(100% / 7)',
            'calc(100% / 6)',
            'calc(100% / 5)',
            'calc(100% / 4)',
            'calc(100% / 3)',
            'calc(100% / 2)',
            'calc(100% / 1)',
          ],
        },
      },
    ],
  },
});
