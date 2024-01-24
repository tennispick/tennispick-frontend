import { STRING_WEEK_LIST } from "@features/schedule/constants/schedule";
import { WeekListToUnionType } from "@features/layer/scheduleByDate/type/schedule";
import ScheduleTableHeader from "./table/Header";
import ScheduleTableBody from "./table/Body";

type Props = {
  weekListCount: number;
  lists: WeekListToUnionType<{[key: string]: Array<number>}>;
  coach: any;
}

const ScheduleDate = ({ weekListCount, lists, coach } : Props) =>{

  return(
    <section css={{ height: 'calc(100% - 40px)',overflowY: 'scroll', padding: '0 16px 0 0' }}>
      {Object.keys(lists).map((weekDayEn) => {

        const yearLists = lists[weekDayEn];
        const weekKrIndex = STRING_WEEK_LIST.findIndex((week) => week === weekDayEn);

        return (
          <div key={weekDayEn} css={{ textAlign: 'center', width: '100%', margin: '0 0 24px 0', border: '1px solid var(--black100)', borderRight: 0 }}>
            <ScheduleTableHeader
              weekListCount={weekListCount}
              weekKrIndex={weekKrIndex}
              dayYearList={yearLists}
              coach={coach}
            />
            <ScheduleTableBody
              weekListCount={weekListCount}
              dayYearList={yearLists}
              coach={coach}
            />
          </div>
        );
      })}
    </section>
  )
}

export default ScheduleDate;