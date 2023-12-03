import { css, keyframes } from '@emotion/react';

/* Animation */
const fadeUpKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(calc(-50% + 50px));
  }

  to {
    opacity: 1;
    transform: translateX(-50%) translateY(-50%);
  }
`;

export const fadeUp = css`
	animation-duration: 0.65s;
	animation-name: ${fadeUpKeyframes};
	animation-timing-function: ease;
`;

const fadeRightKeyframes = keyframes`
  from {
    transform: translateX(100%)
  }

  to {
    transform: translateX(0)
  }
`;

export const fadeRight = css`
	animation-duration: 0.65s;
	animation-name: ${fadeRightKeyframes};
	animation-timing-function: ease;
`;

const fadeOutRightKeyframes = keyframes`
  from {
    transform: translateX(100%)
  }

  to {
    transform: translateX(200%)
  }
`;

export const fadeOutRight = css`
	animation-duration: 0.65s;
	animation-name: ${fadeOutRightKeyframes};
	animation-timing-function: ease;
`;

const dropDownActiveKeyframes = keyframes`
  from {
    opacity: 0;
  }

  to{
    opacity: 1;
  }
`;

export const dropDownActive = css`
	animation-duration: 0.2s;
	animation-name: ${dropDownActiveKeyframes};
	animation-timing-function: ease-in-out;
`;

const dropDownDeActiveKeyframes = keyframes`
  from {
    opacity: 1;
  }

  to{
    opacity: 0;
  }
`;

export const dropDownDeActive = css`
	animation-duration: 0.2s;
	animation-name: ${dropDownDeActiveKeyframes};
	animation-timing-function: ease-in-out;
`;

const spinnerKeyframes = keyframes`
  0% {
    transform: rotate(0deg)
  }
  25% {
    transform: rotate(90deg)
  }
  50% {
    transform: rotate(180deg)
  }
  70% {
    transform: rotate(270deg)
  }
  100% {
    transform: rotate(360deg)
  }
`;

export const spinner = css`
  animation-duration: 1s;
	animation-name: ${spinnerKeyframes};
	animation-timing-function: linear;
  animation-iteration-count: infinite;
`