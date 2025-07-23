import Portal from '@/shared/components/Portal';
import ModalHeader from './Header';
import ScheduleModalRecentHistoryModalTableBody from './TableBody';
import ButtonContainer from './ButtonContainer';
import { useState } from 'react';
import Pagination from '@/shared/components/Pagination';
import { MouseEvent } from 'react';
import { useCustomerLessonHistoryQuery } from '@features/customer/query/CustomerQuery';
import { CustomerLessonHistoryData } from '@apis/customer/customer.type';
import { LessonType } from '@features/lesson/type/lesson.type';

type Props = {
  customerId: string;
  lessonType: LessonType;
  handleCloseModal: () => void;
  onClickSaveCustomerLessonHistoryHandler: (
    target: CustomerLessonHistoryData['lessonHistory'][],
  ) => void;
};

const ScheduleModalRecentHistoryModal = ({
  customerId,
  lessonType,
  handleCloseModal,
  onClickSaveCustomerLessonHistoryHandler,
}: Props) => {
  const [checkHistoryId, setCheckHistoryId] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data } = useCustomerLessonHistoryQuery({
    customerId: customerId,
    lessonType: lessonType,
    page: currentPage,
  });

  const onClickHistoryRadioItemHandler = (e: MouseEvent<HTMLInputElement>) => {
    const { checked, value } = e.target as HTMLInputElement;
    if (checked) setCheckHistoryId(value);
  };

  const handleSaveClick = () => {
    const { lessonHistory } = data;
    const target = lessonHistory.filter(
      ({ id }: Pick<CustomerLessonHistoryData['lessonHistory'], 'id'>) =>
        id === Number(checkHistoryId),
    );

    onClickSaveCustomerLessonHistoryHandler(target);
  };

  return (
    <Portal id="layerPortal">
      <div
        className="fixed w-screen h-screen top-0 bg-black bg-opacity-70 z-[99999]"
      >
        <section
          className="absolute w-[900px] min-h-[320px] h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-white rounded-xl"
        >
          <ModalHeader handleCloseModal={handleCloseModal} />
          <ScheduleModalRecentHistoryModalTableBody
            checkHistoryId={checkHistoryId}
            onClickRadioHandler={onClickHistoryRadioItemHandler}
            data={data?.lessonHistory || []}
          />
          <Pagination
            totalPage={Number(data?.totalPage) || 1}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <ButtonContainer
            checkHistoryId={checkHistoryId}
            handleCloseModal={handleCloseModal}
            handleSaveClick={handleSaveClick}
          />
        </section>
      </div>
    </Portal>
  );
};

export default ScheduleModalRecentHistoryModal;