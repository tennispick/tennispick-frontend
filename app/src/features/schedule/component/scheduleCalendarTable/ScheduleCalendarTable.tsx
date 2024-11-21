import { CoachListData } from 'app/src/apis/coach/coach.type';
import Loading from 'app/src/components/common/Loading';
import { GET_WEEK_LIST_COUNT } from 'app/src/features/constant/schedule';
import { useLessonScheduleByPeriodQuery } from 'app/src/features/schedule/query/scheduleQuery';
import { getDayOfWeek, getDayOfWeekList } from 'app/src/utils/date';
import { styled } from 'styled-system/jsx';
import { flex } from 'styled-system/patterns';

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
      className={flex({
        width: '100%',
        height: 'calc(100% - 176px)',
        flexDirection: isMobile ? 'column' : 'row',
      })}
    >
      <Container>
        <CalendarWeekName>평일</CalendarWeekName>
        {/* <ScheduleTimeTable
          coach={coachList}
          data={data}
          timeTableMapList={getDayOfWeekList(date, GET_WEEK_LIST_COUNT, true)}
        /> */}
      </Container>
      <Container>
        <CalendarWeekName>주말</CalendarWeekName>
        {/* <ScheduleTimeTable
          coach={coachList}
          data={data}
          timeTableMapList={getDayOfWeekList(
            date,
            GET_WEEK_LIST_COUNT,
            false,
          )}
        /> */}
      </Container>
    </div>
  );
};

const Container = styled('div', {
  base: {
    width: '100%',
    height: '100%',
  },
});

const CalendarWeekName = styled('div', {
  base: {
    height: '24px',
    fontSize: '1.25rem',
    fontWeight: 600,
    margin: '0 0 16px 0',
  },
});

export default ScheduleCalendarTable;
