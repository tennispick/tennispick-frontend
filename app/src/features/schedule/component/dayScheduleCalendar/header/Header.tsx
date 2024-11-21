import { STRING_WEEK_LIST_KR } from 'app/src/features/schedule/constants/schedule';
import { CoachListData } from 'app/src/apis/coach/coach.type';
import { flex } from 'styled-system/patterns';
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
    <div className={flex({ width: '100%' })}>
      <RowHeader dateKr={STRING_WEEK_LIST_KR[weekKrIndex]} />
      <RowData coachList={coachList} monthMaps={monthList} />
    </div>
  );
};

export default DayScheduleCalendarHeader;
