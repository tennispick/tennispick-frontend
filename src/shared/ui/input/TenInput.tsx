import { Input } from '@/shared/ui/components/input';
import { ComponentProps, forwardRef } from 'react';

export const TenInput = forwardRef<
  HTMLInputElement,
  ComponentProps<typeof Input>
>(({ ...props }, ref) => {
  return <Input {...props} ref={ref} />;
});

TenInput.displayName = 'TenInput';
