import Portal from '@components/Portal';
import ManageListRow from '../ListRow';
import { CustomerAdditionalLessonListData } from '@features/customer/type/customer.type';
import RightSideContainer from '@components/layer/RightSideContainer';
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
        <div css={{ width: '15%' }}>코트</div>
        <div css={{ width: '15%' }}>코치</div>
        <div css={{ width: '30%' }}>날짜</div>
        <div css={{ width: '20%' }}>시작시간</div>
        <div css={{ width: '20%' }}>종료시간</div>
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
              <div css={{ width: '15%' }}>{courtName}</div>
              <div css={{ width: '15%' }}>{coachName}</div>
              <div
                css={{ width: '30%' }}
              >{`${originDate} -> ${additionalDate}`}</div>
              <div
                css={{ width: '20%' }}
              >{`${originStartTime} -> ${additionalStartTime}`}</div>
              <div
                css={{ width: '20%' }}
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
