import ScheduleSelect from '../Select';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  endTime: string;
  onChangeFormData?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const EndTimeSelect = ({ endTime, onChangeFormData, className, ...props }: Props) => {
  const data = [{ value: endTime, label: endTime }];

  return (
    <ScheduleSelect
      name="endTime"
      data={data ?? []}
      className={twMerge(
        'w-[120px] h-9 leading-8 ml-3 text-sm',
        className
      )}
      selected={endTime}
      onChangeHandler={onChangeFormData}
      {...props}
    />
  );
};

export default EndTimeSelect;