import { Dispatch, SetStateAction, useMemo, memo, useEffect, useState, ChangeEvent, ChangeEventHandler } from 'react';
import styled from '@emotion/styled';
import { getTimeList } from '@utils/date';
import { Select } from '@components/index';
import { FormAllOnceCreateType } from '@features/schedule/type/schedule.type';

type Props = {
  index: number;
  lessonTime: string;
  weeklyLessonCount: string;
  setFormData: Dispatch<SetStateAction<FormAllOnceCreateType>>;
}

const TimeRange = ({ ...props }: Props) =>{

  const { index, weeklyLessonCount, lessonTime, setFormData, ...rest } = props;
  const [startTime, setStartTime] = useState<string>('00:00');
  const [endTime, setEndTime] = useState<string>('00:00');

  const startTimeList = useMemo(() => {
    return getTimeList({ step: lessonTime, isInclude: true });
  }, [lessonTime, startTime])

  const endTimeList = useMemo(() => {
    return getTimeList({ step: lessonTime, afterTime: startTime })
  }, [startTimeList])

  const handleTimeRangeChange = (e: ChangeEvent<HTMLSelectElement>) =>{

    const { name, value } = e.target;
    setFormData((prev) => {
      const { schedule } = prev;
      const newSchedule = [...schedule];

      newSchedule[index] = {
        ...newSchedule[index],
        [name]: value
      }
      return {
        ...prev,
        schedule: newSchedule
      }
    });

    if(name === 'startTime') setStartTime(value);
    else setEndTime(value);
  }

  useEffect(() => {
    setFormData((prev) => {
      const { schedule } = prev;
      const newSchedule = [...schedule];
      
      newSchedule[index] = {
        ...newSchedule[index],
        startTime: startTimeList[0],
        endTime: endTimeList[0]
      }

      return {
        ...prev,
        schedule: newSchedule
      }
    });
  }, [startTimeList, endTimeList])

  return (
    <RangeContainer {...rest}>
      <Select
        name={'startTime'}
        width={'calc(80% - 4px)'}
        margin={'0 4px 0 0'}
        onChange={handleTimeRangeChange}
        value={startTime}
      >
        {startTimeList.map((time, index) => {
          return <option key={time + index}>{time}</option>
        })}
      </Select>
      ~
      <Select
        name={'endTime'}
        width={'calc(80% - 4px)'}
        margin={'0 0 0 4px'}
        onChange={(e) => handleTimeRangeChange(e)}
        value={endTime}
      >
        {endTimeList.map((time, index) => {
          return <option key={time + index}>{time}</option>
        })}
      </Select>
    </RangeContainer>
  )
};

const RangeContainer = styled.div({
  display: 'flex',
  alignItems: 'center',

  'select': {
    minWidth: '96px',
  }
});

export default memo(TimeRange);