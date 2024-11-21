import { getTimeList } from 'app/src/utils/date';
import ScheduleModalSelect from '../../Select';
import { css } from 'styled-system/css';

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
      className={css({
        width: '100px',
        margin: '0 0 0 12px',
      })}
      selected={startTime}
      onChangeHandler={onChangeHandler}
      disabled={disabled}
    />
  );
};

export default ScheduleModalRegularLessonIndividualScheduleStartTimeSelect;
