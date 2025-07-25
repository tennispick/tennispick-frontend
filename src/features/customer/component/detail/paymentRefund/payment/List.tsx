import { CustomerPaymentRefundData } from '@apis/payment/payment.type';
import { NoResult, Portal } from '@/shared/components/index';
import CustomerDetailPaymentRefundTableRow from '../TableRow';
import {
  transferDiscountType,
  transferPaymentType,
} from '@features/customer/util/payment';
import { addNumberCommas } from 'src/shared/utils/numberForm';
import { MouseEvent, useState } from 'react';
import RightSideContainer from '@/shared/components/layer/RightSideContainer';
import DrawerPayment from '../../drawer/Payment';

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
        className="flex h-7 items-center text-center p-1.5 gap-0.5 [&_div]:text-sm"
      >
        <div className="w-[20%]">레슨권</div>
        <div className="w-[13%]">결제일</div>
        <div className="w-[11%]">결제유형</div>
        <div className="w-[11%]">할인유형</div>
        <div className="w-[11%]">할인금액</div>
        <div className="w-[11%]">결제금액</div>
        <div className="w-[10%]">환불금액</div>
        <div className="w-[10%]"></div>
      </div>
      <div
        className="h-[calc(100%-28px)] py-2 overflow-y-auto [&_div]:text-sm"
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
                className="w-[20%] truncate whitespace-nowrap overflow-hidden text-left"
              >
                {lessonName}
              </div>
              <div className="w-[13%]">{createdAt}</div>
              <div className="w-[11%]">
                {transferPaymentType(type)}
              </div>
              <div className="w-[11%]">
                {transferDiscountType(discountType)}
              </div>
              <div className="w-[11%]">
                {discountPrice === 0 ? '-' : addNumberCommas(discountPrice)}
              </div>
              <div className="w-[11%]">
                {addNumberCommas(totalPrice)}
              </div>
              <div className="w-[10%]">
                {refundPrice ? addNumberCommas(refundPrice) : '-'}
              </div>
              {isCompleteRefund ? (
                <button
                  className={
                    "w-[10%] bg-red-500 text-white font-semibold py-2 rounded-md border-0 cursor-pointer text-sm " +
                    "disabled:border-gray-200 disabled:bg-gray-200 disabled:cursor-not-allowed"
                  }
                  onClick={(e) => handleOpenRefundModal(e, item)}
                  disabled={isDisabledRefund}
                >
                  환불하기
                </button>
              ) : (
                <div
                  className="w-[10%] text-center font-semibold"
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