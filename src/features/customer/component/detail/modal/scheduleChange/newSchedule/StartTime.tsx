import ScheduleSelect from '../Select';
import { getTimeList } from '@utils/date';

type Props = {
  startTime: string;
  disabled: boolean;
  onChangeFormData: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const StartTimeSelect = ({
  startTime,
  disabled,
  onChangeFormData,
  ...rest
}: Props) => {
  const data = getTimeList({ isInclude: true }).map((item) => ({
    value: `${item}`,
    label: item,
  }));

  return (
    <ScheduleSelect
      name="startTime"
      data={data}
      css={{
        width: '120px',
        height: '36px',
        lineHeight: '32px',
        margin: '0 0 0 12px',
        fontSize: '0.875rem',
      }}
      selected={startTime}
      onChangeHandler={onChangeFormData}
      disabled={disabled}
      {...rest}
    />
  );
};

export default StartTimeSelect;
