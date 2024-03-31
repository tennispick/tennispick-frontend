import { getDayOfWeek } from '@utils/date';
import { useScheduleByPeriodQuery } from '../query/scheduleQuery';
import { GET_WEEK_LIST_COUNT } from '@features/constant/schedule';
import Loading from '@components/common/Loading';
import ScheduleTimeTable from './ScheduleTimeTable';

import { getDayOfWeekList } from '@utils/date';
import styled from '@emotion/styled';
import { CoachListData } from '@apis/coach/coach.type';
import { CSS_TYPE } from '@styles/styles';

type Props = {
  isMobile: boolean;
  date: Date;
  coachList: CoachListData[];
};

const DaySchedule = ({ isMobile, date, coachList }: Props) => {
  const thisWeekSunday = getDayOfWeek(date, 'sunday');
  const nextWeekSunday = new Date(thisWeekSunday);
  nextWeekSunday.setDate(thisWeekSunday.getDate() + GET_WEEK_LIST_COUNT * 7);

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
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        <SchduleTimeTableContainer width={'100%'}>
          <SchduleTimeTableTitle>평일</SchduleTimeTableTitle>
          <ScheduleTimeTable
            coach={coachList}
            data={data}
            timeTableMapList={getDayOfWeekList(date, GET_WEEK_LIST_COUNT, true)}
          />
        </SchduleTimeTableContainer>
        <SchduleTimeTableContainer width={'100%'}>
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

const SchduleTimeTableContainer = styled.div<CSS_TYPE>(
  {
    position: 'relative',
    height: '100%',
  },
  (props) => ({
    width: props.width ? props.width : '50%',
  }),
);

const SchduleTimeTableTitle = styled.div({
  position: 'relative',
  height: '24px',
  fontSize: '1.25rem',
  fontWeight: 600,
  margin: '0 0 16px 0',
});

export default DaySchedule;
