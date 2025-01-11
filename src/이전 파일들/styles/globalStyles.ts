import { defineGlobalStyles } from '@pandacss/dev';

export const globalStyles = defineGlobalStyles({
  FontFace: {
    fontFamily: 'Pretendard-Regular',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')format('woff')`,
  },
  '*, *:after, *:before': {
    boxSizing: 'border-box',
    fontFamily: `'Pretendard-Regular', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif`,
    fontWeight: 400,
    lineHeight: 'normal',
    fontSize: '13px',
    // sm: {
    //   fontSize: '10px',
    // },
    // md: {
    //   fontSize: '12px',
    // },
    // lg: {
    //   fontSize: '12px',
    // },
    // xl: {
    //   fontSize: '14px',
    // },
    // '2xl': {
    //   fontSize: '16px',
    // },
  },
  'html, body': {
    width: '100%',
    height: 'auto',
    color: 'var(--black100)',
  },
  '*, html, body': {
    '::-webkit-scrollbar': {
      scrollBehavior: 'smooth',
      display: 'none',
    },
  },
  'ul, li': {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  select: {
    appearance: 'none',
    background:
      'url(/icons/arrow_drop_down_black.svg) no-repeat right 9px center',
    outline: 0,
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
  input: {
    position: 'relative',
    margin: 0,

    _focus: {
      outline: 'none',
    },

    _disabled: {
      backgroundColor: 'transparent',
      color: 'var(--grey800)',
      borderColor: 'var(--grey100)',
    },

    '&[type="checkbox"]': {
      appearance: 'none',
      '-webkit-appearance': 'none',
      '-moz-appearance': 'none',
      width: '1rem',
      height: '1rem',
      border: `1px solid var(--grey1600)`,
      borderRadius: '2px',
      outline: 'none',
      cursor: 'pointer',

      _checked: {
        backgroundColor: 'var(--business-active-color)',
        border: 0,

        _after: {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '0.75rem',
          height: '0.75rem',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transform: 'translate(-50%, -50%)',
          backgroundImage: 'url(/icons/checkbox/white_check.svg)',
        },
      },
      _indeterminate: {
        backgroundColor: 'var(--business-active-color)',
        border: 0,

        _after: {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '0.75rem',
          height: '0.75rem',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transform: 'translate(-50%, -50%)',
          backgroundImage: 'url(/icons/checkbox/white_check_indeterminate.svg)',
        },
      },
    },
    '&[type="radio"]': {
      appearance: 'none !important',
      '-webkit-appearance': 'none !important',
      '-moz-appearance': 'none !important',
      width: '1.25rem !important',
      height: '1.25rem !important',
      border: `1.5px solid var(--business-active-color) !important`,
      borderRadius: '50% !important',
      outline: 'none !important',
      cursor: 'pointer !important',

      _checked: {
        backgroundColor: 'var(--white100) !important',
        border: '1.5px solid var(--business-active-color) !important',

        _after: {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '0.75rem',
          height: '0.75rem',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'var(--business-active-color)',
        },
      },
    },
  },
});
