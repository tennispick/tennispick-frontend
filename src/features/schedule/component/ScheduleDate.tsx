import ScheduleTableHeader from './table/Header';
import { STRING_WEEK_LIST } from '../constants/schedule';
import dynamic from 'next/dynamic';
const ScheduleTableBody = dynamic(() => import('./table/Body'), {
  ssr: false,
});

type Props = {
  weekListCount: number;
  lists: Map<string, Map<string, Array<number>>>;
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
      {Array.from(lists).map(([key, monthMapList]) => {
        const weekKrIndex = STRING_WEEK_LIST.findIndex((week) => week === key);
        return (
          <div
            key={key}
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
              monthList={monthMapList}
              coach={coach}
            />
            <ScheduleTableBody
              weekListCount={weekListCount}
              monthList={monthMapList}
              coach={coach}
            />
          </div>
        );
      })}
    </section>
  );
};

export default ScheduleDate;
