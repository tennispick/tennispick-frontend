import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils';

const buttonVariants = cva(
  'border-0 cursor-pointer disabled:bg-gray-500 disabled:text-gray-800 disabled:border-gray-100 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'text-white bg-blue-500',
        secondary: 'text-gray-800 bg-gray-400',
        ghost: 'text-black bg-transparent',
        text: 'text-black bg-transparent border border-gray-100',
        positive: 'text-white bg-blue-500',
        negative: 'text-white bg-red-500',
      },
      size: {
        xs: 'h-7 text-xs px-3 rounded',
        sm: 'h-8 text-sm px-3 rounded',
        md: 'h-9 text-base px-5 rounded-md',
        lg: 'h-11 text-lg px-8 rounded-md',
        xl: 'h-12 text-xl px-10 rounded-md',
        full: 'w-full h-12 text-xl px-10 rounded-md',
        half: 'w-1/2 h-12 text-base px-10 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label?: string;
  full?: boolean;
}

const Button = ({
  className,
  variant,
  size,
  label,
  children,
  full,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant, size, className }),
        full ? 'w-full' : '',
      )}
      {...props}
    >
      {children || label}
    </button>
  );
};

export default Button;
