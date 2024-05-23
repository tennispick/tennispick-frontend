import { useState } from 'react';
import { NoResult } from '@components/index';

type Props = {
  customerId: string;
};

const ManageLesson = ({ customerId }: Props) => {
  const [data] = useState([]);

  return (
    <>
      <div
        css={{
          height: '48px',
          lineHeight: '24px',
          backgroundColor: 'var(--white100)',
          margin: '0 0 12px 0',
          padding: '12px',
          borderRadius: '8px',
        }}
      >
        <div css={{ margin: '0 12px 0 0' }}>
          총 <span>0</span>건
        </div>
      </div>
      <div
        css={{
          backgroundColor: 'var(--white100)',
          borderRadius: '8px',
          height: 'calc(100% - 60px)',
          padding: '8px',
        }}
      >
        {data && data.length > 0 ? (
          <>데이터 있을 때</>
        ) : (
          <NoResult description="수강목록이 없어요." />
        )}
      </div>
    </>
  );
};

export default ManageLesson;
