import { Button, ButtonProps } from '@/shared/ui/components/button';
import { forwardRef } from 'react';

interface Props extends ButtonProps {
  label: string;
}

export const TenButton = forwardRef<HTMLButtonElement, Props>(
  ({ label, ...props }, ref) => {
    return (
      <Button ref={ref} {...props}>
        {label}
      </Button>
    );
  },
);
