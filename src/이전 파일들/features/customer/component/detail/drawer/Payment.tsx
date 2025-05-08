import { CustomerPaymentRefundData } from 'src/이전 파일들/apis/payment/payment.type';
import DrawerInputContainer from './InputContainer';
import { transferCategory } from '@/이전 파일들/features/customer/util/payment';
import { transferPaymentType } from '@/이전 파일들/features/customer/util/payment';
import { addNumberCommas } from 'src/이전 파일들/utils/numberForm';
import { transferDiscountType } from '@/이전 파일들/features/customer/util/payment';
import { transferRefundRange } from '@/이전 파일들/features/customer/util/payment';
import { css } from 'styled-system/css';

type Props = {
  data: CustomerPaymentRefundData;
};

const CustomerDetailDrawerPayment = ({ data }: Props) => {
  return (
    <form className={css({ height: 'calc(100% - 48px)', overflowY: 'scroll' })}>
      <DrawerInputContainer
        label="수강권 이름"
        value={data.lessonName}
        readOnly
      />
      <DrawerInputContainer
        label="유형"
        value={transferCategory(data.category)}
        readOnly
      />
      <DrawerInputContainer
        label="주말 / 평일 여부"
        value={data.isWeekday === 'weekday' ? '평일' : '주말'}
        readOnly
      />
      <DrawerInputContainer
        label="레슨유형"
        value={`${data.lessonType === 'private' ? '개인' : '그룹'} 레슨`}
        readOnly
      />
      <DrawerInputContainer
        label="결제유형"
        value={transferPaymentType(data.type)}
        readOnly
      />
      <DrawerInputContainer
        label="결제금액"
        value={addNumberCommas(data.totalPrice)}
        readOnly
      />
      <DrawerInputContainer
        label="할인유형"
        value={transferDiscountType(data.discountType)}
        className={css({
          color: data.refundPrice ? 'var(--blue100)' : 'var(--black100)',
        })}
        readOnly
      />
      <DrawerInputContainer
        label="할인금액"
        value={addNumberCommas(data.discountPrice)}
        className={css({
          color: data.refundPrice ? 'var(--blue100)' : 'var(--black100)',
        })}
        readOnly
      />
      <DrawerInputContainer
        label="환불금액"
        value={data.refundPrice ? addNumberCommas(data.refundPrice) : '0'}
        className={css({
          color: data.refundPrice ? 'var(--red100)' : 'var(--black100)',
        })}
        readOnly
      />
      <DrawerInputContainer
        label="환불유형"
        value={data.refundRange ? transferRefundRange(data.refundRange) : '-'}
        className={css({
          color: data.refundPrice ? 'var(--red100)' : 'var(--black100)',
        })}
        readOnly
      />
      <DrawerInputContainer
        label="환불 사유"
        value={data.reason ? data.reason : '-'}
        readOnly
      />
      <DrawerInputContainer
        label="총 금액"
        value={
          data.remainPrice
            ? addNumberCommas(data.remainPrice)
            : addNumberCommas(data.totalPrice)
        }
        readOnly
      />
    </form>
  );
};

export default CustomerDetailDrawerPayment;
