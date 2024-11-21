import { CoachListData } from 'app/src/apis/coach/coach.type';
import { ScheduleLessonByDateData } from 'app/src/apis/schedule/schedule.type';
import { GET_WEEK_LIST_COUNT } from 'app/src/features/constant/schedule';
import { css } from 'styled-system/css';
import { Flex } from 'styled-system/jsx';
import BodyDateData from './DateData';

type Props = {
  monthMaps: Map<number, number[]>;
  coachList: CoachListData[];
  data: ScheduleLessonByDateData[];
};

const RowData = ({ monthMaps, coachList, data }: Props) => {
  const filterCustomerData: ScheduleLessonByDateData[] = [];

  return (
    <Flex
      className={css({
        width: '92%',
        borderBottom: '1px solid var(--black100)',
      })}
    >
      {Array.from(monthMaps).map(([month, monthDateList]) => {
        const dateLength = monthDateList.length;
        const rowDataWidth = `calc((100% / ${GET_WEEK_LIST_COUNT}) * ${dateLength})`;
        const monthDateWidth = `calc(100% / ${dateLength})`;

        data.forEach(
          (item) =>
            Number(item.month) === month && filterCustomerData.push(item),
        );

        return (
          <Flex
            key={month}
            className={css({ width: rowDataWidth, height: 'calc(100% + 1px)' })}
          >
            {monthDateList.map((date) => {
              const reservationCustomerList = filterCustomerData.filter(
                ({ month: filterMonth, date: filterDate }) =>
                  Number(filterDate) === date && Number(filterMonth) === month,
              );

              return (
                <div key={date} className={css({ width: monthDateWidth })}>
                  <BodyDateData
                    coachList={coachList}
                    reservationCustomerList={
                      reservationCustomerList ? reservationCustomerList : []
                    }
                  />
                </div>
              );
            })}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default RowData;
