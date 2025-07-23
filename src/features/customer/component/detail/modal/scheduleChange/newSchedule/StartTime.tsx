import ScheduleSelect from '../Select';
import { getTimeList } from 'src/shared/utils/date';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  startTime: string;
  disabled: boolean;
  onChangeFormData: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const StartTimeSelect = ({
  startTime,
  disabled,
  onChangeFormData,
  className,
  ...props
}: Props) => {
  const data = getTimeList({ isInclude: true }).map((item) => ({
    value: `${item}`,
    label: item,
  }));

  return (
    <ScheduleSelect
      name="startTime"
      data={data}
      className={twMerge(
        'w-[120px] h-9 leading-8 ml-3 text-sm',
        className
      )}
      selected={startTime}
      onChangeHandler={onChangeFormData}
      disabled={disabled}
      {...props}
    />
  );
};

export default StartTimeSelect;