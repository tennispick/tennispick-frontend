import { CoachListData } from '@apis/coach/coach.type';
import { ScheduleLessonByDateData } from '@apis/schedule/schedule.type';
import Portal from '@components/Portal';
import RightSideContainer from '@components/layer/RightSideContainer';
import { useState } from 'react';
import { css } from 'styled-system/css';
import { Flex } from 'styled-system/jsx';
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
      <Flex className={css({ height: '100%' })}>
        {coachList.map(({ id, name, coachColor }) => {
          const isReservation =
            reservationCount > 0 &&
            reservationCustomerList.some(({ coachId }) => coachId === id);

          return (
            <Flex
              key={id}
              justifyContent="center"
              alignItems="center"
              className={css({
                width: `calc(100% / ${coachCount})`,
                height: '100%',
                textAlign: 'center',
                borderRight: '1px solid var(--black100)',
                borderBottom: '1px solid var(--grey1000)',
                fontSize: '0.625rem',
                color: `${
                  isReservation ? 'var(--white100)' : 'var(--black100)'
                }`,
                cursor: isReservation ? 'pointer' : 'default',

                backgroundColor: `${
                  isReservation ? `var(--${coachColor})` : 'var(--white100)'
                }`,
              })}
              onClick={() => handleShowDrawer(isReservation)}
            >
              {isReservation && name.charAt(0)}
            </Flex>
          );
        })}
      </Flex>
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
