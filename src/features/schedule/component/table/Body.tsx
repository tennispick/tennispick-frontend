import { useMemo } from 'react';
import { getTimezoneListByTime, transferTimeZoneToSettingLessonTime } from '@utils/date';
import { useRecoilState } from 'recoil';
import { userState } from '@lib/recoil/userState';
import { TransferTimeList } from '@interfaces/calendar';

type LessonCustomerItemType = TransferTimeList & { isAttendance?: boolean };
type LessonTimeType = LessonCustomerItemType[];

type Props = {
  weekListCount: number;
  monthList: {[key: string]: Array<number>};
  coach: any;
}

type MonthProps = {
  weekListCount: number;
  coach: any;
  monthList: {[key: string]: Array<number>};
}

const getBusinessHours = () =>{

  const openHours = 18;
  const closedHours = 24;

  return [openHours, closedHours];
}

const ScheduleTableBody = ({ weekListCount, monthList, coach }: Props) =>{

  const [user, ] = useRecoilState(userState);

  const { lesson_setting_time: lessonSettingTime , business_hours, business_end_hours } = user;
  const [ openHours, closedHours ] = getBusinessHours();

  const { timeList } = getTimezoneListByTime(openHours, closedHours);
  const lessonTimeList: LessonTimeType = useMemo(() => transferTimeZoneToSettingLessonTime(timeList, lessonSettingTime), []);

  return(
    <div css={{ fontSize: '0.85rem' }}>
    </div>
  )
};

export default ScheduleTableBody