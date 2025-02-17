import Portal from '@components/Portal';
import ManageListRow from '../ListRow';
import { CustomerAdditionalLessonListData } from '@features/customer/type/customer.type';
import RightSideContainer from '@components/layer/RightSideContainer';
import DrawerAdditionalLesson from '../../drawer/AdditionalLesson';
import { useState } from 'react';
import { flex } from 'styled-system/patterns';
import { css } from 'styled-system/css';

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
        <div className={css({ width: '12%' })}>코트</div>
        <div className={css({ width: '12%' })}>코치</div>
        <div className={css({ width: '33%' })}>날짜</div>
        <div className={css({ width: '20%' })}>시작시간</div>
        <div className={css({ width: '20%' })}>종료시간</div>
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
                className={css({
                  width: '12%',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                })}
              >
                {courtName}
              </div>
              <div
                className={css({
                  width: '12%',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                })}
              >
                {coachName}
              </div>
              <div
                className={css({ width: '36%' })}
              >{`${originDate} -> ${additionalDate}`}</div>
              <div
                className={css({ width: '20%' })}
              >{`${originStartTime} -> ${additionalStartTime}`}</div>
              <div
                className={css({ width: '20%' })}
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
