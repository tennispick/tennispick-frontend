import DayScheduleCalendarHeader from './dayScheduleCalendar/header/Header';
import { STRING_WEEK_LIST } from '../constants/schedule';
import { CoachListData } from 'src/이전 파일들/apis/coach/coach.type';
import DayScheduleCalendarBody from './dayScheduleCalendar/Body';
import { TenSpinner } from '@/shared/ui/TenSpinner';

type Props = {
  timeTableMapList: Map<string, Map<number, Array<number>>>;
  coachList: CoachListData[];
  data: any;
};

const ScheduleTimeTable = ({ timeTableMapList, coachList, data }: Props) => {
  if (!data) return <TenSpinner />;

  return (
    <section className="h-[calc(100%-40px)] overflow-y-scroll">
      {Array.from(timeTableMapList).map(([key, monthMapList]) => {
        const weekKrIndex = STRING_WEEK_LIST.findIndex((week) => week === key);
        return (
          <div
            key={key}
            className="text-center w-full mb-4 border-t border-black100 border-l"
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
