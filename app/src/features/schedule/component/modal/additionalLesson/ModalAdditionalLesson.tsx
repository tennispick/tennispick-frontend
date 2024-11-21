import { FormEventHandler, useState } from 'react';
import CustomerSearch from './CustomerSearch';
import { NoResult } from 'app/src/components/index';
import ScheduleModalRecentHistoryModal from '../recentHistoryModal/RecentHistoryModal';
import { CustomerLessonHistoryData } from 'app/src/apis/customer/customer.type';
import ScheduleLessonContainer from './ScheduleLessonContainer';
import { createAdditionalScheduleLesson } from 'app/src/apis/schedule/schedule.api';
import { css } from 'styled-system/css';

const EMPTY_CUSTOMER_LESSON = { id: '', name: '' };

const ModalAdditionalLesson = () => {
  const [customerId, setCustomerId] = useState<string>('');
  const [customerLesson, setCustomerLesson] = useState(EMPTY_CUSTOMER_LESSON);
  const [customerLessonData, setCustomerLessonData] =
    useState<CustomerLessonHistoryData['lessonHistory']>();

  const isSelectCustomer = customerLesson.id !== '';

  const setCustomerIdHandler = (id: string) => setCustomerId(id);
  const handleCloseModal = () => {
    setCustomerLesson(EMPTY_CUSTOMER_LESSON);
  };

  const onClickSaveCustomerLessonHistoryHandler = (
    target: CustomerLessonHistoryData['lessonHistory'][],
  ) => {
    setCustomerLessonData(target[0]);
    handleCloseModal();
  };

  const onSubmitHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    formData.append('customerId', customerId);
    formData.append('lessonId', `${customerLessonData!.lessonId}`);
    formData.append('lessonHistoryId', `${customerLessonData!.id}`);
    formData.append(
      'customerLessonId',
      `${customerLessonData!.customerLessonId}`,
    );

    const result = await createAdditionalScheduleLesson(formData);

    if (result.affectedRows > 0) alert('보강이 등록되었어요.');
    else alert('보강 등록에 실패했어요.\n관리자에게 문의해주세요.');

    window.location.reload();
  };

  const isSelectCustomerLessonData = !!customerLessonData;

  return (
    <form
      onSubmit={onSubmitHandler}
      className={css({
        backgroundColor: 'var(--white100)',
        padding: '24px',
        borderRadius: '12px',
      })}
    >
      <div className={css({ minHeight: '420px' })}>
        <CustomerSearch
          setCustomerLesson={setCustomerLesson}
          setCustomerIdHandler={setCustomerIdHandler}
        />
        {isSelectCustomerLessonData ? (
          <ScheduleLessonContainer
            customerId={customerId}
            data={customerLessonData}
            handleCloseModal={handleCloseModal}
          />
        ) : (
          <div className={css({ height: '420px' })}>
            <NoResult description="회원을 검색해주세요." />
          </div>
        )}
      </div>
      {isSelectCustomer && (
        <ScheduleModalRecentHistoryModal
          customerId={customerLesson.id!}
          lessonType="private"
          handleCloseModal={handleCloseModal}
          onClickSaveCustomerLessonHistoryHandler={
            onClickSaveCustomerLessonHistoryHandler
          }
        />
      )}
    </form>
  );
};

export default ModalAdditionalLesson;
