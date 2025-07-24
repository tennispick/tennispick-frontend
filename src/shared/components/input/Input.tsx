import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef(
  (
    { className, type, ...rest }: Props,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const style = clsx(className);

    return <input ref={ref} type={type} className={style} {...rest} />;
  },
);

Input.displayName = 'Input';
export default Input;
