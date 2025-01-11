import { ButtonHTMLAttributes } from 'react';
import Image, { StaticImageData } from 'next/image';
import { css, cva } from 'styled-system/css';
import { Styles } from 'styled-system/css';

type Props = {
  type?: 'submit' | 'reset' | 'button';
  label: string;
  variant?: 'default' | 'iconBtn' | 'radiusBtn' | 'iconRadiusBtn';
  src?: string | StaticImageData;
  alt?: string;
  placeholder?: 'empty' | 'blur' | undefined;
  imageCss?: any;
  css?: Styles;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const BUTTON_VARIANT_STYLE = cva({
  base: {},
  variants: {
    variant: {
      default: {
        border: '1px solid var(--grey100)',
        borderRadius: '8px',
        padding: '12px 16px',
      },
      iconBtn: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid var(--grey100)',
        borderRadius: '8px',
        padding: '10px 20px',
      },
      radiusBtn: {
        border: '1px solid var(--grey100)',
        borderRadius: '50px',
        padding: '12px 20px',
      },
      iconRadiusBtn: {
        display: 'flex',
        alignItems: 'center',
      },
    },
  },
});

const Button = ({
  type = 'button',
  label,
  variant = 'default',
  src = '',
  alt = '',
  placeholder = 'empty',
  imageCss = {
    width: 16,
    height: 16,
    margin: '0 8px 0 0',
  },
  onClick,
  ...props
}: Props) => {
  const { css: cssProp = {}, disabled, ...rest } = props;

  const disabledStyle = {
    backgroundColor: 'var(--grey500) !important',
    color: 'var(--grey800) !important',
    fontWeight: '400 !important',
    cursor: 'not-allowed !important',
  };

  const variantStyle = BUTTON_VARIANT_STYLE.raw({ variant });

  const defaultStyle = {
    backgroundColor: 'transparent',
    fontSize: '1rem',
    outline: 'none',
    border: 0,
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    ...(disabled && disabledStyle),
  };

  const className = css(defaultStyle, variantStyle, cssProp);

  return (
    <>
      {variant === 'iconBtn' || variant === 'iconRadiusBtn' ? (
        <button
          type={type}
          className={className}
          disabled={disabled}
          onClick={onClick}
          {...rest}
        >
          <Image
            src={src}
            alt={alt}
            placeholder={placeholder}
            priority={true}
            {...imageCss}
          />
          <span className={css({ fontWeight: 500 })}>{label}</span>
        </button>
      ) : (
        <button
          type={type}
          className={className}
          disabled={disabled}
          onClick={onClick}
          {...rest}
        >
          {label}
        </button>
      )}
    </>
  );
};

export default Button;
