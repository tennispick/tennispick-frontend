import { CoachListData } from 'src/이전 파일들/apis/coach/coach.type';
import { ScheduleLessonByDateData } from 'src/이전 파일들/apis/schedule/schedule.type';
import Portal from 'src/이전 파일들/components/Portal';
import RightSideContainer from 'src/이전 파일들/components/layer/RightSideContainer';
import { useState } from 'react';
import ScheduleDrawer from '../../Drawer';
import { cn } from 'src/이전 파일들/lib/utils';

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
              className={cn(
                'flex h-full justify-center items-center text-center border-r border-black100 border-b border-grey1000 text-sm cursor-pointer',
                isReservation
                  ? `bg-[${coachColor}] text-white100 cursor-pointer`
                  : 'bg-[#FFFFFF] text-black cursor-default',
              )}
              style={{ width: `${100 / coachCount}%` }}
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
