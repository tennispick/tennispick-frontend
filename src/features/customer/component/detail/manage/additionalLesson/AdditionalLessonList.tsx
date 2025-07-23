import Portal from '@/shared/components/Portal';
import ManageListRow from '../ListRow';
import { CustomerAdditionalLessonListData } from '@features/customer/type/customer.type';
import RightSideContainer from '@/shared/components/layer/RightSideContainer';
import DrawerAdditionalLesson from '../../drawer/AdditionalLesson';
import { useState } from 'react';

type Props = {
  data: CustomerAdditionalLessonListData[];
  showDrawer: boolean;
  onClickShowDrawerHandler: () => void;
  onCloseDrawerHandler: () => void;
};

const AdditionalLessonList = ({
  data,
  showDrawer,
  onClickShowDrawerHandler,
  onCloseDrawerHandler,
}: Props) => {
  const [additionalLessonItem, setAdditionalLessonItem] = useState(
    {} as CustomerAdditionalLessonListData,
  );

  const onClickRowHandler = (item: CustomerAdditionalLessonListData) => {
    setAdditionalLessonItem(item);
    onClickShowDrawerHandler();
  };

  return (
    <>
      <div
        className="flex h-7 items-center text-center p-1.5 gap-0.5 [&_div]:text-sm"
      >
        <div className="w-[12%]">코트</div>
        <div className="w-[12%]">코치</div>
        <div className="w-[33%]">날짜</div>
        <div className="w-[20%]">시작시간</div>
        <div className="w-[20%]">종료시간</div>
      </div>
      <div
        className="h-[calc(100%-28px)] py-2 overflow-y-auto [&_div]:text-sm"
      >
        {data.map((item, index) => {
          const {
            id,
            courtName,
            coachName,
            originDate,
            originStartTime,
            originEndTime,
            additionalDate,
            additionalStartTime,
            additionalEndTime,
          } = item;

          return (
            <ManageListRow
              key={`${index}-${id}`}
              onClick={() => onClickRowHandler(item)}
            >
              <div
                className="w-[12%] truncate whitespace-nowrap overflow-hidden"
              >
                {courtName}
              </div>
              <div
                className="w-[12%] truncate whitespace-nowrap overflow-hidden"
              >
                {coachName}
              </div>
              <div
                className="w-[36%]"
              >{`${originDate} -> ${additionalDate}`}</div>
              <div
                className="w-[20%]"
              >{`${originStartTime} -> ${additionalStartTime}`}</div>
              <div
                className="w-[20%]"
              >{`${originEndTime} -> ${additionalEndTime}`}</div>
            </ManageListRow>
          );
        })}
      </div>
      {showDrawer && (
        <Portal id="drawer">
          <RightSideContainer
            title="보강 상세보기"
            showRightSide={showDrawer}
            setShowRightSide={onCloseDrawerHandler}
          >
            <DrawerAdditionalLesson item={additionalLessonItem} />
          </RightSideContainer>
        </Portal>
      )}
    </>
  );
};

export default AdditionalLessonList;