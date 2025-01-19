import { cn } from '@/shared/lib/utils';
import * as React from 'react';
import { FieldError } from 'react-hook-form';
import ErrorIcon from '@/public/icons/error_important.svg';

export interface InputProps extends React.ComponentProps<'input'> {
  wrapperClassName?: string;
  errors?: FieldError;
  errorClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { wrapperClassName, errors, errorClassName, className, type, ...props },
    ref,
  ) => {
    return (
      <div className={cn(wrapperClassName)}>
        <input
          ref={ref}
          type={type}
          className={cn(
            'ring-offset-background flex file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-100 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className,
          )}
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
