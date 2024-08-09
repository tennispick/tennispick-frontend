import { ButtonType } from "@/types/button";
import { CSSObject } from "@emotion/react";

const Button = ({
  size,
  variant,
  text,
  children,
  ...rest
}: ButtonType) => {

  const defaultStyles: CSSObject = {
    border: '0',
    cursor: 'pointer'
  }

  const sizeStyles = {
    xs: {
      height: '1.75rem',
      fontSize: '0.75rem',
      padding: '0 0.75rem',
      borderRadius: '0.25rem',
    },
    sm: {
      height: '2rem',
      fontSize: '0.875rem',
      padding: '0 0.75rem',
      borderRadius: '0.25rem',
    },
    md: {
      height: '2.25rem',
      fontSize: '1rem',
      padding: '0 1.25rem',
      borderRadius: '0.375rem',
    },
    lg: {
      height: '2.75rem',
      fontSize: '1.125rem',
      padding: '0 2rem',
      borderRadius: '0.375rem',
    },
    xl: {
      height: '3rem',
      fontSize: '1.25rem',
      padding: '0 2.5rem',
      borderRadius: '0.375rem',
    },
  };

  const variantStyles = {
    primary: {
      color: 'var(--white100)',
      backgroundColor: 'var(--business-active-color)',
    },
    secondary: {
      color: 'var(--grey1600)',
      backgroundColor: 'var(--grey400)',
    },
    ghost: {
      color: 'var(--black100)',
      backgroundColor: 'transparent',
    },
    text: {
      color: 'var(--blue100)',
      backgroundColor: 'transparent',
    },
    positive: {
      color: 'var(--white100)',
      backgroundColor: 'var(--blue500)',
    },
    negative: {
      color: 'var(--white100)',
      backgroundColor: 'var(--red200)',
    },
  };

  return (
    <button
      css={[defaultStyles, sizeStyles[size], variantStyles[variant]]}
      {...rest}
    >
      {children || text}
    </button>
  )
};

export default Button;