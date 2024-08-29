import { defineGlobalStyles } from '@pandacss/dev';

export const globalStyles = defineGlobalStyles({
  ':root': {
    '--business-color': 'rgba(41, 77, 97, 100);', // #294D61
    '--business-sub-color': 'rgba(101, 165, 185, 100)',
    '--white100': 'rgba(254, 254, 254, 100)', // #FEFEFE
    '--red100': 'rgba(250, 8, 95, 100)',
    '--red200': 'rgba(250, 86, 95, 100)', // #FA565F
    '--red300': 'rgba(255, 204, 207, 100)', // #FFCCCF
    '--pink100': 'rgba(173, 90, 155, 100)', // #AD5A9B
    '--pink900': 'rgba(239, 217, 234, 100)', // #EFD9EA
    '--black100': 'rgba(58, 58, 58, 100)', // #3A3A3A
    '--yellow100': 'rgba(250, 210, 100, 100)',
    '--yellow200': 'rgba(255, 241, 221, 100)', // #FFF1DD
    '--yellow300': 'rgba(241, 172, 68, 100)', // #F1AC44
    '--blue100': 'rgba(66, 100, 251, 100)', // #4264FB
    '--blue200': 'rgba(20, 180, 199, 100)', // #14B4C7
    '--blue300': 'rgba(55, 159, 255, 100)', // #379FFF
    '--blue400': 'rgba(32, 77, 195, 100)', // #204DC3
    '--blue500': 'rgba(0, 119, 240, 100)', // #0077F0
    '--blue900': 'rgba(208, 217, 255, 100)', // #D0D9FF
    '--blue1200': 'rgba(244, 249, 255, 100)', // #F4F9FF
    '--green050': 'rgba(0, 154, 136, 1)', // #009A88
    '--green100': 'rgba(3, 199, 90, 100)', // #03C75A
    '--green150': 'rgba(38, 173, 141, 100)', // #26AD8D
    '--green200': 'rgba(105, 149, 84, 100)', // #699554
    '--green900': 'rgba(177, 221, 210, 100)', // #B1DDD2
    '--green960': 'rgba(206, 245, 227, 1)', // #DCFAEC
    '--green980': 'rgba(220, 250, 236, 1)', // #CEF5E3
    '--purple100': 'rgba(118, 42, 194, 100)', // #762AC2
    '--navy100': 'rgba(29, 55, 99, 100)', // #1D3763
    '--gold100': 'rgba(187, 159, 58, 100)', // #BB9F3A
    '--grey100': 'rgba(222, 222, 222, 100)', // #DEDEDE
    '--grey110': 'rgba(226, 226, 226, 100)', // #E2E2E2
    '--grey200': 'rgba(234, 234, 234, 100)', // #EAEAEA
    '--grey300': 'rgba(206, 206, 206, 100)', // #CECECE
    '--grey400': 'rgba(248, 248, 248, 100)', // #F8F8F8
    '--grey500': 'rgba(243, 243, 243, 100)', // #F3F3F3
    '--grey600': 'rgba(249, 249, 249, 100)', // #F9F9F9
    '--grey800': 'rgba(174, 174, 174, 100)', // #AEAEAE
    '--grey1000': 'rgba(146, 146, 146, 100)', // #929292
    '--grey1500': 'rgba(102, 102, 102, 100)', // #666666
    '--grey1600': 'rgba(98, 98, 98, 100)', // #626262
    '--business-active-color': 'rgba(101, 165, 185, 100)', // #65A5B9
    '--deactive-color': 'rgba(204, 204, 204, 100)', // #CCCCCC
  },
  FontFace: {
    fontFamily: 'Pretendard-Regular',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')format('woff')`,
  },
  '*, *:after, *:before': {
    position: 'relative',
    boxSizing: 'border-box',
    fontFamily: `'Pretendard-Regular', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif`,
    fontWeight: 400,
    padding: 0,
    margin: 0,
    lineHeight: 'normal',
    sm: {
      fontSize: '10px',
    },
    md: {
      fontSize: '12px',
    },
    lg: {
      fontSize: '12px',
    },
    xl: {
      fontSize: '14px',
    },
    '2xl': {
      fontSize: '16px',
    },
  },
  'html, body': {
    width: '100%',
    height: 'auto',
    padding: 0,
    margin: 0,
    fontSize: '16px',
    color: `var(--black100)`,
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
      appearance: 'none',
      '-webkit-appearance': 'none',
      '-moz-appearance': 'none',
      width: '1.25rem',
      height: '1.25rem',
      border: `1.5px solid var(--business-active-color)`,
      borderRadius: '50%',
      outline: 'none',
      cursor: 'pointer',

      _checked: {
        backgroundColor: 'var(--white100)',
        border: '1.5px solid var(--business-active-color)',

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
