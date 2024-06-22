import { CustomerMemoListApiData } from '@apis/customer/customer.type';
import ManageListRow from '../ListRow';
import { transferCoachPosition } from '@features/customer/util/memo';
import Portal from '@components/Portal';
import RightSideContainer from '@components/layer/RightSideContainer';
import DrawerMemo from '../../drawer/Memo';
import { useState } from 'react';
import { transformMemoType } from '@features/customer/util/memo';

type Props = {
  data: CustomerMemoListApiData[];
  showDrawer: boolean;
  onClickShowDrawerHandler: () => void;
  onCloseDrawerHandler: () => void;
};

const ManageMemoList = ({
  data,
  showDrawer,
  onClickShowDrawerHandler,
  onCloseDrawerHandler,
}: Props) => {
  const [memoItem, setMemoItem] = useState({} as CustomerMemoListApiData);

  const onClickRowHandler = (item: CustomerMemoListApiData) => {
    setMemoItem(item);
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
        <div css={{ width: '20%' }}>제목</div>
        <div css={{ width: '35%' }}>내용</div>
        <div css={{ width: '15%' }}>담당코치</div>
        <div css={{ width: '10%' }}>유형</div>
        <div css={{ width: '20%' }}>등록날짜</div>
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
            customerCommentId,
            title,
            content,
            position,
            type,
            name,
            createdAt,
          } = item;

          return (
            <ManageListRow
              key={`${index}-${customerCommentId}`}
              onClick={() => onClickRowHandler(item)}
            >
              <div
                css={{
                  width: '20%',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textAlign: 'left',
                }}
              >
                {title}
              </div>
              <div
                css={{
                  width: '35%',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textAlign: content ? 'left' : 'center',
                }}
              >
                {content ? content : '-'}
              </div>
              <div css={{ width: '15%' }}>{`${name} ${transferCoachPosition(
                position,
              )}`}</div>
              <div css={{ width: '10%' }}>{transformMemoType(type)}</div>
              <div css={{ width: '20%' }}>{createdAt}</div>
            </ManageListRow>
          );
        })}
      </div>
      {showDrawer && (
        <Portal id="drawer">
          <RightSideContainer
            title="메모 상세보기"
            showRightSide={showDrawer}
            setShowRightSide={onCloseDrawerHandler}
          >
            <DrawerMemo item={memoItem} />
          </RightSideContainer>
        </Portal>
      )}
    </>
  );
};

export default ManageMemoList;
