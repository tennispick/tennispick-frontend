import { useMemo } from 'react';
import {
  getTimezoneListByTime,
  transferTimeZoneToSettingLessonTime,
} from '@utils/date';
import { useRecoilState } from 'recoil';
import { userState } from '@lib/recoil/userState';
import { TransferTimeList } from '@interfaces/calendar';
import { GET_WEEK_LIST_COUNT } from '@features/constant/schedule';
import { CoachListData } from '@apis/coach/coach.type';
import { SchduleLessonByStartDateEndDatePeriodData } from '@apis/schedule/schedule.type';
import { checkOnTime } from '@features/schedule/util/time';

type LessonTimeType = Array<TransferTimeList & { isAttendance?: boolean }>;

type Props = {
  monthList: Map<number, number[]>;
  coach: CoachListData[];
  data: SchduleLessonByStartDateEndDatePeriodData[];
};

const getBusinessHours = () => {
  const openHours = 18;
  const closedHours = 24;

  return [openHours, closedHours];
};

const ScheduleTableBody = ({ monthList, coach, data }: Props) => {
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
      {lessonTimeList.map(({ startTime, endTime }) => {
        let reservationCustomer = null;
        if (data)
          reservationCustomer = data.find(
            (item) => item.startTime === startTime,
          );

        return (
          <div
            key={startTime}
            css={{ display: 'flex', minHeight: '20px', lineHeight: '19px' }}
          >
            <div
              css={{
                width: '8%',
                borderRight: '1px solid var(--black100)',
                borderBottom: '1px solid var(--grey1000)',
                fontWeight: checkOnTime(startTime) ? 600 : 400,
                backgroundColor: checkOnTime(startTime)
                  ? 'var(--grey100)'
                  : 'var(--white100)',
              }}
            >
              {startTime}
            </div>
            <div css={{ display: 'flex', width: '92%' }}>
              <ScheduleTableBody.MonthContainer
                coach={coach}
                monthList={monthList}
                reservationCustomer={reservationCustomer}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CoachContainer = ({
  coach,
  reservationCustomer,
}: Pick<Props, 'coach'> & {
  reservationCustomer:
    | SchduleLessonByStartDateEndDatePeriodData
    | undefined
    | null;
}) => {
  return (
    <div css={{ display: 'flex' }}>
      {coach.map((el: any) => {
        return (
          <div
            key={el.id}
            css={{
              width: `calc(100%/${coach.length})`,
              minHeight: '20px',
              textAlign: 'center',
              borderRight: '1px solid var(--grey1000)',
              borderBottom: `${
                reservationCustomer && el.name === reservationCustomer.coachName
                  ? ''
                  : '1px solid var(--grey1000)'
              }`,
              backgroundColor: `${
                reservationCustomer && el.name === reservationCustomer.coachName
                  ? `var(--${el.coachColor})`
                  : 'var(--white100)'
              }`,

              '&:last-child': {
                borderRight: '1px solid var(--black100)',
              },
            }}
          ></div>
        );
      })}
    </div>
  );
};

const MonthContainer = ({
  coach,
  monthList,
  reservationCustomer,
}: Pick<Props, 'coach' | 'monthList'> & {
  reservationCustomer:
    | SchduleLessonByStartDateEndDatePeriodData
    | undefined
    | null;
}) => {
  const isTargetMonth =
    reservationCustomer && Number(reservationCustomer.month);
  const isTargetDate = reservationCustomer && Number(reservationCustomer.date);

  return (
    <>
      {Array.from(monthList).map(([month, dayList]) => {
        return (
          <div
            key={month}
            css={{
              display: 'flex',
              width: `calc((100%/${GET_WEEK_LIST_COUNT})*${dayList.length})`,
            }}
          >
            {dayList.map((day) => {
              return (
                <div key={day} css={{ width: `calc(100%/${dayList.length})` }}>
                  <ScheduleTableBody.CoachContainer
                    coach={coach}
                    reservationCustomer={
                      month === isTargetMonth && day === isTargetDate
                        ? reservationCustomer
                        : null
                    }
                  />
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
