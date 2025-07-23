import { PropsWithChildren } from 'react';
import Image from 'next/image';

type Props = {
  imgSrc?: string;
  label: string;
  value?: string;
} & PropsWithChildren;

const ItemRow = ({ imgSrc, label, children, value = '' }: Props) => {
  return (
    <div className="flex items-center h-9 mb-3">
      <div className="flex items-center w-[140px] mr-3">
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={label}
            width={20}
            height={20}
            className="mr-2"
          />
        )}
        {label}
      </div>
      {children ?? (
        <input
          type="text"
          value={value}
          className="w-[calc(100%-152px)] h-full py-2.5 pl-2.5 text-sm mr-0 border border-gray-300 rounded-lg outline-none z-10"
          readOnly
        />
      )}
    </div>
  );
};

export default ItemRow;