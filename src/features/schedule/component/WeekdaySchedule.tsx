import { getDayOfWeek } from "@utils/date";
import ScheduleDate from "./ScheduleDate";
import { GET_WEEK_LIST_COUNT } from "@features/constant/schedule";

type Props = {
  coach: any;
  today: Date;
}

const WeekdaySchedule = ({ coach, today }: Props) =>{

  const dayWeekList = getDayOfWeek({ date: today, weekCount: GET_WEEK_LIST_COUNT, isWeekDay: true });
  
  return(
    <div css={{ position: 'relative', width: '50%', height: '100%' }}>
      <div css={{ position: 'relative', height: '24px', fontSize: '1.25rem', fontWeight: 600, margin: '0 0 16px 0' }}>평일</div>
      <ScheduleDate
        weekListCount={GET_WEEK_LIST_COUNT}
        lists={dayWeekList.dayList}
        coach={coach}
      />
    </div>
  )
}

export default WeekdaySchedule;