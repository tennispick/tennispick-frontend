import { NoResult } from '@components/index';
import { useCustomerAllLessonListQuery } from '@features/customer/query/CustomerQuery';
import ManageLessonList from './LessonList';
import { css } from 'styled-system/css';

type Props = {
  customerId: string;
  showDrawer: boolean;
  onClickShowDrawerHandler: () => void;
  onCloseDrawerHandler: () => void;
  showScheduleChangeModal: boolean;
  handleShowModalClick: () => void;
  handleHideModalClick: () => void;
};

const ManageLesson = ({
  customerId,
  showDrawer,
  onClickShowDrawerHandler,
  onCloseDrawerHandler,
  showScheduleChangeModal,
  handleShowModalClick,
  handleHideModalClick,
}: Props) => {
  const { data } = useCustomerAllLessonListQuery({ id: customerId });

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
          <ManageLessonList
            data={data}
            showDrawer={showDrawer}
            onClickShowDrawerHandler={onClickShowDrawerHandler}
            onCloseDrawerHandler={onCloseDrawerHandler}
            showScheduleChangeModal={showScheduleChangeModal}
            handleShowModalClick={handleShowModalClick}
            handleHideModalClick={handleHideModalClick}
          />
        ) : (
          <NoResult description="수강목록이 없어요." />
        )}
      </div>
    </>
  );
};

export default ManageLesson;
