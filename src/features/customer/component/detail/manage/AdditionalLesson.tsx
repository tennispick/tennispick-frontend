import Loading from '@/shared/components/common/Loading';
import { NoResult } from '@/shared/components/index';
import { useCustomerAdditionalLessonListQuery } from '@features/customer/query/CustomerQuery';
import AdditionalLessonList from './additionalLesson/AdditionalLessonList';

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
        className="h-12 leading-6 bg-white mt-0 mb-3 p-3 rounded-lg"
      >
        <div className="mr-3">
          총 <span>{data ? data.length : '0'}</span>건
        </div>
      </div>
      <div
        className="bg-white rounded-lg h-[calc(100%-60px)] p-2"
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