import { getDayOfWeek } from "@utils/date";
import ScheduleDate from "./ScheduleDate";
import { GET_WEEK_LIST_COUNT } from "@features/constant/schedule";

type Props = {
  coach: any;
  today: Date;
}

const WeekendSchedule = ({ today, coach }: Props) =>{

  const dayWeekList = getDayOfWeek({ date: today, weekCount: GET_WEEK_LIST_COUNT, isWeekDay: false });

  return(
    <div css={{ position: 'relative', width: '50%' }}>
      <div css={{ position: 'relative', fontSize: '1.25rem', fontWeight: 600, margin: '0 0 16px 0', color: 'var(--blue100)' }}>주말</div>
      <ScheduleDate
        weekListCount={GET_WEEK_LIST_COUNT}
        lists={dayWeekList.dayList}
        coach={coach}
      />
    </div>
  )
}

export default WeekendSchedule;