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

const CustomerDetailPaymentRefundPaymentList = ({ data }: Props) => {
  if (data.length === 0) return <NoResult description={'결제내역이 없어요.'} />;

  const onClickRefundHandler = (id: number) => {
    console.log(id);
  };

  return (
    <>
      <div
        css={{
          hegiht: '36px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          margin: '0 0 12px 0',
        }}
      >
        <div css={{ width: '20%' }}>레슨권</div>
        <div css={{ width: '10%' }}>평일/주말</div>
        <div css={{ width: '10%' }}>레슨유형</div>
        <div css={{ width: '10%' }}>결제유형</div>
        <div css={{ width: '10%' }}>할인유형</div>
        <div css={{ width: '15%' }}>할인금액</div>
        <div css={{ width: '15%' }}>결제금액</div>
        <div css={{ width: '10%' }}></div>
      </div>
      <div css={{ height: 'calc(100% - 36px)', overflowY: 'auto' }}>
        {data.map(
          ({
            id,
            lessonName,
            isWeekday,
            lessonType,
            type,
            discountType,
            discountPrice,
            totalPrice,
          }) => {
            return (
              <CustomerDetailPaymentRefundTableRow key={id}>
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
                <div css={{ width: '10%' }}>
                  {isWeekday === 'weekday' ? '평일' : '주말'}
                </div>
                <div css={{ width: '10%' }}>
                  {lessonType === 'private' ? '개인' : '그룹'}
                </div>
                <div css={{ width: '10%' }}>{transferPaymentType(type)}</div>
                <div css={{ width: '10%' }}>
                  {transferDiscountType(discountType)}
                </div>
                <div css={{ width: '15%' }}>
                  {discountPrice === 0 ? '-' : addNumberCommas(discountPrice)}
                </div>
                <div css={{ width: '15%' }}>{addNumberCommas(totalPrice)}</div>
                <div
                  css={{
                    width: '10%',
                    backgroundColor: 'var(--red200)',
                    color: 'var(--white100)',
                    fontWeight: '500',
                    padding: '8px 0',
                    borderRadius: '6px',
                    cursor: 'pointer',
                  }}
                  onClick={() => onClickRefundHandler(id)}
                >
                  환불하기
                </div>
              </CustomerDetailPaymentRefundTableRow>
            );
          },
        )}
      </div>
    </>
  );
};

export default CustomerDetailPaymentRefundPaymentList;
