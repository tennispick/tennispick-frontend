import { CoachListData } from '@apis/coach/coach.type';
import Loading from '@/shared/components/common/Loading';
import { GET_WEEK_LIST_COUNT } from '@features/constant/schedule';
import { useLessonScheduleByPeriodQuery } from '@features/schedule/query/scheduleQuery';
import { getDayOfWeek, getDayOfWeekList } from 'src/shared/utils/date';

type Props = {
  isMobile: boolean;
  date: Date;
  coachList: CoachListData[];
};

const ScheduleCalendarTable = ({ isMobile, date, coachList }: Props) => {
  const thisWeekSunday = getDayOfWeek(date, 'sunday');
  const nextWeekSunday = new Date(thisWeekSunday);
  nextWeekSunday.setDate(thisWeekSunday.getDate() + GET_WEEK_LIST_COUNT * 7);

  const { data, isLoading } = useLessonScheduleByPeriodQuery({
    startDate: thisWeekSunday,
    endDate: nextWeekSunday,
  });

  if (isLoading) return <Loading />;

  return (
    <div
      className={`flex h-[calc(100%_-_176px)] w-full ${
        isMobile ? 'flex-col' : 'flex-row'
      }`}
    >
      <div className="h-full w-full">
        <div className="mb-4 h-6 text-xl font-semibold">평일</div>
        {/* <ScheduleTimeTable
          coach={coachList}
          data={data}
          timeTableMapList={getDayOfWeekList(date, GET_WEEK_LIST_COUNT, true)}
        /> */}
      </div>
      <div className="h-full w-full">
        <div className="mb-4 h-6 text-xl font-semibold">주말</div>
        {/* <ScheduleTimeTable
          coach={coachList}
          data={data}
          timeTableMapList={getDayOfWeekList(
            date,
            GET_WEEK_LIST_COUNT,
            false,
          )}
        /> */}
      </div>
    </div>
  );
};

export default ScheduleCalendarTable;
