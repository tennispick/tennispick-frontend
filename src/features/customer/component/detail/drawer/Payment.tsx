import { CustomerPaymentRefundData } from '@apis/payment/payment.type';
import DrawerInputContainer from './InputContainer';
import { transferCategory } from '@features/customer/util/payment';
import { transferPaymentType } from '@features/customer/util/payment';
import { addNumberCommas } from '@utils/numberForm';
import { transferDiscountType } from '@features/customer/util/payment';
import { transferRefundRange } from '@features/customer/util/payment';

type Props = {
  data: CustomerPaymentRefundData;
};

const CustomerDetailDrawerPayment = ({ data }: Props) => {
  return (
    <form>
      <DrawerInputContainer label="수강권 이름" value={data.lessonName} />
      <DrawerInputContainer
        label="유형"
        value={transferCategory(data.category)}
      />
      <DrawerInputContainer
        label="주말 / 평일 여부"
        value={data.isWeekday === 'weekday' ? '평일' : '주말'}
      />
      <DrawerInputContainer
        label="레슨유형"
        value={`${data.lessonType === 'private' ? '개인' : '그룹'} 레슨`}
      />
      <DrawerInputContainer
        label="결제유형"
        value={transferPaymentType(data.type)}
      />
      <DrawerInputContainer
        label="결제금액"
        value={addNumberCommas(data.totalPrice)}
      />
      <DrawerInputContainer
        label="할인유형"
        value={transferDiscountType(data.discountType)}
        css={{ color: data.refundPrice ? 'var(--blue100)' : 'var(--black100)' }}
      />
      <DrawerInputContainer
        label="할인금액"
        value={addNumberCommas(data.discountPrice)}
        css={{ color: data.refundPrice ? 'var(--blue100)' : 'var(--black100)' }}
      />
      <DrawerInputContainer
        label="환불금액"
        value={data.refundPrice ? addNumberCommas(data.refundPrice) : '0'}
        css={{ color: data.refundPrice ? 'var(--red100)' : 'var(--black100)' }}
      />
      <DrawerInputContainer
        label="환불유형"
        value={data.refundRange ? transferRefundRange(data.refundRange) : '-'}
        css={{ color: data.refundPrice ? 'var(--red100)' : 'var(--black100)' }}
      />
      <DrawerInputContainer
        label="환불 사유"
        value={data.reason ? data.reason : '-'}
      />
      <DrawerInputContainer
        label="총 금액"
        value={
          data.remainPrice
            ? addNumberCommas(data.remainPrice)
            : addNumberCommas(data.totalPrice)
        }
      />
    </form>
  );
};

export default CustomerDetailDrawerPayment;
