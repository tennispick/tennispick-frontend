import PaymentRefundHeaderContainer from './HeaderContainer';
import { CustomerPaymentRefundData } from '@apis/payment/payment.type';
import { PaymentRefundType } from '@features/customer/type/payment.type';
import PaymentRefundBodyContainer from './BodyContainer';
import { usePaymentListQuery } from '@features/customer/query/PaymentQuery';
import { MouseEvent } from 'react';

type Props = {
  customerId: string;
  type: PaymentRefundType;
  onClickOpenModalHandler: () => void;
  onClickOpenRefundModalHandler: (
    e: MouseEvent<HTMLButtonElement>,
    target: CustomerPaymentRefundData,
  ) => void;
};

const CustomerDetailPaymentRefundContainer = ({
  customerId,
  type,
  onClickOpenModalHandler,
  onClickOpenRefundModalHandler,
}: Props) => {
  const { data } = usePaymentListQuery({ type, customerId });

  return (
    <>
      <PaymentRefundHeaderContainer
        type={type}
        data={data}
        onClickOpenModalHandler={onClickOpenModalHandler}
      />
      <PaymentRefundBodyContainer
        type={type}
        data={data}
        onClickOpenRefundModalHandler={onClickOpenRefundModalHandler}
      />
    </>
  );
};

export default CustomerDetailPaymentRefundContainer;
