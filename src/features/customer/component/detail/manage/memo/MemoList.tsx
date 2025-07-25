import { CustomerMemoListApiData } from '@apis/customer/customer.type';
import ManageListRow from '../ListRow';
import { transferCoachPosition } from '@features/customer/util/memo';
import Portal from '@/shared/components/Portal';
import RightSideContainer from '@/shared/components/layer/RightSideContainer';
import DrawerMemo from '../../drawer/Memo';
import { useState } from 'react';
import { transformMemoType } from '@features/customer/util/memo';

type Props = {
  data: CustomerMemoListApiData[];
  showDrawer: boolean;
  handleShowDrawerClick: () => void;
  handleHideDrawerClick: () => void;
};

const ManageMemoList = ({
  data,
  showDrawer,
  handleShowDrawerClick,
  handleHideDrawerClick,
}: Props) => {
  const [memoItem, setMemoItem] = useState({} as CustomerMemoListApiData);

  const onClickRowHandler = (item: CustomerMemoListApiData) => {
    setMemoItem(item);
    handleShowDrawerClick();
  };

  return (
    <>
      <div className="flex h-7 items-center text-center p-1.5 gap-0.5 [&_div]:text-sm">
        <div className="w-[20%]">제목</div>
        <div className="w-[35%]">내용</div>
        <div className="w-[15%]">담당코치</div>
        <div className="w-[10%]">유형</div>
        <div className="w-[20%]">등록날짜</div>
      </div>
      <div className="h-[calc(100%-28px)] py-2 overflow-y-auto [&_div]:text-sm">
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
              <div className="w-[20%] truncate whitespace-nowrap overflow-hidden text-left">
                {title}
              </div>
              <div className="w-[35%] truncate whitespace-nowrap overflow-hidden text-left">
                {content ? content : '-'}
              </div>
              <div className="w-[15%]">{`${name} ${transferCoachPosition(position)}`}</div>
              <div className="w-[10%]">{transformMemoType(type)}</div>
              <div className="w-[20%]">{createdAt}</div>
            </ManageListRow>
          );
        })}
      </div>
      {showDrawer && (
        <Portal id="drawer">
          <RightSideContainer
            title="메모 상세보기"
            showRightSide={showDrawer}
            setShowRightSide={handleHideDrawerClick}
          >
            <DrawerMemo
              item={memoItem}
              handleHideDrawerClick={handleHideDrawerClick}
            />
          </RightSideContainer>
        </Portal>
      )}
    </>
  );
};

export default ManageMemoList;
