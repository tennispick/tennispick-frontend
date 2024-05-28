import { CustomerPaymentRefundData } from '@apis/payment/payment.type';
import { NoResult, Portal } from '@components/index';
import CustomerDetailPaymentRefundTableRow from '../TableRow';
import {
  transferDiscountType,
  transferPaymentType,
} from '@features/customer/util/payment';
import { addNumberCommas } from '@utils/numberForm';
import { MouseEvent, useState } from 'react';
import RightSideContainer from '@components/layer/RightSideContainer';
import DrawerPayment from '../../drawer/Payment';

type Props = {
  data: CustomerPaymentRefundData[];
  onClickOpenRefundModalHandler: (
    e: MouseEvent<HTMLButtonElement>,
    target: CustomerPaymentRefundData,
  ) => void;
};

const CustomerDetailPaymentRefundPaymentList = ({
  data,
  onClickOpenRefundModalHandler,
}: Props) => {
  if (data.length === 0) return <NoResult description={'결제내역이 없어요.'} />;

  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [selectedPaymentItem, setSelectedPaymentItem] =
    useState<CustomerPaymentRefundData>();

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
        <div css={{ width: '13%' }}>결제일</div>
        <div css={{ width: '11%' }}>결제유형</div>
        <div css={{ width: '11%' }}>할인유형</div>
        <div css={{ width: '11%' }}>할인금액</div>
        <div css={{ width: '11%' }}>결제금액</div>
        <div css={{ width: '10%' }}>환불금액</div>
        <div css={{ width: '10%' }}></div>
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
            remainLessonCount,
            totalPrice,
          } = item;

          const isCompleteRefund = !refundPrice ? true : false;
          const isDisabledRefund = remainLessonCount === 0;

          const onClickPaymentRowHandler = () => {
            setShowDrawer(true);
            setSelectedPaymentItem(item);
          };

          return (
            <CustomerDetailPaymentRefundTableRow
              key={id}
              onClick={onClickPaymentRowHandler}
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
              <div css={{ width: '13%' }}>{createdAt}</div>
              <div css={{ width: '11%' }}>{transferPaymentType(type)}</div>
              <div css={{ width: '11%' }}>
                {transferDiscountType(discountType)}
              </div>
              <div css={{ width: '11%' }}>
                {discountPrice === 0 ? '-' : addNumberCommas(discountPrice)}
              </div>
              <div css={{ width: '11%' }}>{addNumberCommas(totalPrice)}</div>
              <div css={{ width: '10%' }}>
                {refundPrice ? addNumberCommas(refundPrice) : '-'}
              </div>
              {isCompleteRefund ? (
                <button
                  css={{
                    width: '10%',
                    backgroundColor: 'var(--red200)',
                    color: 'var(--white100)',
                    fontWeight: '500',
                    padding: '8px 0',
                    borderRadius: '6px',
                    border: 0,
                    cursor: 'pointer',

                    ':disabled': {
                      borderColor: 'var(--grey100)',
                      backgroundColor: 'var(--grey100)',
                      cursor: 'not-allowed',
                    },
                  }}
                  onClick={(e) => onClickOpenRefundModalHandler(e, item)}
                  disabled={isDisabledRefund}
                >
                  환불하기
                </button>
              ) : (
                <div
                  css={{ width: '10%', textAlign: 'center', fontWeight: 600 }}
                >
                  환불완료
                </div>
              )}
            </CustomerDetailPaymentRefundTableRow>
          );
        })}
      </div>
      {showDrawer && (
        <Portal id="drawer">
          <RightSideContainer
            title={`${selectedPaymentItem?.lessonName} 결제내역`}
            showRightSide={showDrawer}
            setShowRightSide={setShowDrawer}
          >
            <DrawerPayment data={selectedPaymentItem!} />
          </RightSideContainer>
        </Portal>
      )}
    </>
  );
};

export default CustomerDetailPaymentRefundPaymentList;
