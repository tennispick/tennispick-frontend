import { CustomerPaymentRefundData } from '@apis/payment/payment.type';
import { NoResult } from '@components/index';
import CustomerDetailPaymentRefundTableRow from '../TableRow';
import {
  transferDiscountType,
  transferPaymentType,
} from '@features/customer/util/payment';
import { addNumberCommas } from '@utils/numberForm';

type Props = {
  data: CustomerPaymentRefundData[];
};

const CustomerDetailPaymentRefundRefundList = ({ data }: Props) => {
  if (data.length === 0) return <NoResult description={'환불내역이 없어요.'} />;

  return (
    <>
      <div
        css={{
          height: '28px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          fontSize: '0.9rem',
          padding: '6px 8px',
          gap: '2px',
        }}
      >
        <div css={{ width: '20%' }}>레슨권</div>
        <div css={{ width: '15%' }}>환불일</div>
        <div css={{ width: '13%' }}>결제유형</div>
        <div css={{ width: '13%' }}>할인유형</div>
        <div css={{ width: '13%' }}>할인금액</div>
        <div css={{ width: '13%' }}>결제금액</div>
        <div css={{ width: '13%' }}>환불금액</div>
      </div>
      <div
        css={{
          height: 'calc(100% - 28px)',
          padding: '8px 0',
          overflowY: 'auto',
          fontSize: '0.9rem',
        }}
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
              css={{
                padding: '12px 8px',
              }}
            >
              <div
                css={{
                  width: '20%',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textAlign: 'left',
                }}
              >
                {lessonName}
              </div>
              <div css={{ width: '15%' }}>{createdAt}</div>
              <div css={{ width: '13%' }}>{transferPaymentType(type)}</div>
              <div css={{ width: '13%' }}>
                {discountType ? transferDiscountType(discountType) : '-'}
              </div>
              <div css={{ width: '13%' }}>
                {discountPrice === 0 || !discountPrice
                  ? '-'
                  : addNumberCommas(discountPrice)}
              </div>
              <div css={{ width: '13%' }}>{addNumberCommas(totalPrice)}</div>
              <div css={{ width: '13%' }}>
                {refundPrice ? addNumberCommas(refundPrice) : '-'}
              </div>
            </CustomerDetailPaymentRefundTableRow>
          );
        })}
      </div>
    </>
  );
};

export default CustomerDetailPaymentRefundRefundList;
