import { InputHTMLAttributes } from 'react';
import { css, cx } from 'styled-system/css';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, type, ...rest }: Props) => {
  const defaultStyle = {};

  const style = cx(css(defaultStyle), className);

  return <input type={type} className={style} {...rest} />;
};
