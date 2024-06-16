import Loading from '@components/common/Loading';
import { NoResult } from '@components/index';
import { useCustomerAdditionalLessonListQuery } from '@features/customer/query/CustomerQuery';
import AdditionalLessonList from './additionalLesson/AdditionalLessonList';

type Props = {
  customerId: string;
  showDrawer: boolean;
  onClickShowDrawerHandler: () => void;
  onCloseDrawerHandler: () => void;
};

const ManageAdditionalLesson = ({ customerId }: Props) => {
  const { data, isFetching } = useCustomerAdditionalLessonListQuery(customerId);

  if (isFetching) return <Loading />;

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
        <div css={{ margin: '0 12px 0 0' }}>
          총 <span>{data ? data.length : '0'}</span>건
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
          <AdditionalLessonList data={data} />
        ) : (
          <NoResult description="보강현황이 없어요." />
        )}
      </div>
    </>
  );
};

export default ManageAdditionalLesson;
