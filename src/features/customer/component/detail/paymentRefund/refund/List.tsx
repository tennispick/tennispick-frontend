import { CustomerPaymentRefundData } from '@apis/payment/payment.type';
import { NoResult } from '@/shared/components/index';
import CustomerDetailPaymentRefundTableRow from '../TableRow';
import {
  transferDiscountType,
  transferPaymentType,
} from '@features/customer/util/payment';
import { addNumberCommas } from 'src/shared/utils/numberForm';
import { cancelCustomerRefund } from '@apis/payment/payment.api';

type Props = {
  data: CustomerPaymentRefundData[];
};

const CustomerDetailPaymentRefundRefundList = ({ data }: Props) => {
  if (data.length === 0) return <NoResult description={'환불내역이 없어요.'} />;

  const onClickRefundCancelHandler = async (id: number) => {
    if (confirm('환불 취소를 진행 하시겠습니까?')) {
      const { data } = await cancelCustomerRefund(id);
      if (data.affectedRows > 0) alert('환불 취소가 정상적으로 진행되었어요.');
      else alert('환불 취소에 실패했어요.\n관리자에게 문의해주세요.');

      window.location.reload();
    }
  };

  return (
    <>
      <div className="flex h-7 items-center text-center p-1.5 gap-0.5 [&_div]:text-sm">
        <div className="w-[20%]">레슨권</div>
        <div className="w-[15%]">환불일</div>
        <div className="w-[12%]">결제유형</div>
        <div className="w-[12%]">할인유형</div>
        <div className="w-[10%]">할인금액</div>
        <div className="w-[10%]">결제금액</div>
        <div className="w-[10%]">환불금액</div>
        <div className="w-[11%]" />
      </div>
      <div className="h-[calc(100%-28px)] py-2 overflow-y-auto [&_div]:text-sm">
        {data.map((item) => {
          const {
            id,
            lessonName,
            createdAt,
            type,
            discountType,
            discountPrice,
            refundPrice,
            totalPrice,
          } = item;

          return (
            <CustomerDetailPaymentRefundTableRow key={id} className="p-3">
              <div className="w-[20%] truncate whitespace-nowrap overflow-hidden text-left">
                {lessonName}
              </div>
              <div className="w-[15%]">{createdAt}</div>
              <div className="w-[12%]">{transferPaymentType(type)}</div>
              <div className="w-[12%]">
                {discountType ? transferDiscountType(discountType) : '-'}
              </div>
              <div className="w-[10%]">
                {discountPrice === 0 || !discountPrice
                  ? '-'
                  : addNumberCommas(discountPrice)}
              </div>
              <div className="w-[10%]">{addNumberCommas(totalPrice)}</div>
              <div className="w-[10%]">
                {refundPrice ? addNumberCommas(refundPrice) : '-'}
              </div>
              <button
                type="button"
                onClick={() => onClickRefundCancelHandler(id)}
                className="w-[11%] bg-blue-500 text-white font-semibold py-2 rounded-md text-sm border-0 outline-none cursor-pointer"
              >
                환불취소
              </button>
            </CustomerDetailPaymentRefundTableRow>
          );
        })}
      </div>
    </>
  );
};

export default CustomerDetailPaymentRefundRefundList;
