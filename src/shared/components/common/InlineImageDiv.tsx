import Image, { StaticImageData } from 'next/image';

type Props = {
  src: string | StaticImageData;
  alt: string;
  placeholder?: 'empty' | 'blur' | undefined;
  imageClassName?: string;
  text: string;
};

const InlineImageDiv = ({
  src,
  alt,
  placeholder = 'empty',
  imageClassName = 'w-4 h-4 mr-2',
  text,
}: Props) => {
  return (
    <div className="flex items-center">
      <Image
        src={src}
        alt={alt}
        placeholder={placeholder}
        priority={true}
        className={imageClassName}
        width={16}
        height={16}
      />
      <span>{text}</span>
    </div>
  );
};

export default InlineImageDiv;
