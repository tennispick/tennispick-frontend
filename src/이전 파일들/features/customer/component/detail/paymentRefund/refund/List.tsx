import { CustomerPaymentRefundData } from 'src/이전 파일들/apis/payment/payment.type';
import { NoResult } from 'src/이전 파일들/components/index';
import CustomerDetailPaymentRefundTableRow from '../TableRow';
import {
  transferDiscountType,
  transferPaymentType,
} from '@/이전 파일들/features/customer/util/payment';
import { addNumberCommas } from 'src/이전 파일들/utils/numberForm';
import { cancelCustomerRefund } from 'src/이전 파일들/apis/payment/payment.api';
import { flex } from 'styled-system/patterns';
import { css } from 'styled-system/css';

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
      <div
        className={flex({
          height: '28px',
          alignItems: 'center',
          textAlign: 'center',
          padding: '6px 8px',
          gap: '2px',

          '& div': {
            fontSize: '0.875rem',
          },
        })}
      >
        <div className={css({ width: '20%' })}>레슨권</div>
        <div className={css({ width: '15%' })}>환불일</div>
        <div className={css({ width: '12%' })}>결제유형</div>
        <div className={css({ width: '12%' })}>할인유형</div>
        <div className={css({ width: '10%' })}>할인금액</div>
        <div className={css({ width: '10%' })}>결제금액</div>
        <div className={css({ width: '10%' })}>환불금액</div>
        <div className={css({ width: '11%' })} />
      </div>
      <div
        className={css({
          height: 'calc(100% - 28px)',
          padding: '8px 0',
          overflowY: 'auto',

          '& div': {
            fontSize: '0.875rem',
          },
        })}
      >
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
            <CustomerDetailPaymentRefundTableRow
              key={id}
              className={css({ padding: '12px 8px' })}
            >
              <div
                className={css({
                  width: '20%',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textAlign: 'left',
                })}
              >
                {lessonName}
              </div>
              <div className={css({ width: '15%' })}>{createdAt}</div>
              <div className={css({ width: '12%' })}>
                {transferPaymentType(type)}
              </div>
              <div className={css({ width: '12%' })}>
                {discountType ? transferDiscountType(discountType) : '-'}
              </div>
              <div className={css({ width: '10%' })}>
                {discountPrice === 0 || !discountPrice
                  ? '-'
                  : addNumberCommas(discountPrice)}
              </div>
              <div className={css({ width: '10%' })}>
                {addNumberCommas(totalPrice)}
              </div>
              <div className={css({ width: '10%' })}>
                {refundPrice ? addNumberCommas(refundPrice) : '-'}
              </div>
              <button
                type="button"
                onClick={() => onClickRefundCancelHandler(id)}
                className={css({
                  width: '11%',
                  backgroundColor: 'var(--business-color)',
                  color: 'var(--white100)',
                  fontWeight: 600,
                  padding: '8px 0',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  border: 0,
                  outline: 0,
                  cursor: 'pointer',
                })}
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
