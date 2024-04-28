import { SetStateAction } from '@/types/index';
import { DayType, ScheduleType } from '@features/schedule/type/schedule.type';
import ScheduleModalSelect from '../../Select';
import { dayList } from '@utils/day';
import { getDayOfThisWeek } from '@utils/date';

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
      css={{ width: '140px' }}
      selected={item.day}
      onChangeHandler={onChangeHandler}
      disabled={disabled}
    />
  );
};

export default ScheduleModalRegularLessonAllOnceScheduleByDay;
