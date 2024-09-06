import DayScheduleCalendarHeader from './dayScheduleCalendar/header/Header';
import { STRING_WEEK_LIST } from '../constants/schedule';
import Loading from '@components/common/Loading';
import { CoachListData } from '@apis/coach/coach.type';
import { css } from 'styled-system/css';
import DayScheduleCalendarBody from './dayScheduleCalendar/Body';

type Props = {
  timeTableMapList: Map<string, Map<number, Array<number>>>;
  coachList: CoachListData[];
  data: any;
};

const ScheduleTimeTable = ({ timeTableMapList, coachList, data }: Props) => {
  if (!data) return <Loading />;

  return (
    <section
      className={css({
        height: 'calc(100% - 40px)',
        overflowY: 'scroll',
      })}
    >
      {Array.from(timeTableMapList).map(([key, monthMapList]) => {
        const weekKrIndex = STRING_WEEK_LIST.findIndex((week) => week === key);
        return (
          <div
            key={key}
            className={css({
              textAlign: 'center',
              width: '100%',
              margin: '0 0 24px 0',
              borderTop: '1px solid var(--black100)',
              borderLeft: '1px solid var(--black100)',
            })}
          >
            <DayScheduleCalendarHeader
              weekKrIndex={weekKrIndex}
              monthList={monthMapList}
              coachList={coachList}
            />
            <DayScheduleCalendarBody
              monthList={monthMapList}
              coachList={coachList}
              data={data}
            />
          </div>
        );
      })}
    </section>
  );
};

export default ScheduleTimeTable;
