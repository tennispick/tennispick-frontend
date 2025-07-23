import infoIcon from '@icons/info.svg';
import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  description: string;
  margin?: string;
} & HTMLAttributes<HTMLDivElement>;

const NoResult = ({ description, margin = '0', className, ...rest }: Props) => {
  return (
    <div
      className={twMerge(
        'relative w-full h-full bg-gray-200 rounded-inherit',
        className,
      )}
      style={{ margin }}
      {...rest}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
        <Image
          src={infoIcon}
          alt={'info icon'}
          width={20}
          height={20}
          className="mr-1.5"
        />
        {description}
      </div>
    </div>
  );
};

export default NoResult;
