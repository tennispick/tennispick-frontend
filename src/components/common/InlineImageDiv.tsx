import { ImageContainer as Image } from '@styles/styles';
import { StaticImageData } from 'next/image';

interface InlineImageDivProps {
  src: string | StaticImageData;
  alt: string;
  placeholder?: 'empty' | 'blur' | undefined;
  imageCss?: { [key: string]: string };
  text: string;
}

const InlineImageDiv = ({
  src,
  alt,
  placeholder = 'empty',
  imageCss = { width: '16px', heigth: '16px', margin: '0 8px 0 0' },
  text,
}: InlineImageDivProps) => {
  return (
    <div
      css={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Image
        src={src}
        alt={alt}
        placeholder={placeholder}
        priority={true}
        {...imageCss}
      />
      <span>{text}</span>
    </div>
  );
};

export default InlineImageDiv;
