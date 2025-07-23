import { CoachListData } from '@apis/coach/coach.type';
import { GET_WEEK_LIST_COUNT } from '@features/constant/schedule';
import HeaderCoachData from './CoachData';

type Props = {
  coachList: CoachListData[];
  monthMaps: Map<string, Array<number>>;
};

const RowData = ({ coachList, monthMaps }: Props) => {
  return (
    <div className="flex w-[92%] border-b border-black">
      {Array.from(monthMaps).map(([month, monthDateList]) => {
        const dateLength = monthDateList.length;
        const rowDataWidth = `calc((100% / ${GET_WEEK_LIST_COUNT}) * ${dateLength})`;
        const monthDateWidth = `calc(100% / ${dateLength})`;

        return (
          <div key={month} className={`flex h-[calc(100%+1px)]`} style={{ width: rowDataWidth }}>
            {monthDateList.map((date) => {
              return (
                <div key={date} className={`w-full`} style={{ width: monthDateWidth }}>
                  <HeaderCoachData coachList={coachList} />
                  <div
                    className={
                      "h-1/2 text-sm border-t border-black flex items-center justify-center " +
                      "last:border-r last:border-black"
                    }
                  >{`${month}/${date}`}</div>
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