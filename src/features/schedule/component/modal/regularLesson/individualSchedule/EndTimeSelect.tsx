import { getEndTimeByStartTime } from '@utils/date';
import ScheduleModalSelect from '../../Select';
import { useEffect } from 'react';
import { SetStateAction } from '@/types/index';
import { IndividualFormDataProps } from '@features/schedule/type/regularLesson';
import { css } from 'styled-system/css';

type Props = {
  index: number;
  startTime: string;
  lessonTime: string;
  setFormData: SetStateAction<IndividualFormDataProps[]>;
  disabled: boolean;
};

const ScheduleModalRegularLessonIndividualScheduleEndTimeSelect = ({
  index,
  startTime,
  lessonTime,
  setFormData,
  disabled,
}: Props) => {
  const endTime = getEndTimeByStartTime(
    startTime,
    lessonTime ? lessonTime : '20',
  );
  const data = [{ value: endTime, label: endTime }];

  useEffect(() => {
    setFormData((prev) => {
      const newFormData = [...prev];
      newFormData[index] = {
        ...newFormData[index],
        endTime: endTime,
      };
      return newFormData;
    });
  }, [setFormData, startTime]);

  return (
    <ScheduleModalSelect
      name="endTime"
      data={data}
      className={css({
        width: '100px',
        margin: '0 0 0 12px',
      })}
      selected={endTime}
      onChangeHandler={() => {}}
      disabled={disabled}
    />
  );
};

export default ScheduleModalRegularLessonIndividualScheduleEndTimeSelect;
