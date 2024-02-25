import ScheduleTableHeader from './table/Header';
import { STRING_WEEK_LIST } from '../constants/schedule';
import dynamic from 'next/dynamic';
import Loading from '@components/common/Loading';
import { CoachListData } from '@apis/coach/coach.type';
const ScheduleTableBody = dynamic(() => import('./table/Body'), {
  loading: () => <Loading />,
  ssr: false,
});

type Props = {
  timeTableMapList: Map<string, Map<number, Array<number>>>;
  coach: CoachListData[];
  data: any;
};

const ScheduleTimeTable = ({ timeTableMapList, coach, data }: Props) => {
  if (!data) return <Loading />;

  return (
    <section
      css={{
        height: 'calc(100% - 40px)',
        overflowY: 'scroll',
        padding: '0 16px 0 0',
      }}
    >
      {Array.from(timeTableMapList).map(([key, monthMapList]) => {
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
              weekKrIndex={weekKrIndex}
              monthList={monthMapList}
              coach={coach}
            />
            <ScheduleTableBody
              monthList={monthMapList}
              coach={coach}
              data={data}
            />
          </div>
        );
      })}
    </section>
  );
};

export default ScheduleTimeTable;
