import { getDayOfWeek } from 'app/src/utils/date';
import { useLessonScheduleByPeriodQuery } from '../query/scheduleQuery';
import { GET_WEEK_LIST_COUNT } from 'app/src/features/constant/schedule';
import Loading from 'app/src/components/common/Loading';
import ScheduleTimeTable from './ScheduleTimeTable';

import { getDayOfWeekList } from 'app/src/utils/date';
import { CoachListData } from 'app/src/apis/coach/coach.type';
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

  const initCoach = [
    {
      id: 0,
      name: '',
      phone: '',
      email: '',
      sex: '',
      birth: '',
      age: '',
      coachColor: '',
      position: '',
      createdAt: '',
      updatedAt: '',
    },
  ];

  return (
    <>
      {isLoading && <Loading />}
      <div
        className={flex({
          width: '100%',
          height: 'calc(100% - 176px)',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '16px',
        })}
      >
        <ScheduleCalendarContainer>
          <DayTitle>평일</DayTitle>
          <ScheduleTimeTable
            coachList={coachList.length === 0 ? initCoach : coachList}
            data={data}
            timeTableMapList={getDayOfWeekList(date, GET_WEEK_LIST_COUNT, true)}
          />
        </ScheduleCalendarContainer>
        <ScheduleCalendarContainer>
          <DayTitle>주말</DayTitle>
          <ScheduleTimeTable
            coachList={coachList.length === 0 ? initCoach : coachList}
            data={data}
            timeTableMapList={getDayOfWeekList(
              date,
              GET_WEEK_LIST_COUNT,
              false,
            )}
          />
        </ScheduleCalendarContainer>
      </div>
    </>
  );
};

const ScheduleCalendarContainer = styled('div', {
  base: {
    width: 'calc(50% - 8px)',
    height: '100%',
  },
});

const DayTitle = styled('div', {
  base: {
    height: '24px',
    fontSize: '1.25rem',
    fontWeight: 600,
    margin: '0 0 16px 0',
  },
});

export default DaySchedule;
