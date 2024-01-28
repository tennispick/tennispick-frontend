import ScheduleTableHeader from './table/Header';
import { CalendarDayList } from '../type/calendar.type';
import { STRING_WEEK_LIST } from '../constants/schedule';
import dynamic from 'next/dynamic';
const ScheduleTableBody = dynamic(() => import('./table/Body'), {
  ssr: false,
});

type Props = {
  weekListCount: number;
  lists: CalendarDayList<number>;
  coach: any;
};

const ScheduleDate = ({ weekListCount, lists, coach }: Props) => {
  return (
    <section
      css={{
        height: 'calc(100% - 40px)',
        overflowY: 'scroll',
        padding: '0 16px 0 0',
      }}
    >
      {Object.keys(lists).map((weekDayEn) => {
        const monthList = lists[weekDayEn];
        const weekKrIndex = STRING_WEEK_LIST.findIndex(
          (week) => week === weekDayEn,
        );

        return (
          <div
            key={weekDayEn}
            css={{
              textAlign: 'center',
              width: '100%',
              margin: '0 0 24px 0',
              border: '1px solid var(--black100)',
              borderRight: 0,
            }}
          >
            <ScheduleTableHeader
              weekListCount={weekListCount}
              weekKrIndex={weekKrIndex}
              monthList={monthList}
              coach={coach}
            />
            <ScheduleTableBody
              weekListCount={weekListCount}
              monthList={monthList}
              coach={coach}
            />
          </div>
        );
      })}
      ;
    </section>
  );
};

export default ScheduleDate;
