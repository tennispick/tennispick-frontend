import { CoachListData } from '@apis/coach/coach.type';
import { ScheduleLessonByDateData } from '@apis/schedule/schedule.type';
import { GET_WEEK_LIST_COUNT } from '@features/constant/schedule';
import BodyDateData from './DateData';

type Props = {
  monthMaps: Map<number, number[]>;
  coachList: CoachListData[];
  data: ScheduleLessonByDateData[];
};

const RowData = ({ monthMaps, coachList, data }: Props) => {
  const filterCustomerData: ScheduleLessonByDateData[] = [];

  return (
    <div className="flex w-[92%] border-b border-black">
      {Array.from(monthMaps).map(([month, monthDateList]) => {
        const dateLength = monthDateList.length;
        const rowDataWidth = `calc((100% / ${GET_WEEK_LIST_COUNT}) * ${dateLength})`;
        const monthDateWidth = `calc(100% / ${dateLength})`;

        data.forEach(
          (item) =>
            Number(item.month) === month && filterCustomerData.push(item),
        );

        return (
          <div
            key={month}
            className={`flex h-[calc(100%+1px)]`}
            style={{ width: rowDataWidth }}
          >
            {monthDateList.map((date) => {
              const reservationCustomerList = filterCustomerData.filter(
                ({ month: filterMonth, date: filterDate }) =>
                  Number(filterDate) === date && Number(filterMonth) === month,
              );

              return (
                <div
                  key={date}
                  className={`w-full`}
                  style={{ width: monthDateWidth }}
                >
                  <BodyDateData
                    coachList={coachList}
                    reservationCustomerList={
                      reservationCustomerList ? reservationCustomerList : []
                    }
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default RowData;
