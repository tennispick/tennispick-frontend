import { DayType } from '@features/schedule/type/schedule.type';
import ScheduleModalSelect from '../../Select';
import { dayList } from '@utils/day';
import { ChangeEvent } from 'react';

type Props = {
  day: DayType;
  onChangeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
  disabled: boolean;
};

const ScheduleModalRegularLessonIndividualScheduleByDay = ({
  day,
  onChangeHandler,
  disabled,
}: Props) => {

  const data = dayList.map(({ name, krName }) => ({
    value: name,
    label: krName,
  }));

  return (
    <ScheduleModalSelect
      name="startTime"
      data={data}
      css={{
        width: 'calc(15% - 16px)',
        margin: '0 0 0 8px'
      }}
      selected={day}
      onChangeHandler={onChangeHandler}
      disabled={disabled}
    />
  );
};

export default ScheduleModalRegularLessonIndividualScheduleByDay;
