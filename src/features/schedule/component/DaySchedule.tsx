import { getDayOfWeek } from '@utils/date';
import { useLessonScheduleByPeriodQuery } from '../query/scheduleQuery';
import { GET_WEEK_LIST_COUNT } from '@features/constant/schedule';
import Loading from '@components/common/Loading';
import ScheduleTimeTable from './ScheduleTimeTable';

import { getDayOfWeekList } from '@utils/date';
import { CoachListData } from '@apis/coach/coach.type';
import { styled } from 'styled-system/jsx';
import { flex } from 'styled-system/patterns';

type Props = {
  isMobile: boolean;
  date: Date;
  coachList: CoachListData[];
};

const DaySchedule = ({ isMobile, date, coachList }: Props) => {
  const thisWeekSunday = getDayOfWeek(date, 'sunday');
  const nextWeekSunday = new Date(thisWeekSunday);
  nextWeekSunday.setDate(thisWeekSunday.getDate() + GET_WEEK_LIST_COUNT * 7);

  const { data, isLoading } = useLessonScheduleByPeriodQuery({
    startDate: thisWeekSunday,
    endDate: nextWeekSunday,
  });

  return (
    <>
      {isLoading && <Loading />}
      <div
        className={flex({
          width: '100%',
          height: 'calc(100% - 176px)',
          flexDirection: isMobile ? 'column' : 'row',
        })}
      >
        <SchduleTimeTableContainer>
          <SchduleTimeTableTitle>평일</SchduleTimeTableTitle>
          <ScheduleTimeTable
            coach={coachList}
            data={data}
            timeTableMapList={getDayOfWeekList(date, GET_WEEK_LIST_COUNT, true)}
          />
        </SchduleTimeTableContainer>
        <SchduleTimeTableContainer>
          <SchduleTimeTableTitle>주말</SchduleTimeTableTitle>
          <ScheduleTimeTable
            coach={coachList}
            data={data}
            timeTableMapList={getDayOfWeekList(
              date,
              GET_WEEK_LIST_COUNT,
              false,
            )}
          />
        </SchduleTimeTableContainer>
      </div>
    </>
  );
};

const SchduleTimeTableContainer = styled('div', {
  base: {
    width: '100%',
    height: '100%',
  },
});

const SchduleTimeTableTitle = styled('div', {
  base: {
    height: '24px',
    fontSize: '1.25rem',
    fontWeight: 600,
    margin: '0 0 16px 0',
  },
});

export default DaySchedule;
