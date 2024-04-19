import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import ArrowDropDownIcon from '@icons/arrow_drop_down_black.svg';

export type CSS_TYPE = {
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  textAlign?: any;
  fontSize?: string;
  fontWeight?: string;
  position?: any;
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
  padding?: string | number;
  margin?: string | number;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  backgroundColor?: string;
  background?: string;
  backgroundImage?: string;
  backgroundRepeat?: string;
  backgroundSize?: string;
  border?: string;
  borderColor?: string;
  borderTop?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderRadius?: string;
  borderTopLeftRadius?: string | number;
  borderTopRightRadius?: string | number;
  borderBottomLeftRadius?: string | number;
  borderBottomRightRadius?: string | number;
  transition?: string;
  transform?: string;
  opacity?: string | number;
  hovercolor?: string;
  hoveropacity?: string | number;
  hoverbackground?: string;
  cursor?: string;
  zIndex?: string | number;
  animation?: string;
  animationDelay?: string;
  animationDuration?: string | number;
  rotate?: string;
  flex?: string;
  flexDirection?: any;
  content?: string | number;

  /* Etc */
  isActive?: boolean;
  RadioChecked?: boolean;
};

export const globalStyles = (
  <Global
    styles={css`
      @font-face {
        font-family: 'Pretendard-Regular';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
          format('woff');
      }

      *,
      *:after,
      *:before {
        position: relative;
        box-sizing: border-box;
        font-family:
          'Pretendard-Regular',
          -apple-system,
          BlinkMacSystemFont,
          system-ui,
          Roboto,
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          sans-serif;
        font-weight: 400;
        padding: 0;
        margin: 0;
      }

      :root {
        --business-color: rgba(41, 77, 97, 100); // #294D61
        --business-sub-color: rgba(101, 165, 185, 100);

        --white100: rgba(254, 254, 254, 100); // #FEFEFE

        --red100: rgba(250, 8, 95, 100);
        --red200: rgba(250, 86, 95, 100); // #FA565F
        --red300: rgba(255, 204, 207, 100); // #FFCCCF

        --pink100: rgba(173, 90, 155, 100); // #AD5A9B
        --pink900: rgba(239, 217, 234, 100); // #EFD9EA

        --black100: rgba(58, 58, 58, 100); // #3A3A3A

        --yellow100: rgba(250, 210, 100, 100);
        --yellow200: rgba(255, 241, 221, 100); // #FFF1DD
        --yellow300: rgba(241, 172, 68, 100); // #F1AC44

        --blue100: rgba(66, 100, 251, 100); // #4264FB
        --blue200: rgba(20, 180, 199, 100); // #14B4C7
        --blue300: rgba(55, 159, 255, 100); // #379FFF
        --blue400: rgba(32, 77, 195, 100); // #204DC3
        --blue500: rgba(0, 119, 240, 100); // #0077F0
        --blue900: rgba(208, 217, 255, 100); // #D0D9FF

        --green100: rgba(3, 199, 90, 100); // #03C75A
        --green150: rgba(38, 173, 141, 100); // #26AD8D
        --green200: rgba(105, 149, 84, 100); // #699554
        --green900: rgba(177, 221, 210, 100); // #B1DDD2

        --purple100: rgba(118, 42, 194, 100); // #762AC2

        --navy100: rgba(29, 55, 99, 100); // #1D3763

        --gold100: rgba(187, 159, 58, 100); // #BB9F3A

        --grey100: rgba(222, 222, 222, 100); // #DEDEDE
        --grey110: rgba(226, 226, 226, 100); // #E2E2E2
        --grey200: rgba(234, 234, 234, 100); // #EAEAEA
        --grey300: rgba(206, 206, 206, 100); // #CECECE
        --grey400: rgba(248, 248, 248, 100); // #F8F8F8
        --grey500: rgba(243, 243, 243, 100); // #F3F3F3
        --grey600: rgba(249, 249, 249, 100); // #F9F9F9
        --grey800: rgba(174, 174, 174, 100); // #AEAEAE
        --grey1000: rgba(146, 146, 146, 100); // #929292

        --business-active-color: rgba(101, 165, 185, 100); // #65A5B9
        --deactive-color: rgba(204, 204, 204, 100); // #CCCCCC
      }

      :is(html, body) {
        width: 100%;
        height: auto;
        padding: 0;
        margin: 0;
        -ms-overflow-style: none;
        font-size: 16px;
        color: #3a3a3a;
      }

      :is(*, html, body) {
        ::-webkit-scrollbar {
          scroll-behavior: smooth;
          display: none;
        }
      }

      :is(ul, li) {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      select {
        outline: 0;
        appearance: none;
        background: url('${ArrowDropDownIcon.src}') no-repeat right 9px center;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      input {
        margin: 0;

        :focus {
          outline: none;
        }
      }

      .hidden {
        display: none;
        opacity: 0;
      }

      .react-datepicker-popper {
        z-index: 9;
      }

      .react-datepicker__input-container .react-datepicker__calendar-icon {
        height: 100%;
        padding: 0 0 0 10px;
      }

      #react-time-range {
        padding: 0 !important;
        margin: 0 5px;
      }

      #react-time-range .component {
      }

      #react-time-range select {
        padding: 10px 26px 10px 8px !important;
        background-color: var(--white100) !important;
        border-radius: 8px !important;
      }

      .react-datepicker {
        border: 1px solid var(--grey300);
      }

      .react-datepicker__month-container {
        padding: 8px 0 4px 0;
        min-width: 250px;
      }

      .react-datepicker__triangle::after {
        border-bottom-color: var(--white100) !important;
      }

      .react-datepicker__header  {
        background-color: var(--white100) !important;
        border-bottom: 1px solid var(--grey300) !important;
        padding: 12px 0 !important;
      }

      .react-datepicker__navigation--previous, .react-datepicker__navigation--next {
        top: 6px;
      }

      .react-datepicker__day:nth-of-type(1){ 
        color: var(--red100);
      }

      .react-datepicker__day:nth-of-type(7){
        color: var(--blue100);
      }

      .react-datepicker__day-name:nth-of-type(1){
        color: var(--red100);
      }

      .react-datepicker__day-name:nth-of-type(7){
        color: var(--blue100);
      }

      .react-datepicker__day--selected{
        color: var(--white100) !important;
        background-color: var(--blue100) !important;
      }

      .react-datepicker__day--disabled{
        color: var(--grey300) !important;
      }
    `}
  />
);

