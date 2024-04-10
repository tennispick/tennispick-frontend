import styled from '@emotion/styled';
import PaymentRefundHeaderContainer from './HeaderContainer';
import {
  PaymentRefundData,
  PaymentRefundType,
} from '@features/customer/type/payment.type';
import PaymentRefundBodyContainer from './BodyContainer';

type Props = {
  type: PaymentRefundType;
  checkedItems: PaymentRefundData[];
  onClickOpenModalHandler: () => void;
};

const CustomerDetailPaymentRefundContainer = ({
  type,
  checkedItems,
  onClickOpenModalHandler,
}: Props) => {
  return (
    <Container>
      <PaymentRefundHeaderContainer
        type={type}
        checkedItems={checkedItems}
        onClickOpenModalHandler={onClickOpenModalHandler}
      />
      <PaymentRefundBodyContainer />
    </Container>
  );
};

const Container = styled.section({
  position: 'relative',
  height: '50vh',
  backgroundColor: 'var(--grey400)',
  borderRadius: '16px',
  padding: '12px',
});

export default CustomerDetailPaymentRefundContainer;
