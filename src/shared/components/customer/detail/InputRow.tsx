import Input from '@/shared/components/common/Input';
import { ForwardedRef, HTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = Omit<HTMLAttributes<HTMLInputElement>, 'type'> & {
  name: string;
  rowHeadLabel: string;
  rowHeadStyle?: { [key: string]: string };
  type?: string;
  disabled?: boolean;
  className?: string;
};

const CustomerInputRow = forwardRef(
  (
    {
      rowHeadLabel,
      rowHeadStyle,
      type = 'text',
      name,
      placeholder,
      defaultValue,
      className,
      ...props
    }: Props,
    ref?: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div
        className={twMerge(
          'flex items-center h-[calc((100%/5)-16px)]',
          className,
        )}
      >
        <div
          className="text-base font-semibold w-1/4 py-1"
          style={rowHeadStyle}
        >
          {rowHeadLabel}
        </div>
        <Input className="w-[calc(75%-48px)] h-full">
          <Input.TextField
            ref={ref}
            type={type}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            {...props}
          />
        </Input>
      </div>
    );
  },
);

CustomerInputRow.displayName = 'CustomerInputRow';
export default CustomerInputRow;
