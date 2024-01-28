import { useMemo } from 'react';
import {
  getTimezoneListByTime,
  transferTimeZoneToSettingLessonTime,
} from '@utils/date';
import { useRecoilState } from 'recoil';
import { userState } from '@lib/recoil/userState';
import { TransferTimeList } from '@interfaces/calendar';

type LessonCustomerItemType = TransferTimeList & { isAttendance?: boolean };
type LessonTimeType = LessonCustomerItemType[];

type Props = {
  weekListCount: number;
  monthList: { [key: string]: Array<number> };
  coach: any;
};

type MonthProps = {
  weekListCount: number;
  coach: any;
  monthList: { [key: string]: Array<number> };
};

const getBusinessHours = () => {
  const openHours = 18;
  const closedHours = 24;

  return [openHours, closedHours];
};

const ScheduleTableBody = ({ weekListCount, monthList, coach }: Props) => {
  const [user] = useRecoilState(userState);

  const { lesson_setting_time: lessonSettingTime } = user;
  const [openHours, closedHours] = getBusinessHours();

  const { timeList } = getTimezoneListByTime(openHours, closedHours);
  const lessonTimeList: LessonTimeType = useMemo(
    () => transferTimeZoneToSettingLessonTime(timeList, lessonSettingTime),
    [],
  );

  return (
    <div css={{ fontSize: '0.85rem' }}>
      {lessonTimeList.map((item) => {
        return (
          <div
            key={item.startTime}
            css={{ display: 'flex', minHeight: '20px', lineHeight: '19px' }}
          >
            <div
              css={{
                width: '8%',
                borderRight: '1px solid var(--black100)',
                borderBottom: '1px solid var(--grey1000)',
              }}
            >
              {item.startTime}
            </div>
            <div css={{ display: 'flex', width: '92%' }}>
              <ScheduleTableBody.MonthContainer
                weekListCount={weekListCount}
                coach={coach}
                monthList={monthList}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CoachContainer = ({ coach }: any) => {
  return (
    <div css={{ display: 'flex' }}>
      {coach.map((el: any) => (
        <div
          key={el.id}
          css={{
            width: `calc(100%/${coach.length})`,
            minHeight: '20px',
            textAlign: 'center',
            borderRight: '1px solid var(--grey1000)',
            borderBottom: '1px solid var(--grey1000)',

            '&:last-child': {
              borderRight: '1px solid var(--black100)',
            },
          }}
        ></div>
        // {el.name.charAt(0)}
      ))}
    </div>
  );
};

const MonthContainer = ({ weekListCount, coach, monthList }: MonthProps) => {
  return (
    <>
      {Object.keys(monthList).map((month) => {
        return (
          <div
            key={month}
            css={{
              display: 'flex',
              width: `calc((100%/${weekListCount})*${monthList[month].length})`,
            }}
          >
            {monthList[month].map((day) => {
              return (
                <div key={day} css={{ width: `calc(100%/${month.length})` }}>
                  <ScheduleTableBody.CoachContainer coach={coach} />
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

ScheduleTableBody.CoachContainer = CoachContainer;
ScheduleTableBody.MonthContainer = MonthContainer;
export default ScheduleTableBody;
