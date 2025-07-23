import ManageListRow from '../ListRow';
import { Modal, Portal } from '@/shared/components/index';
import ScheduleChangeModal from '../../modal/scheduleChange/ScheduleChange';
import { CustomerAllLessonListQueryData } from '@features/customer/type/customer.type';
import { Button } from '@/shared/components/index';
import { transferLessonType } from '@features/schedule/util/transfer';
import { LessonStatusCell } from './LessonStatusCell';
import RightSideContainer from '@/shared/components/layer/RightSideContainer';
import DrawerLesson from '../../drawer/Lesson';
import { useState } from 'react';
import { LessonStatus } from '@features/customer/util/lesson';

type Props = {
  data: CustomerAllLessonListQueryData[];
  showDrawer: boolean;
  onClickShowDrawerHandler: () => void;
  onCloseDrawerHandler: () => void;
  showScheduleChangeModal: boolean;
  handleShowModalClick: () => void;
  handleHideModalClick: () => void;
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
        className="flex h-7 items-center text-center p-1.5 gap-0.5 [&_div]:text-sm"
      >
        <div className="w-[10%]">상태</div>
        <div className="w-[20%]">상품명</div>
        <div className="w-[10%]">강습유형</div>
        <div className="w-[15%]">코치</div>
        <div className="w-[10%]">수강현황</div>
        <div className="w-[20%]">결제날짜</div>
        <div className="w-[20%]" />
      </div>
      <div
        className="h-[calc(100%-28px)] py-2 overflow-y-auto [&_div]:text-sm"
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
              className="cursor-default"
            >
              {LessonStatusCell(
                LessonStatus(
                  centerCoachId,
                  remainLessonCount,
                  registerAbleCount,
                ),
              )}
              <div
                className="w-[20%] truncate whitespace-nowrap overflow-hidden text-left pl-2"
              >
                {lessonName}
              </div>
              <div className="w-[10%]">
                {transferLessonType(type)}
              </div>
              <div className="w-[15%]">{coachName ?? '-'}</div>
              <div
                className="w-[10%]"
              >{`${remainLessonCount}회 / ${registerAbleCount}회`}</div>
              <div className="w-[20%]">{paymentDt}</div>
              <div className="flex w-[20%]">
                <Button
                  type="button"
                  label="수강변경"
                  className="w-[46%] bg-blue-600 text-white font-medium py-2 px-1.5 rounded-md border-0 text-xs cursor-pointer"
                  onClick={() => handleOpenScheduleChangeModalClick(item)}
                />
                <Button
                  type="button"
                  label="상세보기"
                  className="w-[46%] bg-blue-500 text-white font-medium py-2 px-1.5 rounded-md border-0 text-xs cursor-pointer"
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
            className="top-1/2"
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