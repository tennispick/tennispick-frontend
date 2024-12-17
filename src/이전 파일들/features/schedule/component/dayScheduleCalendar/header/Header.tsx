import { STRING_WEEK_LIST_KR } from '@/이전 파일들/features/schedule/constants/schedule';
import { CoachListData } from 'src/이전 파일들/apis/coach/coach.type';
import RowHeader from './RowHeader';
import RowData from './RowData';

type Props = {
  weekKrIndex: number;
  monthList: any;
  coachList: CoachListData[];
};

const DayScheduleCalendarHeader = ({
  weekKrIndex,
  monthList,
  coachList,
}: Props) => {
  return (
    <div className="flex w-full">
      <RowHeader dateKr={STRING_WEEK_LIST_KR[weekKrIndex]} />
      <RowData coachList={coachList} monthMaps={monthList} />
    </div>
  );
};

export default DayScheduleCalendarHeader;
