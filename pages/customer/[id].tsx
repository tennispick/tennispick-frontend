import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import {
  PageHeader,
  Button,
  CustomerData,
  CustomerLessonList as LessonList,
  CustomerMemoList as MemoList,
} from '@components/index';
import { DeleteWhiteIcon, EditWhiteIcon } from '@icons/index';
import { getCustomerDetailQuery } from '@queries/customer';

const CustomerDetail = ({ id }: { id: string }) => {
  const { data, isLoading } = getCustomerDetailQuery(id); // 회원 상세정보
  // 수강목록
  // 회원메모

  if (isLoading) return <>로딩중입니다.</>;

  const customerInfo = data.data[0];

  return (
    <>
      <PageHeader title={`${customerInfo.name} 님`} />
      <div
        css={{
          position: 'relative',
          width: '100%',
          height: 'calc(90% - 24px)',
          display: 'flex',
        }}
      >
        <CustomerData data={customerInfo} />
        <LessonList />
        <MemoList />
      </div>
      <div
        css={{
          position: 'relative',
          display: 'flex',
          height: '46px',
          justifyContent: 'end',
          margin: '12px 0 0 0',
        }}
      >
        <Button
          label={'정보 삭제하기'}
          variant={'iconBtn'}
          src={DeleteWhiteIcon}
          css={{
            border: 0,
            backgroundColor: 'var(--red200)',
            color: 'var(--white100)',
            padding: '12px 16px',
            margin: '0 12px 0 0',
          }}
        />
        <Button
          label={'정보 수정하기'}
          variant={'iconBtn'}
          src={EditWhiteIcon}
          css={{
            border: 0,
            backgroundColor: 'var(--business-active-color)',
            color: 'var(--white100)',
            padding: '12px 16px',
          }}
        />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { query } = context;
  const id = query.id as unknown as string;

  try {
    return {
      props: {
        id: id,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default CustomerDetail;
