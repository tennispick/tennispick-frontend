import { CustomerPaymentRefundData } from '@apis/payment/payment.type';
import { PaymentRefundType } from '@features/customer/type/payment.type';
import { addNumberCommas } from 'src/shared/utils/numberForm';

type Props = {
  type: PaymentRefundType;
  data: CustomerPaymentRefundData[];
  handleShowPaymentModalClick: () => void;
};

const CustomerDetailPaymentRefundHeaderContainer = ({
  type,
  data,
  handleShowPaymentModalClick,
}: Props) => {
  const totalLength = data.length;
  const totalPrice = data.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const totalRefundPrice = data.reduce((acc, cur) => acc + cur.refundPrice, 0);

  return (
    <div className="h-12 leading-6 bg-white mt-0 mb-3 p-3 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            총{' '}
            <span className="font-semibold">
              {addNumberCommas(totalLength)}
            </span>
            건
          </div>
          <div>
            총 {type === 'payment' ? '결제' : '환불'}금액 :{' '}
            <span className="font-semibold">
              {addNumberCommas(
                type === 'payment' ? totalPrice : totalRefundPrice,
              )}
            </span>
            원
          </div>
        </div>
        {type === 'payment' && (
          <div
            className="text-blue-600 font-semibold mr-2 cursor-pointer"
            onClick={handleShowPaymentModalClick}
          >
            결제하기
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDetailPaymentRefundHeaderContainer;