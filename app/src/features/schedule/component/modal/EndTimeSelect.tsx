import { getEndTimeByStartTime } from 'app/src/utils/date';
import ScheduleModalSelect from './Select';
import { useEffect } from 'react';
import { SetStateAction } from 'app/src/types/index';
import { ScheduleType } from 'app/src/features/schedule/type/schedule.type';
import { css } from 'styled-system/css';

type Props = {
  index: number;
  startTime: string;
  lessonTime: string;
  allOnceSchedule: ScheduleType[];
  setAllOnceSchedule: SetStateAction<ScheduleType[]>;
};

const ScheduleModalEndTimeSelect = ({
  index,
  startTime,
  lessonTime,
  allOnceSchedule,
  setAllOnceSchedule,
}: Props) => {
  // TODO lessonTime이 undefined일 때, 서버 저장되어 있는 시간으로 셋팅

  const targetSchedule = allOnceSchedule[index];

  const endTime = getEndTimeByStartTime(
    startTime,
    lessonTime ? lessonTime : '20',
  );
  const data = [{ value: endTime, label: endTime }];

  useEffect(() => {
    setAllOnceSchedule((prev) => {
      const newSchedule = [...prev];
      newSchedule[index] = {
        ...targetSchedule,
        endTime: endTime,
      };
      return newSchedule;
    });
  }, [index, setAllOnceSchedule, startTime]);

  return (
    <ScheduleModalSelect
      name="endTime"
      data={data}
      className={css({ width: '120px', margin: '0 0 0 12px' })}
      selected={startTime}
      disabled={true}
    />
  );
};

export default ScheduleModalEndTimeSelect;
