import PaymentRefundHeaderContainer from './HeaderContainer';
import { CustomerPaymentRefundData } from '@apis/payment/payment.type';
import { PaymentRefundType } from '@features/customer/type/payment.type';
import PaymentRefundBodyContainer from './BodyContainer';
import { usePaymentListQuery } from '@features/customer/query/PaymentQuery';
import { MouseEvent } from 'react';

type Props = {
  customerId: string;
  type: PaymentRefundType;
  handleShowPaymentModalClick: () => void;
  handleOpenRefundModal: (
    e: MouseEvent<HTMLButtonElement>,
    target: CustomerPaymentRefundData,
  ) => void;
};

const CustomerDetailPaymentRefundContainer = ({
  customerId,
  type,
  handleShowPaymentModalClick,
  handleOpenRefundModal,
}: Props) => {
  const { data } = usePaymentListQuery({ type, customerId });

  return (
    <>
      <PaymentRefundHeaderContainer
        type={type}
        data={data}
        handleShowPaymentModalClick={handleShowPaymentModalClick}
      />
      <PaymentRefundBodyContainer
        type={type}
        data={data}
        handleOpenRefundModal={handleOpenRefundModal}
      />
    </>
  );
};

export default CustomerDetailPaymentRefundContainer;
