import { CoachListData } from '@apis/coach/coach.type';
import { ScheduleLessonByDateData } from '@apis/schedule/schedule.type';
import Portal from '@/shared/components/Portal';
import RightSideContainer from '@/shared/components/layer/RightSideContainer';
import { useState } from 'react';
import ScheduleDrawer from '../../Drawer';

type Props = {
  coachList: CoachListData[];
  reservationCustomerList: ScheduleLessonByDateData[];
};

const BodyDateData = ({ coachList, reservationCustomerList }: Props) => {
  const coachCount = coachList.length;
  const reservationCount = reservationCustomerList.length;

  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  const handleShowDrawer = (isReservation: boolean) =>
    isReservation && setShowDrawer(true);

  return (
    <>
      <div className="flex h-full">
        {coachList.map(({ id, name, coachColor }) => {
          const isReservation =
            reservationCount > 0 &&
            reservationCustomerList.some(({ coachId }) => coachId === id);

          return (
            <div
              key={id}
              className={`flex justify-center items-center text-center text-xs border-r border-black border-b border-gray-900 ${isReservation ? 'cursor-pointer' : 'cursor-default'}`}
              style={{
                width: `calc(100% / ${coachCount})`,
                backgroundColor: isReservation ? `var(--${coachColor})` : 'white',
                color: isReservation ? 'white' : 'black',
              }}
              onClick={() => handleShowDrawer(isReservation)}
            >
              {isReservation && name.charAt(0)}
            </div>
          );
        })}
      </div>
      {showDrawer && (
        <Portal id={'drawer'}>
          <RightSideContainer
            title={
              reservationCount > 1
                ? '그룹 스케줄 상세정보'
                : '개인 스케줄 상세정보'
            }
            showRightSide={showDrawer}
            setShowRightSide={setShowDrawer}
          >
            <ScheduleDrawer customer={reservationCustomerList} />
          </RightSideContainer>
        </Portal>
      )}
    </>
  );
};

export default BodyDateData;