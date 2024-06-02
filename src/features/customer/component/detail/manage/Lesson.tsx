import { NoResult } from '@components/index';
import { useCustomerAllLessonListQuery } from '@features/customer/query/CustomerQuery';
import ManageLessonList from './LessonList';

type Props = {
  customerId: string;
  showDrawer: boolean;
  onClickShowDrawerHandler: () => void;
  onCloseDrawerHandler: () => void;
  showScheduleChangeModal: boolean;
  onClickShowModalHandler: () => void;
  onClickCloseModalHandler: () => void;
};

const ManageLesson = ({
  customerId,
  showDrawer,
  onClickShowDrawerHandler,
  onCloseDrawerHandler,
  showScheduleChangeModal,
  onClickShowModalHandler,
  onClickCloseModalHandler
}: Props) => {

  const { data } = useCustomerAllLessonListQuery({ id: customerId });

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
          <ManageLessonList
            data={data}
            showDrawer={showDrawer}
            onClickShowDrawerHandler={onClickShowDrawerHandler}
            onCloseDrawerHandler={onCloseDrawerHandler}
            showScheduleChangeModal={showScheduleChangeModal}
            onClickShowModalHandler={onClickShowModalHandler}
            onClickCloseModalHandler={onClickCloseModalHandler}
          />
        ) : (
          <NoResult description="수강목록이 없어요." />
        )}
      </div>
    </>
  );
};

export default ManageLesson;
