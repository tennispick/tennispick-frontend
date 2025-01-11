import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { css, cx } from 'styled-system/css';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef(
  (
    { className, type, ...rest }: Props,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const defaultStyle = {};

    const style = cx(css(defaultStyle), className);

    return <input ref={ref} type={type} className={style} {...rest} />;
  },
);

Input.displayName = 'Input';
export default Input;
