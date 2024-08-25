import ManageListRow from '../ListRow';
import { Modal, Portal } from '@components/index';
import ScheduleChangeModal from '../../modal/scheduleChange/ScheduleChange';
import { CustomerAllLessonListQueryData } from '@features/customer/type/customer.type';
import { Button } from '@components/index';
import { transferLessonType } from '@features/schedule/util/transfer';
import { LessonStatusCell } from './LessonStatusCell';
import RightSideContainer from '@components/layer/RightSideContainer';
import DrawerLesson from '../../drawer/Lesson';
import { useState } from 'react';
import { LessonStatus } from '@features/customer/util/lesson';
import { flex } from 'styled-system/patterns';
import { css } from 'styled-system/css';

type Props = {
  data: CustomerAllLessonListQueryData[];
  showDrawer: boolean;
  onClickShowDrawerHandler: () => void;
  onCloseDrawerHandler: () => void;
  showScheduleChangeModal: boolean;
  handleShowModalClick: () => void;
  handleHideModalClick: () => void;
};

const ButtonStyle = {
  color: 'var(--white100)',
  fontWeight: 500,
  padding: '8px 4px',
  borderRadius: '6px',
  border: 0,
  fontSize: '0.725rem',
  cursor: 'pointer',
};

const ManageLessonList = ({
  data,
  showDrawer,
  onClickShowDrawerHandler,
  onCloseDrawerHandler,
  showScheduleChangeModal,
  handleShowModalClick,
  handleHideModalClick,
}: Props) => {
  const [lessonItem, setLessonItem] = useState(
    {} as CustomerAllLessonListQueryData,
  );

  const handleOpenScheduleChangeModalClick = (
    item: CustomerAllLessonListQueryData,
  ) => {
    setLessonItem(item);
    handleShowModalClick();
  };

  const onClickLessonRowHandler = (item: CustomerAllLessonListQueryData) => {
    setLessonItem(item);
    onClickShowDrawerHandler();
  };

  return (
    <>
      <div
        className={flex({
          height: '28px',
          alignItems: 'center',
          textAlign: 'center',
          padding: '6px 8px',
          gap: '2px',

          '& div': {
            fontSize: '0.875rem',
          },
        })}
      >
        <div className={css({ width: '10%' })}>상태</div>
        <div className={css({ width: '20%' })}>상품명</div>
        <div className={css({ width: '10%' })}>강습유형</div>
        <div className={css({ width: '15%' })}>코치</div>
        <div className={css({ width: '10%' })}>수강현황</div>
        <div className={css({ width: '20%' })}>결제날짜</div>
        <div className={css({ width: '20%' })} />
      </div>
      <div
        className={css({
          height: 'calc(100% - 28px)',
          padding: '8px 0',
          overflowY: 'auto',

          '& div': {
            fontSize: '0.875rem',
          },
        })}
      >
        {data.map((item, index) => {
          const {
            id,
            centerCoachId,
            lessonName,
            type,
            coachName,
            remainLessonCount,
            registerAbleCount,
            paymentDt,
          } = item;

          return (
            <ManageListRow
              key={`${index}-${id}`}
              className={css({ cursor: 'default' })}
            >
              {LessonStatusCell(
                LessonStatus(
                  centerCoachId,
                  remainLessonCount,
                  registerAbleCount,
                ),
              )}
              <div
                className={css({
                  width: '20%',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textAlign: 'left',
                  padding: '0 0 0 8px',
                })}
              >
                {lessonName}
              </div>
              <div className={css({ width: '10%' })}>
                {transferLessonType(type)}
              </div>
              <div className={css({ width: '15%' })}>{coachName ?? '-'}</div>
              <div
                className={css({ width: '10%' })}
              >{`${remainLessonCount}회 / ${registerAbleCount}회`}</div>
              <div className={css({ width: '20%' })}>{paymentDt}</div>
              <div className={flex({ width: '20%' })}>
                <Button
                  type="button"
                  label="수강변경"
                  css={{
                    width: '46%',
                    backgroundColor: 'var(--business-active-color)',
                    margin: '0 4% 0 4%',
                    ...ButtonStyle,
                  }}
                  onClick={() => handleOpenScheduleChangeModalClick(item)}
                />
                <Button
                  type="button"
                  label="상세보기"
                  css={{
                    width: '46%',
                    backgroundColor: 'var(--business-color)',
                    ...ButtonStyle,
                  }}
                  onClick={() => onClickLessonRowHandler(item)}
                />
              </div>
            </ManageListRow>
          );
        })}
      </div>
      {showScheduleChangeModal && (
        <Portal id="portal">
          <Modal
            title="강습일정 변경"
            setOpenModal={handleHideModalClick}
            css={{ top: '47.5%' }}
          >
            <ScheduleChangeModal
              customerId={lessonItem.customerId}
              customerLessonId={lessonItem.id}
            />
          </Modal>
        </Portal>
      )}
      {showDrawer && (
        <Portal id="drawer">
          <RightSideContainer
            title="수강 상세보기"
            showRightSide={showDrawer}
            setShowRightSide={onCloseDrawerHandler}
          >
            <DrawerLesson data={lessonItem} />
          </RightSideContainer>
        </Portal>
      )}
    </>
  );
};

export default ManageLessonList;
