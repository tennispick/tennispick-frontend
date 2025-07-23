import { getTimeList } from 'src/shared/utils/date';
import ScheduleModalSelect from '../../Select';

type Props = {
  startTime: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled: boolean;
};

const ScheduleModalRegularLessonIndividualScheduleStartTimeSelect = ({
  startTime,
  onChangeHandler,
  disabled,
}: Props) => {
  const data = getTimeList({ isInclude: true }).map((item) => ({
    value: `${item}`,
    label: item,
  }));

  return (
    <ScheduleModalSelect
      name="startTime"
      data={data}
      className="w-[100px] ml-3"
      selected={startTime}
      onChangeHandler={onChangeHandler}
      disabled={disabled}
    />
  );
};

export default ScheduleModalRegularLessonIndividualScheduleStartTimeSelect;