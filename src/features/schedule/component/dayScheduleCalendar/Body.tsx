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

// const CoachContainer = ({
//   coachList,
//   reservationCustomer,
// }: Pick<Props, 'coachList'> & {
//   reservationCustomer: any;
//   // | SchduleLessonByStartDateEndDatePeriodData
//   // | undefined
//   // | null;
// }) => {
//   const [showRightSide, setShowRightSide] = useState<boolean>(false);

//   return (
//     <>
//       <Flex>
//         {coachList.map((el: any) => {
//           const isReservation =
//             reservationCustomer.length > 0 &&
//             el.name === reservationCustomer[0].coachName;

//           return (
//             <div
//               key={el.id}
//               className={css({
//                 width: `calc(100%/${coachList.length})`,
//                 minHeight: '20px',
//                 textAlign: 'center',
//                 borderRight: '1px solid var(--grey1000)',
//                 borderBottom: `${
//                   isReservation ? '' : '1px solid var(--grey1000)'
//                 }`,
//                 backgroundColor: `${
//                   isReservation ? `var(--${el.coachColor})` : 'var(--white100)'
//                 }`,

//                 _last: {
//                   borderRight: '1px solid var(--black100)',
//                 },

//                 cursor: isReservation ? 'pointer' : 'default',
//               })}
//               onClick={() => isReservation && setShowRightSide(true)}
//             >
//               {/*TODO 시간이 다를 때 숫자 표현해줘야 함*/}
//             </div>
//           );
//         })}
//       </Flex>
//       {showRightSide && (
//         <Portal id={'drawer'}>
//           <RightSideContainer
//             title={
//               reservationCustomer.length > 1
//                 ? '그룹 스케줄 상세정보'
//                 : '개인 스케줄 상세정보'
//             }
//             showRightSide={showRightSide}
//             setShowRightSide={setShowRightSide}
//           >
//             <ScheduleDrawer customer={reservationCustomer} />
//           </RightSideContainer>
//         </Portal>
//       )}
//     </>
//   );
// };

// const MonthContainer = ({
//   coachList,
//   monthList,
//   data,
// }: Pick<Props, 'coachList' | 'monthList'> & {
//   data: any;
//   // data:
//   //   | SchduleLessonByStartDateEndDatePeriodData
//   //   | undefined
//   //   | null;
// }) => {
//   const customerFilter: any = [];

//   return (
//     <>
//       {Array.from(monthList).map(([month, dayList]) => {
//         data.map(
//           (item: any) =>
//             Number(item.month) === month && customerFilter.push(item),
//         );

//         return (
//           <div
//             key={month}
//             className={flex({
//               width: `calc((100%/${GET_WEEK_LIST_COUNT})*${dayList.length})`,
//             })}
//           >
//             {dayList.map((day) => {
//               const reservationCustomer = customerFilter.filter(
//                 (item: any) =>
//                   Number(item.date) === day && Number(item.month) === month,
//               );

//               return (
//                 <div
//                   key={day}
//                   className={css({ width: `calc(100%/${dayList.length})` })}
//                 >
//                   <ScheduleTableBody.CoachContainer
//                     coachList={coachList}
//                     reservationCustomer={
//                       reservationCustomer ? reservationCustomer : null
//                     }
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         );
//       })}
//     </>
//   );
// };

export default DayScheduleCalendarBody;
