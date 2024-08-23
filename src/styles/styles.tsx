// import { Global, css } from '@emotion/react';
// import styled from '@emotion/styled';
// import Image from 'next/image';
// import ArrowDropDownIcon from '@icons/arrow_drop_down_black.svg';
// import WhiteCheckboxIcon from '@icons/checkbox/white_check.svg';
// import WhiteCheckboxIndeterminateIcon from '@icons/checkbox/white_check_indeterminate.svg';

// export type CSS_TYPE = {
//   width?: string | number;
//   minWidth?: string | number;
//   maxWidth?: string | number;
//   height?: string | number;
//   minHeight?: string | number;
//   maxHeight?: string | number;
//   textAlign?: any;
//   fontSize?: string;
//   fontWeight?: string;
//   position?: any;
//   top?: string | number;
//   bottom?: string | number;
//   left?: string | number;
//   right?: string | number;
//   padding?: string | number;
//   margin?: string | number;
//   display?: string;
//   alignItems?: string;
//   justifyContent?: string;
//   backgroundColor?: string;
//   background?: string;
//   backgroundImage?: string;
//   backgroundRepeat?: string;
//   backgroundSize?: string;
//   border?: string;
//   borderColor?: string;
//   borderTop?: string;
//   borderBottom?: string;
//   borderLeft?: string;
//   borderRight?: string;
//   borderRadius?: string;
//   borderTopLeftRadius?: string | number;
//   borderTopRightRadius?: string | number;
//   borderBottomLeftRadius?: string | number;
//   borderBottomRightRadius?: string | number;
//   transition?: string;
//   transform?: string;
//   opacity?: string | number;
//   hovercolor?: string;
//   hoveropacity?: string | number;
//   hoverbackground?: string;
//   cursor?: string;
//   zIndex?: string | number;
//   animation?: string;
//   animationDelay?: string;
//   animationDuration?: string | number;
//   rotate?: string;
//   flex?: string;
//   flexDirection?: any;
//   content?: string | number;
//   disabled?: boolean;

//   /* Etc */
//   isActive?: boolean;
//   RadioChecked?: boolean;
// };

// export const globalStyles = (
//   <Global
//     styles={css`

//       .hidden {
//         display: none;
//         opacity: 0;
//       }
//     `}
//   />
// );

// export const New = styled.i({});

// export const ImageContainer = styled(Image)<CSS_TYPE>({}, (props) => ({
//   width: props.width ? props.width : '100%',
//   height: props.height ? props.height : '100%',
//   padding: props.padding ? props.padding : '0',
//   margin: props.margin ? props.margin : '0',
//   position: props.position ? props.position : 'relative',
//   top: props.top,
//   bottom: props.bottom,
//   left: props.left,
//   right: props.right,
//   cursor: props.cursor,
//   disabled: {
//     cursor: 'not-allowed',
//   },
// }));

// export const Button = styled.button<CSS_TYPE>(
//   {
//     transition: 'transform 0.2s ease-in-out',
//     appearance: 'none',
//     backfaceVisibility: 'hidden',
//     WebkitTransform: 'translateZ(0)',
//     WebkitFontSmoothing: 'subpixel-antialiased',
//     cursor: 'pointer',
//   },
//   (props) => ({
//     display: props.display,
//     justifyContent: props.justifyContent,
//     alignItems: props.alignItems,
//     fontSize: props.fontSize,
//     fontWeight: props.fontWeight,
//     padding: props.padding ? props.padding : '0.5rem 1.1rem',
//     margin: props.margin ? props.margin : '0',
//     border: props.border ? props.border : '0',
//     backgroundColor: props.backgroundColor
//       ? props.backgroundColor
//       : 'transparent',
//     color: props.color ? props.color : '',
//     borderRadius: props.borderRadius ? props.borderRadius : '12px',
//   }),
// );

// export const Select = styled.select<CSS_TYPE>({}, (props) => ({
//   width: props.width ? props.width : '',
//   minWidth: props.minWidth ? props.minWidth : '120px',
//   height: props.height ? props.height : '',
//   padding: props.padding ? props.padding : '',
//   margin: props.margin ? props.margin : '',
//   fontSize: props.fontSize ? props.fontSize : '0.9rem',
//   border: props.border ? props.border : '1px solid var(--grey300)',
//   borderColor: props.borderColor ? props.borderColor : '',
//   borderRadius: props.borderRadius ? props.borderRadius : '8px',
// }));

// export const Input = styled.input<CSS_TYPE>(
//   {
//     border: '1px solid var(--grey300)',
//     margin: 0,

//     ':focus': {
//       borderColor: 'var(--business-color)',
//       outline: 'none',
//     },
//   },
//   (props) => ({
//     borderRadius: props.borderRadius ? props.borderRadius : '8px',
//   }),
// );
