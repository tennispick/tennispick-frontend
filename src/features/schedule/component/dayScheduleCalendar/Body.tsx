import {
  getTimezoneListByTime,
  transferTimeZoneToSettingLessonTime,
} from '@utils/date';
import { useRecoilState } from 'recoil';
import { userState } from '@lib/recoil/userState';
import { TransferTimeList } from '@interfaces/calendar';
import { CoachListData } from '@apis/coach/coach.type';
import { ScheduleLessonByDateData } from '@apis/schedule/schedule.type';

import { css } from 'styled-system/css';
import { Flex } from 'styled-system/jsx';
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
    <div className={css({ width: '100%' })}>
      {lessonTimeList.map(({ startTime }) => {
        const filterStartTimeList = data.filter(
          ({ startTime: filterStartTime }) => filterStartTime === startTime,
        );

        return (
          <Flex key={startTime}>
            <RowHeader startTime={startTime} />
            <RowData
              monthMaps={monthList}
              coachList={coachList}
              data={filterStartTimeList}
            />
          </Flex>
        );
      })}
    </div>
  );
};

export default DayScheduleCalendarBody;
