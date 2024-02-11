import { ButtonHTMLAttributes } from 'react';
import { StaticImageData } from 'next/image';
import { ImageContainer as Image } from '@styles/styles';
import { ObjectProps } from '@interfaces/common';

type ButtonProps = {
  type?: 'submit' | 'reset' | 'button';
  label: string;
  variant?: 'default' | 'iconBtn' | 'radiusBtn' | 'iconRadiusBtn';
  src?: string | StaticImageData;
  alt?: string;
  placeholder?: 'empty' | 'blur' | undefined;
  imageCss?: any;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

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
}: ButtonProps) => {
  const { disabled } = props;
  const disabledStyle = {
    backgroundColor: 'var(--grey500) !important',
    color: 'var(--grey800) !important',
    fontWeight: '400 !important',
    cursor: 'not-allowed !important',
  };

  return (
    <>
      {variant === 'iconBtn' || variant === 'iconRadiusBtn' ? (
        <button
          type={type}
          css={{
            backgroundColor: 'transparent',
            fontSize: '1rem',
            outline: 'none',
            border: 0,
            margin: 0,
            padding: 0,
            cursor: 'pointer',
            ...BUTTON_VARIANT_STYLE[variant],
            ...(disabled && disabledStyle),
          }}
          disabled={disabled}
          onClick={onClick}
          {...props}
        >
          <Image
            src={src}
            alt={alt}
            placeholder={placeholder}
            priority={true}
            {...imageCss}
          />
          <span css={{ fontWeight: '500' }}>{label}</span>
        </button>
      ) : (
        <button
          type={type}
          css={{
            backgroundColor: 'transparent',
            fontSize: '1rem',
            outline: 'none',
            border: 0,
            margin: 0,
            padding: 0,
            cursor: 'pointer',
            ...BUTTON_VARIANT_STYLE[variant],
            ...(disabled && disabledStyle),
          }}
          disabled={disabled}
          onClick={onClick}
          {...props}
        >
          {label}
        </button>
      )}
    </>
  );
};

const BUTTON_VARIANT_STYLE: ObjectProps<object> = {
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
};

export default Button;
