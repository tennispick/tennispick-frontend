import { CoachType } from '@features/coach/type/coach.type';
import ScheduleDate from './ScheduleDate';
import { GET_WEEK_LIST_COUNT } from '@features/constant/schedule';
import { getDayOfWeekList } from '@utils/date';

type Props = {
  coach: Array<CoachType>;
  date: Date;
};

const WeekdaySchedule = ({ coach, date }: Props) => {
  const dayList = getDayOfWeekList(date, GET_WEEK_LIST_COUNT, true);

  return (
    <div css={{ position: 'relative', width: '50%', height: '100%' }}>
      <div
        css={{
          position: 'relative',
          height: '24px',
          fontSize: '1.25rem',
          fontWeight: 600,
          margin: '0 0 16px 0',
        }}
      >
        평일
      </div>
      <ScheduleDate
        weekListCount={GET_WEEK_LIST_COUNT}
        lists={dayList}
        coach={coach}
      />
    </div>
  );
};

export default WeekdaySchedule;
