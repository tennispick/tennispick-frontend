import { CustomerAllLessonListQueryData } from '@/이전 파일들/features/customer/type/customer.type';
import NewSchedule from './newSchedule/NewSchedule';
import OriginSchedule from './OriginSchedule';
import { FormEventHandler, useEffect, useState } from 'react';
import { CustomerLessonScheduleHistoryData } from 'src/이전 파일들/apis/customer/customer.type';
import useInput from 'src/이전 파일들/hooks/useInput';
import { isEmptyObj } from 'src/이전 파일들/utils/object';
import { useScheduleChangeMutation } from '@/이전 파일들/features/schedule/mutation/scheduleMutation';

type CustomerLessonItem = Pick<
  CustomerAllLessonListQueryData,
  'customerId' | 'id'
>;

type Props = {
  customerId: CustomerLessonItem['customerId'];
  customerLessonId: CustomerLessonItem['id'];
};

const ScheduleChangeModal = ({ customerId, customerLessonId }: Props) => {
  const [selectSchedule, setSelectSchedule] = useState(
    {} as CustomerLessonScheduleHistoryData,
  );

  const [formData, onChangeFormData, setFormData] = useInput({
    coach: selectSchedule.coachId ?? '',
    date: selectSchedule.date ?? new Date(),
    startTime: selectSchedule.startTime ?? '00:00',
    endTime: selectSchedule.endTime ?? '00:20',
    court: selectSchedule.courtId ?? '',
  });

  const { mutate } = useScheduleChangeMutation();

  const onClickSelectOriginScheduleHandler = (
    item: CustomerLessonScheduleHistoryData,
  ) => setSelectSchedule(item);

  const onSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const currentFormData = new FormData(e.currentTarget);

    currentFormData.append('id', `${selectSchedule.id}`);
    currentFormData.append('customerId', `${customerId}`);
    currentFormData.append('customerLessonId', `${customerLessonId}`);
    currentFormData.append('lessonId', `${selectSchedule.lessonId}`);
    currentFormData.append('lessonType', selectSchedule.lessonType);
    currentFormData.append('date', formData.date);
    currentFormData.append('endTime', currentFormData.get('endTime')!);

    mutate({ ...Object.fromEntries(currentFormData) });
  };

  useEffect(() => {
    if (isEmptyObj(selectSchedule)) return;

    setFormData({
      coach: selectSchedule.coachId,
      date: new Date(selectSchedule.date),
      startTime: selectSchedule.startTime,
      endTime: selectSchedule.endTime,
      court: selectSchedule.courtId,
    });
  }, [selectSchedule, setFormData]);

  return (
    <form onSubmit={onSubmitHandler}>
      <OriginSchedule
        customerId={customerId}
        customerLessonId={customerLessonId}
        onClickSelectOriginScheduleHandler={onClickSelectOriginScheduleHandler}
        selectSchedule={selectSchedule}
      />
      <NewSchedule
        selectSchedule={selectSchedule}
        formData={formData}
        onChangeFormData={onChangeFormData}
        setFormData={setFormData}
      />
    </form>
  );
};

export default ScheduleChangeModal;
