import { ButtonHTMLAttributes } from 'react';
import Image, { StaticImageData } from 'next/image';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
        iconBtn:
          'flex items-center border border-gray-300 rounded-lg px-5 py-2.5',
        radiusBtn: 'border border-gray-300 rounded-full px-5 py-3',
        iconRadiusBtn: 'flex items-center',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label: string;
  src?: string | StaticImageData;
  alt?: string;
  placeholder?: 'empty' | 'blur' | undefined;
  imageClassName?: string;
}

const Button = ({
  className,
  variant,
  size,
  label,
  src = '',
  alt = '',
  placeholder = 'empty',
  imageClassName = 'w-4 h-4 mr-2',
  ...props
}: ButtonProps) => {
  const isIconVariant = variant === 'iconBtn' || variant === 'iconRadiusBtn';

  return (
    <button
      className={twMerge(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {isIconVariant && src && (
        <Image
          src={src}
          alt={alt}
          placeholder={placeholder}
          priority={true}
          className={imageClassName}
          width={16}
          height={16}
        />
      )}
      <span className="font-medium">{label}</span>
    </button>
  );
};

export default Button;
