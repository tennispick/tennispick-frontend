import styled from '@emotion/styled';
import Button from '@components/common/Button';
import { useCustomerDetailQuery } from '@features/customer/query/CustomerQuery';
import CustomerInfo from './CustomerInfo';
import { useRouter } from 'next/navigation';
import { ScheduleLessonByDateData } from '@apis/schedule/schedule.type';
import { useAttendanceMutate } from '@features/customer/mutate/manage';

type Props = {
  day: Date;
  customerId: string;
  customerInfo: ScheduleLessonByDateData | null;
  onCloseModalHandler: () => void;
};

const ModalCustomer = ({
  day,
  customerId,
  customerInfo,
  onCloseModalHandler,
}: Props) => {
  const router = useRouter();

  const { data } = useCustomerDetailQuery({ id: customerId });
  const { mutate } = useAttendanceMutate(day, onCloseModalHandler);

  const { customerAttendance, coachAttendance } = customerInfo ?? {};

  const isAbleAttendacne = !!(customerAttendance || coachAttendance);

  const onClickCustomerDetailRouterHandler = () => {
    router.push(`/customer/${customerId}`);
    onCloseModalHandler();
  };

  const onClickCustomerAttendanceHandler = () =>
    mutate({
      customerId,
      lessonHistoryId: customerInfo?.id.toString() ?? '',
    });

  return (
    <Container>
      <CustomerInfo data={data?.[0] ?? {}} />
      <div
        css={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
      >
        <Button
          label="출석체크"
          css={{
            width: '100px',
            padding: '8px 10px',
            borderRadius: '8px',
            backgroundColor: 'var(--business-active-color)',
            color: 'var(--white100)',
            fontWeight: 500,
            border: 0,
          }}
          onClick={onClickCustomerAttendanceHandler}
          disabled={!data?.[0] || isAbleAttendacne}
        />
        <Button
          label="강습취소"
          css={{
            width: '100px',
            padding: '8px 10px',
            borderRadius: '8px',
            backgroundColor: 'var(--red200)',
            color: 'var(--white100)',
            fontWeight: 500,
            border: 0,
          }}
          disabled={!data?.[0]}
        />
        <Button
          label="상세보기"
          css={{
            width: '100px',
            padding: '8px 10px',
            borderRadius: '8px',
            backgroundColor: 'var(--navy100)',
            color: 'var(--white100)',
            fontWeight: 500,
            border: 0,
          }}
          onClick={onClickCustomerDetailRouterHandler}
          disabled={!data?.[0]}
        />
      </div>
    </Container>
  );
};

const Container = styled.section({
  position: 'relative',
  height: '18%',
  borderBottom: '1px solid var(--grey100)',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px 24px',
});

export default ModalCustomer;
