import { ButtonType } from "@/types/button";
import Button from "./Button";
import Image from "next/image";

type Props = {
  iconSrc: string;
  iconAlign: 'left' | 'right';
  iconAlt: string;
} & ButtonType

const IconButton = ({
  iconSrc,
  iconAlt,
  iconAlign,
  size,
  variant,
  text,
  children,
  ...rest
}: Props) => {
  return (
    <Button
      size={size}
      variant={variant}
      text={text}
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: iconAlign === 'right' ? 'row' : 'row-reverse'
      }}
      {...rest}
    >
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={24}
        height={24}
      />
      {children || text}
    </Button>
  )
};

export default IconButton;