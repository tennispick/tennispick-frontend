import ScheduleModalSelect from './Select';
import { getTimeList } from '@utils/date';
import { ChangeEvent } from 'react';

type Props = {
  index: number;
  startTime: string;
  onSelectTimeListHandler: ({
    index,
    name,
    value,
  }: {
    index: number;
    name: 'startTime' | 'endTime';
    value: string;
  }) => void;
  disabled: boolean;
};

const ScheduleModalStartTimeSelect = ({
  index,
  startTime,
  onSelectTimeListHandler,
  disabled,
}: Props) => {
  const data = getTimeList({ isInclude: true }).map((item) => ({
    value: `${item}`,
    label: item,
  }));

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    onSelectTimeListHandler({ index, name: 'startTime', value });
  };

  return (
    <ScheduleModalSelect
      name="startTime"
      data={data}
      css={{
        width: '120px',
        margin: '0 0 0 12px',
      }}
      selected={startTime}
      onChangeHandler={onChangeHandler}
      disabled={disabled}
    />
  );
};

export default ScheduleModalStartTimeSelect;
