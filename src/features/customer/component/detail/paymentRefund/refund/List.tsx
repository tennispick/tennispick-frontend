import { CustomerPaymentRefundData } from '@apis/payment/payment.type';
import { NoResult } from '@components/index';

type Props = {
  data: CustomerPaymentRefundData[];
};

const CustomerDetailPaymentRefundRefundList = ({ data }: Props) => {
  return (
    <div>
      <h2>Payment List</h2>
    </div>
  );
};

export default CustomerDetailPaymentRefundRefundList;
