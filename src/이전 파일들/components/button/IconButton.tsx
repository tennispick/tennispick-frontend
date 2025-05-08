import { ButtonType } from 'src/이전 파일들/types/button';
import Button from './Button';
import Image from 'next/image';
import { flex } from 'styled-system/patterns';
import { cx } from 'styled-system/css';

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
  ...props
}: Props) => {
  const { className, ...rest } = props;

  const defaultStyle = flex({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: iconAlign === 'left' ? 'row' : 'row-reverse',
    gap: '0.5rem',
  });

  const style = cx(defaultStyle, className);

  return (
    <Button
      size={size}
      variant={variant}
      label={label}
      className={style}
      {...rest}
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
