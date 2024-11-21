import { SetStateAction } from 'app/src/types/index';
import { DayType, ScheduleType } from 'app/src/features/schedule/type/schedule.type';
import ScheduleModalSelect from '../../Select';
import { dayList } from 'app/src/utils/day';
import { getDayOfThisWeek } from 'app/src/utils/date';
import { css } from 'styled-system/css';

type Props = {
  allOnceSchedule: ScheduleType[];
  setAllOnceSchedule: SetStateAction<ScheduleType[]>;
  item: ScheduleType;
  index: number;
  disabled: boolean;
};

const ScheduleModalRegularLessonAllOnceScheduleByDay = ({
  allOnceSchedule,
  setAllOnceSchedule,
  item,
  index,
  disabled,
}: Props) => {
  const data = dayList.map(({ name, krName }) => ({
    value: name,
    label: krName,
  }));

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    const targetSchedule = allOnceSchedule[index];

    setAllOnceSchedule((prev) => {
      const newSchedule = [...prev];
      newSchedule[index] = {
        ...targetSchedule,
        date: getDayOfThisWeek(value as DayType),
        day: value,
      };
      return newSchedule;
    });
  };

  return (
    <ScheduleModalSelect
      name="startTime"
      data={data}
      className={css({ width: '140px' })}
      selected={item.day}
      onChangeHandler={onChangeHandler}
      disabled={disabled}
    />
  );
};

export default ScheduleModalRegularLessonAllOnceScheduleByDay;
