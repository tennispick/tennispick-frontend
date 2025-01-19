import { cn } from '@/shared/lib/utils';
import { Input } from '@/shared/ui/components/input';
import { ComponentProps, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

interface Props extends ComponentProps<typeof Input> {
  errors?: FieldError;
  errorClassName?: string;
}

export const TenInput = forwardRef<
  HTMLInputElement,
  Props
>(({ errors, errorClassName, className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      className={cn("h-10 w-full rounded-md border border-input bg-white-100 px-3 py-2 text-base", className, errors && 'border-red-500', errorClassName)}
      errors={errors}
      errorClassName={errorClassName}
      {...props}
    />
  )
});

TenInput.displayName = 'TenInput';
