import { useMemo, useState } from 'react';
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

import { DetailCourt, Portal } from '@components/index';
import RightSideContainer from '@components/layer/RightSideContainer';
import ScheduleDrawer from '../Drawer';

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
        const filterstartTimeList = data.filter(
          (item: any) => item.startTime === startTime,
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
                data={filterstartTimeList}
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
  reservationCustomer: any;
  // | SchduleLessonByStartDateEndDatePeriodData
  // | undefined
  // | null;
}) => {
  const [showRightSide, setShowRightSide] = useState<boolean>(false);

  return (
    <>
      <div css={{ display: 'flex' }}>
        {coach.map((el: any) => {
          const isReservation =
            reservationCustomer.length > 0 &&
            el.name === reservationCustomer[0].coachName;

          return (
            <div
              key={el.id}
              css={{
                width: `calc(100%/${coach.length})`,
                minHeight: '20px',
                textAlign: 'center',
                borderRight: '1px solid var(--grey1000)',
                borderBottom: `${
                  isReservation ? '' : '1px solid var(--grey1000)'
                }`,
                backgroundColor: `${
                  isReservation ? `var(--${el.coachColor})` : 'var(--white100)'
                }`,

                '&:last-child': {
                  borderRight: '1px solid var(--black100)',
                },

                cursor: isReservation ? 'pointer' : 'default',
              }}
              onClick={() => isReservation && setShowRightSide(true)}
            >
              {/*TODO 시간이 다를 때 숫자 표현해줘야 함*/}
            </div>
          );
        })}
      </div>
      {showRightSide && (
        <Portal id={'rightSide'}>
          <RightSideContainer
            title={'스케줄 상세정보'}
            showRightSide={showRightSide}
            setShowRightSide={setShowRightSide}
          >
            <ScheduleDrawer customer={reservationCustomer} />
          </RightSideContainer>
        </Portal>
      )}
    </>
  );
};

const MonthContainer = ({
  coach,
  monthList,
  data,
}: Pick<Props, 'coach' | 'monthList'> & {
  data: any;
  // data:
  //   | SchduleLessonByStartDateEndDatePeriodData
  //   | undefined
  //   | null;
}) => {
  const customerFilter: any = [];

  return (
    <>
      {Array.from(monthList).map(([month, dayList]) => {
        data.map(
          (item: any) =>
            (Number(item.month) === month) && customerFilter.push(item),
        );

        return (
          <div
            key={month}
            css={{
              display: 'flex',
              width: `calc((100%/${GET_WEEK_LIST_COUNT})*${dayList.length})`,
            }}
          >
            {dayList.map((day) => {
              const reservationCustomer = customerFilter.filter(
                (item: any) =>
                  Number(item.date) === day && Number(item.month) === month,
              );

              return (
                <div key={day} css={{ width: `calc(100%/${dayList.length})` }}>
                  <ScheduleTableBody.CoachContainer
                    coach={coach}
                    reservationCustomer={
                      reservationCustomer ? reservationCustomer : null
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
