import { NoResult } from '@/shared/components/index';
import { useCustomerAllLessonListQuery } from '@features/customer/query/CustomerQuery';
import ManageLessonList from './LessonList';

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
      <div className="h-12 leading-6 bg-white mt-0 mb-3 p-3 rounded-lg">
        <div className="mr-3">
          총 <span>{data ? data.length : '0'}</span>건
        </div>
      </div>
      <div className="bg-white rounded-lg h-[calc(100%-60px)] p-2">
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
