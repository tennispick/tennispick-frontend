import { cn } from '@/shared/lib/utils';
import * as React from 'react';
import { FieldError } from 'react-hook-form';
import ErrorIcon from '@/public/icons/error_important.svg';

interface InputProps extends React.ComponentProps<'input'> {
  wrapperClassName?: string;
  errors?: FieldError;
  errorClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { wrapperClassName, className, type, errors, errorClassName, ...props },
    ref,
  ) => {
    return (
      <div className={cn(wrapperClassName)}>
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-white-100 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-100 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            errors && 'border-red-500',
            className,
          )}
          ref={ref}
          {...props}
        />
        {errors?.message && (
          <div className="relative flex items-center gap-1 mb-4 text-red-500">
            <ErrorIcon />
            <span className={cn(errorClassName)}>{errors.message}</span>
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
