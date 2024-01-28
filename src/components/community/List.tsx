import { useState } from 'react';
import { NoResult, NormalList } from '..';

type NoticeListProps = {
  data?: Array<{ [key: string]: string | number }>;
};

const NoticeList = ({}: NoticeListProps) => {
  const [list] = useState([]);

  return (
    <>
      {list && list.length > 0 ? (
        <NormalList.UnOrderList>값 있음</NormalList.UnOrderList>
      ) : (
        <div
          css={{
            position: 'relative',
            height: '20vh',
            borderRadius: '25px',
          }}
        >
          <NoResult
            description={'작성된 공지사항이 없어요.'}
            margin="16px 0 0 0"
          />
        </div>
      )}
    </>
  );
};

export default NoticeList;
