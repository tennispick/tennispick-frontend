import Image, { StaticImageData } from 'next/image';
import { Flex } from 'styled-system/jsx';

type Props = {
  src: string | StaticImageData;
  alt: string;
  placeholder?: 'empty' | 'blur' | undefined;
  imageCss?: { [key: string]: string };
  text: string;
};

const InlineImageDiv = ({
  src,
  alt,
  placeholder = 'empty',
  imageCss = { width: '16px', heigth: '16px', margin: '0 8px 0 0' },
  text,
}: Props) => {
  return (
    <Flex alignItems="center">
      <Image
        src={src}
        alt={alt}
        placeholder={placeholder}
        priority={true}
        {...imageCss}
      />
      <span>{text}</span>
    </Flex>
  );
};

export default InlineImageDiv;
