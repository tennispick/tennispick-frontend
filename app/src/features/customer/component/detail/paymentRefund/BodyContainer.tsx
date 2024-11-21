import { CustomerPaymentRefundData } from 'app/src/apis/payment/payment.type';
import PaymentList from './payment/List';
import RefundList from './refund/List';
import { MouseEvent } from 'react';
import { css } from 'styled-system/css';

type Props = {
  type: string;
  data: CustomerPaymentRefundData[];
  handleOpenRefundModal: (
    e: MouseEvent<HTMLButtonElement>,
    target: CustomerPaymentRefundData,
  ) => void;
};

const CustomerDetailPaymentRefundBodyContainer = ({
  type,
  data,
  handleOpenRefundModal,
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
              handleOpenRefundModal={handleOpenRefundModal}
            />
          ),
          refund: <RefundList data={data} />,
        }[type]
      }
    </div>
  );
};

export default CustomerDetailPaymentRefundBodyContainer;
