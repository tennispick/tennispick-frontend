import Button from '@/shared/components/common/Button';
import { useCustomerDetailQuery } from '@features/customer/query/CustomerQuery';
import CustomerInfo from './CustomerInfo';
import { useRouter } from 'next/navigation';
import { ScheduleLessonByDateData } from '@apis/schedule/schedule.type';
import {
  useAttendanceMutate,
  useLessonCancelMutate,
} from '@features/customer/mutate/manage';

type Props = {
  day: Date;
  customerId: string;
  customerInfo: ScheduleLessonByDateData | null;
  handleCloseModalClick: () => void;
};

const ModalCustomer = ({
  day,
  customerId,
  customerInfo,
  handleCloseModalClick,
}: Props) => {
  const router = useRouter();

  const { data } = useCustomerDetailQuery({ id: customerId });
  const { mutate: attendanceMutate } = useAttendanceMutate(
    day,
    handleCloseModalClick,
  );
  const { mutate: lessonCancelMutate } = useLessonCancelMutate(
    day,
    handleCloseModalClick,
  );

  const { id, customerAttendance, coachAttendance } = customerInfo ?? {};

  const isAbleAttendacne = !!(customerAttendance || coachAttendance);

  const onClickCustomerAttendanceHandler = () =>
    attendanceMutate({
      customerId,
      lessonHistoryId: id?.toString() ?? '',
    });

  const onClickCustomerLessonCancelHandler = () =>
    lessonCancelMutate({
      customerId,
      lessonHistoryId: id?.toString() ?? '',
    });

  const onClickCustomerDetailRouterHandler = () => {
    router.push(`/customer/${customerId}`);
    handleCloseModalClick();
  };

  return (
    <section className="relative flex h-[18%] justify-between border-b border-b-[var(--grey100)] px-6 py-2">
      <CustomerInfo data={data} />
      <div className="flex flex-col justify-evenly">
        <Button
          label="출석체크"
          className="w-25 rounded-lg border-0 bg-[var(--business-active-color)] px-2.5 py-2 font-medium text-[var(--white100)]"
          onClick={onClickCustomerAttendanceHandler}
          disabled={!data || isAbleAttendacne}
        />
        <Button
          label="강습취소"
          className="w-25 rounded-lg border-0 bg-[var(--red200)] px-2.5 py-2 font-medium text-[var(--white100)]"
          disabled={!data}
          onClick={onClickCustomerLessonCancelHandler}
        />
        <Button
          label="상세보기"
          className="w-25 rounded-lg border-0 bg-[var(--navy100)] px-2.5 py-2 font-medium text-[var(--white100)]"
          onClick={onClickCustomerDetailRouterHandler}
          disabled={!data}
        />
      </div>
    </section>
  );
};

export default ModalCustomer;
