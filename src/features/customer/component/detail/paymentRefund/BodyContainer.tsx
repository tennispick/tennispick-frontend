import { CustomerPaymentRefundData } from '@apis/payment/payment.type';
import PaymentList from './payment/List';
import RefundList from './refund/List';
import { MouseEvent } from 'react';
import { css } from 'styled-system/css';

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
      className={css({
        height: 'calc(100% - 60px)',
        padding: '12px 4px',
        backgroundColor: 'var(--white100)',
        borderRadius: '8px',
      })}
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
