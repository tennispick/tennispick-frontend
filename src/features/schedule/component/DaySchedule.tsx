import { getDayOfWeek } from '@utils/date';
import { useScheduleByPeriodQuery } from '../query/scheduleQuery';
import { GET_WEEK_LIST_COUNT } from '@features/constant/schedule';
import Loading from '@components/common/Loading';
import ScheduleTimeTable from './ScheduleTimeTable';

import { getDayOfWeekList } from '@utils/date';
import styled from '@emotion/styled';
import { CoachListData } from '@apis/coach/coach.type';

type Props = {
  date: Date;
  coachList: CoachListData[];
};

const DaySchedule = ({ date, coachList }: Props) => {
  const thisWeekSunday = getDayOfWeek(date, 'sunday');
  const nextWeekSunday = new Date(thisWeekSunday);
  nextWeekSunday.setDate(thisWeekSunday.getDate() + GET_WEEK_LIST_COUNT * 6);

  const { data, isLoading } = useScheduleByPeriodQuery({
    startDate: thisWeekSunday,
    endDate: nextWeekSunday,
  });

  return (
    <>
      {isLoading && <Loading />}
      <div
        css={{
          display: 'flex',
          width: '100%',
          height: 'calc(100% - 176px)',
        }}
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

const SchduleTimeTableContainer = styled.div({
  position: 'relative',
  width: '50%',
  height: '100%',
});

const SchduleTimeTableTitle = styled.div({
  position: 'relative',
  height: '24px',
  fontSize: '1.25rem',
  fontWeight: 600,
  margin: '0 0 16px 0',
});

export default DaySchedule;
