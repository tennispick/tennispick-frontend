import { CustomerPaymentRefundData } from '@apis/payment/payment.type';
import PaymentList from './payment/List';
import RefundList from './refund/List';
import { MouseEvent } from 'react';

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
      className="h-[calc(100%-60px)] p-3 bg-white rounded-lg"
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