import Button from 'app/src/components/common/Button';
import { useCustomerDetailQuery } from 'app/src/features/customer/query/CustomerQuery';
import CustomerInfo from './CustomerInfo';
import { useRouter } from 'next/navigation';
import { ScheduleLessonByDateData } from 'app/src/apis/schedule/schedule.type';
import {
  useAttendanceMutate,
  useLessonCancelMutate,
} from 'app/src/features/customer/mutate/manage';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';
import { flex } from 'styled-system/patterns';

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
    <Container>
      <CustomerInfo data={data} />
      <div
        className={flex({
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        })}
      >
        <Button
          label="출석체크"
          className={css({
            width: '100px',
            padding: '8px 10px',
            borderRadius: '8px',
            backgroundColor: 'var(--business-active-color)',
            color: 'var(--white100)',
            fontWeight: 500,
            border: 0,
          })}
          onClick={onClickCustomerAttendanceHandler}
          disabled={!data || isAbleAttendacne}
        />
        <Button
          label="강습취소"
          className={css({
            width: '100px',
            padding: '8px 10px',
            borderRadius: '8px',
            backgroundColor: 'var(--red200)',
            color: 'var(--white100)',
            fontWeight: 500,
            border: 0,
          })}
          disabled={!data}
          onClick={onClickCustomerLessonCancelHandler}
        />
        <Button
          label="상세보기"
          className={css({
            width: '100px',
            padding: '8px 10px',
            borderRadius: '8px',
            backgroundColor: 'var(--navy100)',
            color: 'var(--white100)',
            fontWeight: 500,
            border: 0,
          })}
          onClick={onClickCustomerDetailRouterHandler}
          disabled={!data}
        />
      </div>
    </Container>
  );
};

const Container = styled('section', {
  base: {
    position: 'relative',
    height: '18%',
    borderBottom: '1px solid var(--grey100)',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 24px',
  },
});

export default ModalCustomer;
