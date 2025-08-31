import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  id: string;
  label: string;
  checked: boolean;
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
} & HTMLAttributes<HTMLDivElement>;

const ToggleInput = ({
  id,
  label,
  checked,
  onClick,
  className,
  ...props
}: Props) => {
  return (
    <div className={twMerge('flex items-center', className)} {...props}>
      <label className="text-lg mr-4 min-w-[400px]">{label}</label>
      <input
        id={`${id}`}
        type="checkbox"
        className={
          'appearance-none rounded-full w-[54px] h-[28px] border-0 bg-gray-200 relative ' +
          "before:content-[''] before:absolute before:top-1 before:left-1 before:w-5 before:h-5 before:rounded-full before:bg-white before:transition-all before:duration-200 before:ease-linear " +
          'checked:bg-blue-500 checked:before:left-[30px] ' +
          'disabled:border-gray-200 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:before:bg-gray-200'
        }
        onClick={(e) => onClick(e)}
        defaultChecked={checked}
      />
    </div>
  );
};

export default ToggleInput;
