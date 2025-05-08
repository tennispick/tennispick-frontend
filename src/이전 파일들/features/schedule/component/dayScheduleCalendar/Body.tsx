import {
  getTimezoneListByTime,
  transferTimeZoneToSettingLessonTime,
} from 'src/이전 파일들/utils/date';
import { useRecoilState } from 'recoil';
import { userState } from 'src/이전 파일들/lib/recoil/userState';
import { TransferTimeList } from 'src/이전 파일들/interfaces/calendar';
import { CoachListData } from 'src/이전 파일들/apis/coach/coach.type';
import { ScheduleLessonByDateData } from 'src/이전 파일들/apis/schedule/schedule.type';

import RowHeader from './body/RowHeader';
import RowData from './body/RowData';

type LessonTimeType = Array<TransferTimeList & { isAttendance?: boolean }>;

type Props = {
  monthList: Map<number, number[]>;
  coachList: CoachListData[];
  data: ScheduleLessonByDateData[];
};

const getBusinessHours = () => {
  const openHours = 18;
  const closedHours = 24;

  return [openHours, closedHours];
};

const DayScheduleCalendarBody = ({ monthList, coachList, data }: Props) => {
  const [user] = useRecoilState(userState);

  const { lesson_setting_time: lessonSettingTime } = user;
  const [openHours, closedHours] = getBusinessHours();

  const { timeList } = getTimezoneListByTime(openHours, closedHours);

  const lessonTimeList: LessonTimeType = transferTimeZoneToSettingLessonTime(
    timeList,
    lessonSettingTime,
  );

  return (
    <div className="w-full">
      {lessonTimeList.map(({ startTime }) => {
        const filterStartTimeList = data.filter(
          ({ startTime: filterStartTime }) => filterStartTime === startTime,
        );

        return (
          <div key={startTime} className="flex">
            <RowHeader startTime={startTime} />
            <RowData
              monthMaps={monthList}
              coachList={coachList}
              data={filterStartTimeList}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DayScheduleCalendarBody;
