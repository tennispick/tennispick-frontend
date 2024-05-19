import Loading from '@components/common/Loading';
import { NoResult } from '@components/index';
import { useCustomerMemoListQuery } from '@features/customer/query/CustomerQuery';
import ManageMemoList from './MemoList';

type Props = {
  customerId: string;
};

const ManageMemo = ({ customerId }: Props) => {
  // TODO useQuery get
  const { data, isLoading } = useCustomerMemoListQuery(customerId);

  console.log(data);

  if (isLoading) return <Loading />;

  return (
    <>
      <div
        css={{
          position: 'relative',
          height: '48px',
          lineHeight: '24px',
          backgroundColor: 'var(--white100)',
          margin: '0 0 12px 0',
          padding: '12px',
          borderRadius: '8px',
        }}
      >
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div css={{ margin: '0 12px 0 0' }}>
            총 <span>{data.length}</span>건
          </div>
          <div
            css={{
              color: 'var(--business-color)',
              fontWeight: 600,
              margin: '0 8px 0 0',
              cursor: 'pointer',
            }}
          >
            등록하기
          </div>
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
          <ManageMemoList data={data} />
        ) : (
          <NoResult description="메모 내역이 없어요." />
        )}
      </div>
    </>
  );
};

export default ManageMemo;