export const New = styled.i({});

export const ImageContainer = styled(Image)<CSS_TYPE>({}, (props) => ({
  width: props.width ? props.width : '100%',
  height: props.height ? props.height : '100%',
  padding: props.padding ? props.padding : '0',
  margin: props.margin ? props.margin : '0',
  position: props.position ? props.position : 'relative',
  top: props.top,
  bottom: props.bottom,
  left: props.left,
  right: props.right,
  cursor: props.cursor,
}));

export const Button = styled.button<CSS_TYPE>(
  {
    transition: 'transform 0.2s ease-in-out',
    appearance: 'none',
    backfaceVisibility: 'hidden',
    WebkitTransform: 'translateZ(0)',
    WebkitFontSmoothing: 'subpixel-antialiased',
    cursor: 'pointer',
  },
  (props) => ({
    display: props.display,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    padding: props.padding ? props.padding : '0.5rem 1.1rem',
    margin: props.margin ? props.margin : '0',
    border: props.border ? props.border : '0',
    backgroundColor: props.backgroundColor
      ? props.backgroundColor
      : 'transparent',
    color: props.color ? props.color : '',
    borderRadius: props.borderRadius ? props.borderRadius : '12px',
  }),
);

export const Select = styled.select<CSS_TYPE>({}, (props) => ({
  width: props.width ? props.width : '',
  minWidth: props.minWidth ? props.minWidth : '120px',
  height: props.height ? props.height : '',
  padding: props.padding ? props.padding : '',
  margin: props.margin ? props.margin : '',
  fontSize: props.fontSize ? props.fontSize : '0.9rem',
  border: props.border ? props.border : '1px solid var(--grey300)',
  borderColor: props.borderColor ? props.borderColor : '',
  borderRadius: props.borderRadius ? props.borderRadius : '8px',
}));

export const Input = styled.input<CSS_TYPE>(
  {
    border: '1px solid var(--grey300)',
    margin: 0,

    ':focus': {
      borderColor: 'var(--business-color)',
      outline: 'none',
    },
  },
  (props) => ({
    borderRadius: props.borderRadius ? props.borderRadius : '8px',
  }),
);
