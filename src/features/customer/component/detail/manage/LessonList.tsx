import ManageListRow from './ListRow';
import { Modal, Portal } from '@components/index';
import ScheduleChangeModal from '../modal/scheduleChange/ScheduleChange';
import { CustomerAllLessonListQueryData } from '@features/customer/type/customer.type';
import { Button } from '@components/index';
import { transferLessonType } from '@features/schedule/util/transfer';
import { LessonStatusCell } from './LessonStatusCell';
import RightSideContainer from '@components/layer/RightSideContainer';
import DrawerLesson from '../drawer/Lesson';
import { useState } from 'react';
import { LessonStatus } from '@features/customer/util/lesson';

type Props = {
  data: CustomerAllLessonListQueryData[];
  showDrawer: boolean;
  onClickShowDrawerHandler: () => void;
  onCloseDrawerHandler: () => void;
  showScheduleChangeModal: boolean;
  onClickShowModalHandler: () => void;
  onClickCloseModalHandler: () => void;
};

const ButtonStyle = {
  color: 'var(--white100)',
  fontWeight: '500',
  padding: '8px 0',
  borderRadius: '6px',
  border: 0,
  fontSize: '0.875rem',
  cursor: 'pointer',
};

const ManageLessonList = ({
  data,
  showDrawer,
  onClickShowDrawerHandler,
  onCloseDrawerHandler,
  showScheduleChangeModal,
  onClickShowModalHandler,
  onClickCloseModalHandler
}: Props) => {
  const [lessonItem, setLessonItem] = useState(
    {} as CustomerAllLessonListQueryData,
  );

  const onClickScheduleChangeShowModalHandler = (item: CustomerAllLessonListQueryData) => {
    setLessonItem(item);
    onClickShowModalHandler();
  };

  const onClickLessonRowHandler = (item: CustomerAllLessonListQueryData) => {
    setLessonItem(item);
    onClickShowDrawerHandler();
  };

  return (
    <>
      <div
        css={{
          height: '28px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          fontSize: '0.9rem',
          padding: '6px 8px',
          gap: '2px',
        }}
      >
        <div css={{ width: '10%' }}>상태</div>
        <div css={{ width: '20%' }}>상품명</div>
        <div css={{ width: '8%' }}>강습유형</div>
        <div css={{ width: '15%' }}>코치</div>
        <div css={{ width: '10%' }}>수강현황</div>
        <div css={{ width: '20%' }}>결제날짜</div>
        <div css={{ width: '22%' }} />
      </div>
      <div
        css={{
          height: 'calc(100% - 28px)',
          padding: '8px 0',
          overflowY: 'auto',
          fontSize: '0.9rem',
        }}
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
              css={{
                cursor: 'default',
              }}
            >
              {LessonStatusCell(
                LessonStatus(
                  centerCoachId,
                  remainLessonCount,
                  registerAbleCount,
                ),
              )}
              <div css={{ width: '20%' }}>{lessonName}</div>
              <div css={{ width: '8%' }}>{transferLessonType(type)}</div>
              <div css={{ width: '15%' }}>{coachName ?? '-'}</div>
              <div
                css={{ width: '10%' }}
              >{`${remainLessonCount}회 / ${registerAbleCount}회`}</div>
              <div css={{ width: '20%' }}>{paymentDt}</div>
              <div css={{ width: '22%', display: 'flex' }}>
                <Button
                  type='button'
                  label="수강변경"
                  css={{
                    width: '46%',
                    backgroundColor: 'var(--business-active-color)',
                    margin: '0 4% 0 4%',
                    ...ButtonStyle,
                  }}
                  onClick={() => onClickScheduleChangeShowModalHandler(item)}
                />
                <Button
                  type='button'
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
            showModal={showScheduleChangeModal}
            setShowModal={onClickCloseModalHandler}
            css={{
              top: '45%'
            }}
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
