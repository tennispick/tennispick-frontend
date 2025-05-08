import { CoachListData } from 'src/이전 파일들/apis/coach/coach.type';
import { GET_WEEK_LIST_COUNT } from '@/이전 파일들/features/constant/schedule';
import HeaderCoachData from './CoachData';

type Props = {
  coachList: CoachListData[];
  monthMaps: Map<string, Array<number>>;
};

const RowData = ({ coachList, monthMaps }: Props) => {
  return (
    <div className="w-[92%] flex border-b border-black100">
      {Array.from(monthMaps).map(([month, monthDateList]) => {
        const dateLength = monthDateList.length;
        const rowDataWidth = (100 / GET_WEEK_LIST_COUNT) * dateLength;
        const monthDateWidth = 100 / dateLength;

        return (
          <div
            key={month}
            className={`flex h-[calc(100%+1px)]`}
            style={{ width: `${rowDataWidth}%` }}
          >
            {monthDateList.map((date) => {
              return (
                <div key={date} style={{ width: `${monthDateWidth}%` }}>
                  <HeaderCoachData coachList={coachList} />
                  <div
                    className={`h-[50%] text-center text-sm border-t border-black100 last:border-r border-black100`}
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
