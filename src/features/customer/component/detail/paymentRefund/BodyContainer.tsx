import { CustomerPaymentRefundData } from '@apis/payment/payment.type';
import PaymentList from './payment/List';
import RefundList from './refund/List';

type Props = {
  type: string;
  data: CustomerPaymentRefundData[];
};

const CustomerDetailPaymentRefundBodyContainer = ({ type, data }: Props) => {
  return (
    <div
      css={{
        backgroundColor: 'var(--white100)',
        borderRadius: '8px',
        height: 'calc(100% - 60px)',
        padding: '12px',
      }}
    >
      {
        {
          payment: <PaymentList data={data} />,
          refund: <RefundList data={data} />,
        }[type]
      }
    </div>
  );
};

{
  /* <NoResult description={`${type === 'payment' ? '결제' : '환불'}내역이 없어요.`} /> */
}

export default CustomerDetailPaymentRefundBodyContainer;
