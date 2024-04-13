import { CustomerPaymentRefundData } from '@apis/payment/payment.type';
import PaymentList from './payment/List';
import RefundList from './refund/List';
import { MouseEvent } from 'react';

type Props = {
  type: string;
  data: CustomerPaymentRefundData[];
  onClickOpenRefundModalHandler: (
    e: MouseEvent<HTMLButtonElement>,
    target: CustomerPaymentRefundData,
  ) => void;
};

const CustomerDetailPaymentRefundBodyContainer = ({
  type,
  data,
  onClickOpenRefundModalHandler,
}: Props) => {
  return (
    <div
      css={{
        backgroundColor: 'var(--white100)',
        borderRadius: '8px',
        height: 'calc(100% - 60px)',
        padding: '12px 4px',
      }}
    >
      {
        {
          payment: (
            <PaymentList
              data={data}
              onClickOpenRefundModalHandler={onClickOpenRefundModalHandler}
            />
          ),
          refund: <RefundList data={data} />,
        }[type]
      }
    </div>
  );
};

export default CustomerDetailPaymentRefundBodyContainer;
