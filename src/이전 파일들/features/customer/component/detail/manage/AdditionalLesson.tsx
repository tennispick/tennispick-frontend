import Loading from 'src/이전 파일들/components/common/Loading';
import { NoResult } from 'src/이전 파일들/components/index';
import { useCustomerAdditionalLessonListQuery } from '@/이전 파일들/features/customer/query/CustomerQuery';
import AdditionalLessonList from './additionalLesson/AdditionalLessonList';
import { css } from 'styled-system/css';

type Props = {
  customerId: string;
  showDrawer: boolean;
  onClickShowDrawerHandler: () => void;
  onCloseDrawerHandler: () => void;
};

const ManageAdditionalLesson = ({
  customerId,
  showDrawer,
  onClickShowDrawerHandler,
  onCloseDrawerHandler,
}: Props) => {
  const { data, isFetching } = useCustomerAdditionalLessonListQuery(customerId);

  if (isFetching) return <Loading />;

  return (
    <>
      <div
        className={css({
          height: '48px',
          lineHeight: '24px',
          backgroundColor: 'var(--white100)',
          margin: '0 0 12px 0',
          padding: '12px',
          borderRadius: '8px',
        })}
      >
        <div className={css({ margin: '0 12px 0 0' })}>
          총 <span>{data ? data.length : '0'}</span>건
        </div>
      </div>
      <div
        className={css({
          backgroundColor: 'var(--white100)',
          borderRadius: '8px',
          height: 'calc(100% - 60px)',
          padding: '8px',
        })}
      >
        {data && data.length > 0 ? (
          <AdditionalLessonList
            data={data}
            showDrawer={showDrawer}
            onClickShowDrawerHandler={onClickShowDrawerHandler}
            onCloseDrawerHandler={onCloseDrawerHandler}
          />
        ) : (
          <NoResult description="보강현황이 없어요." />
        )}
      </div>
    </>
  );
};

export default ManageAdditionalLesson;
