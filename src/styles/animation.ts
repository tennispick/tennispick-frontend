import { css, keyframes } from "@emotion/react";

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