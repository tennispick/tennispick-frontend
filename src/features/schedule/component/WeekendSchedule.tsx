import { CoachType } from "@features/coach/type/coach.type";
import ScheduleDate from './ScheduleDate';
import { GET_WEEK_LIST_COUNT } from '@features/constant/schedule';
import { getDayOfWeekList } from '@utils/date';

type Props = {
  date: Date;
  coach: Array<CoachType>;
};

const WeekendSchedule = ({ date, coach }: Props) => {

  const dayList = getDayOfWeekList(date, GET_WEEK_LIST_COUNT, false);

  return (
    <div css={{ position: 'relative', width: '50%' }}>
      <div
        css={{
          position: 'relative',
          fontSize: '1.25rem',
          fontWeight: 600,
          margin: '0 0 16px 0',
          color: 'var(--blue100)',
        }}
      >
        주말
      </div>
      <ScheduleDate
        weekListCount={GET_WEEK_LIST_COUNT}
        lists={dayList}
        coach={coach}
      />
    </div>
  );
};

export default WeekendSchedule;
