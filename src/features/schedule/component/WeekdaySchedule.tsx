import { getDayOfWeek } from "@utils/date";
import { useMemo } from "react";
import ScheduleDate from "./ScheduleDate";
import { GET_WEEK_LIST_COUNT } from "@features/constant/schedule";

type Props = {
  coach: any; 
}

const WeekdaySchedule = ({ coach }: Props) =>{

  // TODO 오늘 날짜가 오늘 날짜가 속한 주차 이후부터 계산

  const today = new Date();

  const dayWeekList = useMemo(() => getDayOfWeek({ date: today, weekCount: GET_WEEK_LIST_COUNT, isWeekDay: true }), [today]);
  
  console.log(dayWeekList)

  // const dayWeekList = useMemo(() => {
  //   const getDayOfWeekAsync = async () => {
  //     const updatedLists = await getDayOfWeek({ date: today, weekCount: GET_WEEK_LIST_COUNT, lists: result });
  //     // Update state or dependency with the modified lists if needed
  //     console.log(updatedLists);
  //   };
  
  //   getDayOfWeekAsync();
  // }, [today]);

  // console.log(dayWeekList);

  // { dayWeekList }
  // console.log(lists);
  // console.log(loopCount);

  return(
    <div css={{ position: 'relative', width: '50%', overflowY: 'scroll', padding: '0 16px 0 0' }}>
      <ScheduleDate
        weekListCount={GET_WEEK_LIST_COUNT}
        lists={dayWeekList.dayList}
        coach={coach}
      />
    </div>
  )
}

export default WeekdaySchedule;