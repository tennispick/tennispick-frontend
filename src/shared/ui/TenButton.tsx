import { Button, ButtonProps } from 'src/이전 파일들/components/ui/button';
import { forwardRef } from 'react';

interface Props extends ButtonProps {
  label: string;
}

const TenButton = forwardRef<HTMLButtonElement, Props>(
  ({ label, ...props }, ref) => {
    return (
      <Button {...props} ref={ref}>
        {label}
      </Button>
    );
  },
);

TenButton.displayName = 'TenButton';

export default TenButton;
