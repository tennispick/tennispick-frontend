import { CustomerPaymentRefundData } from 'app/src/apis/payment/payment.type';
import { NoResult, Portal } from 'app/src/components/index';
import CustomerDetailPaymentRefundTableRow from '../TableRow';
import {
  transferDiscountType,
  transferPaymentType,
} from 'app/src/features/customer/util/payment';
import { addNumberCommas } from 'app/src/utils/numberForm';
import { MouseEvent, useState } from 'react';
import RightSideContainer from 'app/src/components/layer/RightSideContainer';
import DrawerPayment from '../../drawer/Payment';
import { flex } from 'styled-system/patterns';
import { css } from 'styled-system/css';

type Props = {
  data: CustomerPaymentRefundData[];
  handleOpenRefundModal: (
    e: MouseEvent<HTMLButtonElement>,
    target: CustomerPaymentRefundData,
  ) => void;
};

const CustomerDetailPaymentRefundPaymentList = ({
  data,
  handleOpenRefundModal,
}: Props) => {
  if (data.length === 0) return <NoResult description={'결제내역이 없어요.'} />;

  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [selectedPaymentItem, setSelectedPaymentItem] =
    useState<CustomerPaymentRefundData>();

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
        <div className={css({ width: '13%' })}>결제일</div>
        <div className={css({ width: '11%' })}>결제유형</div>
        <div className={css({ width: '11%' })}>할인유형</div>
        <div className={css({ width: '11%' })}>할인금액</div>
        <div className={css({ width: '11%' })}>결제금액</div>
        <div className={css({ width: '10%' })}>환불금액</div>
        <div className={css({ width: '10%' })}></div>
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
              <div className={css({ width: '13%' })}>{createdAt}</div>
              <div className={css({ width: '11%' })}>
                {transferPaymentType(type)}
              </div>
              <div className={css({ width: '11%' })}>
                {transferDiscountType(discountType)}
              </div>
              <div className={css({ width: '11%' })}>
                {discountPrice === 0 ? '-' : addNumberCommas(discountPrice)}
              </div>
              <div className={css({ width: '11%' })}>
                {addNumberCommas(totalPrice)}
              </div>
              <div className={css({ width: '10%' })}>
                {refundPrice ? addNumberCommas(refundPrice) : '-'}
              </div>
              {isCompleteRefund ? (
                <button
                  className={css({
                    width: '10%',
                    backgroundColor: 'var(--red200)',
                    color: 'var(--white100)',
                    fontWeight: 600,
                    padding: '8px 0',
                    borderRadius: '6px',
                    border: 0,
                    cursor: 'pointer',
                    fontSize: '0.875rem',

                    _disabled: {
                      borderColor: 'var(--grey100)',
                      backgroundColor: 'var(--grey100)',
                      cursor: 'not-allowed',
                    },
                  })}
                  onClick={(e) => handleOpenRefundModal(e, item)}
                  disabled={isDisabledRefund}
                >
                  환불하기
                </button>
              ) : (
                <div
                  className={css({
                    width: '10%',
                    textAlign: 'center',
                    fontWeight: 600,
                  })}
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
