import { ChangeEvent } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  name: string;
  selected?: string;
  onChangeHandler?: (e: ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  className?: string;
  data: {
    value: string;
    label: string;
  }[];
};

const ScheduleSelect = ({
  name,
  data,
  selected = '',
  onChangeHandler,
  disabled,
  className,
  ...props
}: Props) => {
  return (
    <select
      name={name}
      className={twMerge(
        'w-full h-full leading-8 py-0.5 pl-2.5 text-base border border-gray-300 rounded-lg outline-none',
        className
      )}
      value={selected}
      onChange={onChangeHandler}
      disabled={disabled}
      {...props}
    >
      {data.map(({ label, value }, index) => {
        return (
          <option key={`${name}-${value}-${index}`} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

export default ScheduleSelect;