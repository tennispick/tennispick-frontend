import { Dispatch, SetStateAction, useMemo, memo, useEffect, useState, ChangeEvent, ChangeEventHandler } from 'react';
import styled from '@emotion/styled';
import { getTimeList } from '@utils/date';
import { Select } from '@components/index';
import { ScheduleListType } from '@components/schedule/type';

type Props = {
  lessonTime?: string;
  setScheduleList: Dispatch<SetStateAction<ScheduleListType[]>>;
}

const TimeRange = ({ ...props }: Props) =>{

  // startTime이 변경될 때, time set 함수 

  // endTime이 변경될 때, time set 함수

  const { lessonTime, setScheduleList, ...rest } = props;

  console.log(lessonTime);

  const startTimeList = useMemo(() => {
    
    return getTimeList({ step: lessonTime, isInclude: true });

  }, [lessonTime])

  const [startTime, setStartTime] = useState(startTimeList[0]);

  const endTimeList = useMemo(() => {


    return getTimeList({ step: lessonTime, afterTime: startTime });

  }, [lessonTime, startTime])

  const handleTimeRangeChange = (e: ChangeEvent<HTMLSelectElement>) =>{


    const { name, value } = e.target;
    if(name === 'startTime') setStartTime(value);


  }

  return (
    <RangeContainer {...rest}>
      <Select
        name={'startTime'}
        width={'calc(80% - 4px)'}
        margin={'0 4px 0 0'}
        onChange={handleTimeRangeChange}
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