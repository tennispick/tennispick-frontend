import { defineKeyframes } from '@pandacss/dev';

export const keyframes = defineKeyframes({
  fadeUp: {
    '0%': {
      opacity: 0,
      transform: 'translateX(-50%) translateY(calc(-50% + 50px))',
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(-50%) translateY(-50%)',
    },
  },
  fadeRight: {
    '0%': {
      transform: 'translateX(100%)',
    },
    '100%': {
      transform: 'translateX(0)',
    },
  },
  fadeOutRight: {
    '0%': {
      transform: 'translateX(100%)',
    },
    '100%': {
      transform: 'translateX(200%)',
    },
  },
  dropDownActive: {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  dropDownDeActive: {
    '0%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
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
});

// animation: {
//     fadeUp: 'fadeUp 0.65s ease',
//     fadeRight: 'fadeRight 0.65s ease',
//     fadeOutRight: 'fadeOutRight 0.65s ease',
//     dropDownActive: 'dropDownActive 0.2s ease-in-out',
//     dropDownDeActive: 'dropDownDeActive 0.2s ease-in-out',
//     spinner: 'spinner 1s linear infinite',
//   },
