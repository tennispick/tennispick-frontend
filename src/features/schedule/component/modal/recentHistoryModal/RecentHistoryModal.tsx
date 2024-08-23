import Portal from '@components/Portal';
import { LAYER_PORTAL_Z_INDEX } from 'src/constants/portal';
import ModalHeader from './Header';
import ScheduleModalRecentHistoryModalTableBody from './TableBody';
import ButtonContainer from './ButtonContainer';
import { useState } from 'react';
import Pagination from '@components/Pagination';
import { MouseEvent } from 'react';
import { useCustomerLessonHistoryQuery } from '@features/customer/query/CustomerQuery';
import { CustomerLessonHistoryData } from '@apis/customer/customer.type';
import { LessonType } from '@features/lesson/type/lesson.type';
import { css } from 'styled-system/css';

type Props = {
  customerId: string;
  lessonType: LessonType;
  onClickCloseModalHandler: () => void;
  onClickSaveCustomerLessonHistoryHandler: (
    target: CustomerLessonHistoryData['lessonHistory'][],
  ) => void;
};

const ScheduleModalRecentHistoryModal = ({
  customerId,
  lessonType,
  onClickCloseModalHandler,
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

  const onClickSaveHandler = () => {
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
        className={css({
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          top: 0,
          backgroundColor: 'rgb(18, 18, 18, 0.7)',
          zIndex: LAYER_PORTAL_Z_INDEX,
        })}
      >
        <section
          className={css({
            position: 'absolute',
            width: '900px',
            minHeight: '320px',
            height: 'auto',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            backgroundColor: 'var(--white100)',
            borderRadius: '12px',
          })}
        >
          <ModalHeader onClickCloseModalHandler={onClickCloseModalHandler} />
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
            onClickCloseModalHandler={onClickCloseModalHandler}
            onClickSaveHandler={onClickSaveHandler}
          />
        </section>
      </div>
    </Portal>
  );
};

export default ScheduleModalRecentHistoryModal;
