import PaymentRefundHeaderContainer from './HeaderContainer';
import {
  PaymentRefundData,
  PaymentRefundType,
} from '@features/customer/type/payment.type';
import PaymentRefundBodyContainer from './BodyContainer';
import { usePaymentListQuery } from '@features/customer/query/PaymentQuery';

type Props = {
  customerId: string;
  type: PaymentRefundType;
  checkedItems: PaymentRefundData[];
  onClickOpenModalHandler: () => void;
};

const CustomerDetailPaymentRefundContainer = ({
  customerId,
  type,
  checkedItems,
  onClickOpenModalHandler,
}: Props) => {
  const { data } = usePaymentListQuery({ type, customerId });

  return (
    <>
      <PaymentRefundHeaderContainer
        type={type}
        checkedItems={checkedItems}
        onClickOpenModalHandler={onClickOpenModalHandler}
      />
      <PaymentRefundBodyContainer type={type} data={data} />
    </>
  );
};

export default CustomerDetailPaymentRefundContainer;
