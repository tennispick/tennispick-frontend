import { ButtonType } from '@/types/button';
import Button from './Button';
import Image from 'next/image';
import { cn } from '@/utils/cn';

type Props = {
  iconSrc: string;
  iconAlign: 'left' | 'right';
  iconAlt: string;
} & ButtonType;

const IconButton = ({
  iconSrc,
  iconAlt,
  iconAlign,
  size,
  variant,
  label,
  children,
  className,
  ...props
}: Props) => {
  const iconButtonStyles = cn(
    'flex items-center justify-center gap-2',
    iconAlign === 'left' ? 'flex-row' : 'flex-row-reverse',
    className,
  );

  return (
    <Button
      size={size}
      variant={variant}
      label={label}
      className={iconButtonStyles}
      {...props}
    >
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={20}
        height={20}
        style={{ width: '1rem', height: '1rem' }}
      />
      {children || label}
    </Button>
  );
};

export default IconButton;
