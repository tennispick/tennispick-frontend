import { PaymentType } from '@/types/payment';
import { Button } from '@/shared/components/index';
import {
  discountTypeList,
  paymentTypeList,
} from '@features/customer/data/paymentRefund';
import { PaymentRefundType } from '@features/customer/type/payment.type';
import {
  transferPaymentType,
  transferRefundRange,
} from '@features/customer/util/payment';
import { LessonListQueryData } from '@features/lesson/type/lesson.type';
import { addNumberCommas } from 'src/shared/utils/numberForm';

type Props = {
  type: PaymentRefundType;
  lesson: LessonListQueryData | undefined;
  lessonName?: string;
  paymentType: PaymentType;
  discountType: string;
  discountPrice: number;
  totalPrice?: (price: number, disCountPrice: number) => number;
  price?: number;
  refundType?: PaymentType;
  refundRange?: string;
  refundPrice?: number;
  onClickRefundHandler?: () => void;
};

const CustomerModalReceiptContainer = ({
  type,
  lesson,
  paymentType,
  discountType,
  discountPrice,
  refundType,
  refundRange,
  refundPrice,
  totalPrice,
  lessonName,
  price,
  onClickRefundHandler,
}: Props) => {
  return (
    <div className="relative w-[30%] h-full">
      {
        {
          payment: (
            <CustomerModalReceiptContainer.PaymentReceipt
              lesson={lesson}
              paymentType={paymentType}
              discountType={discountType}
              discountPrice={discountPrice}
              totalPrice={totalPrice}
            />
          ),
          refund: (
            <CustomerModalReceiptContainer.RefundReceipt
              lesson={lesson}
              lessonName={lessonName}
              paymentType={paymentType}
              refundType={refundType}
              refundRange={refundRange}
              refundPrice={refundPrice}
              price={price}
              onClickRefundHandler={onClickRefundHandler}
            />
          ),
        }[type]
      }
    </div>
  );
};

const PaymentReceipt = ({
  lesson,
  paymentType,
  discountType,
  discountPrice,
  totalPrice,
}: Pick<
  Props,
  'lesson' | 'paymentType' | 'discountType' | 'discountPrice' | 'totalPrice'
>) => {
  const numberFormatPrice = Number(lesson?.price?.replaceAll(',', ''));
  const numberFormatDiscountPrice = Number(discountPrice);

  return (
    <>
      <div className="h-[45%] pt-6 px-8 pr-7">
        <div className="flex items-center justify-between text-lg mb-5">
          <div>상품명</div>
          <div>{lesson?.name}</div>
        </div>
        <div className="flex items-center justify-between text-lg mb-5">
          <div>결제유형</div>
          <div>
            {paymentTypeList.find(({ value }) => value === paymentType)
              ?.label || ''}
          </div>
        </div>
        <div className="flex items-center justify-between text-lg mb-5">
          <div>상품금액</div>
          <div>{lesson?.price} 원</div>
        </div>
        <div className="flex items-center justify-between text-lg mb-5">
          <div>할인유형</div>
          <div>
            {discountTypeList.find(({ value }) => value === discountType)
              ?.label || ''}
          </div>
        </div>
        <div className="flex items-center justify-between text-lg mb-5">
          <div>할인금액</div>
          <div>
            {addNumberCommas(discountPrice) === ''
              ? 0
              : addNumberCommas(discountPrice)}{' '}
            원
          </div>
        </div>
        <div className="flex items-center justify-between text-lg mb-5">
          <div>결제 예정금액</div>
          <div>
            {addNumberCommas(
              totalPrice!(numberFormatPrice, numberFormatDiscountPrice),
            )}{' '}
            원
          </div>
        </div>
      </div>
      <div className="h-24 pt-6 px-8 pr-7 border-t border-gray-300">
        <div className="flex items-center justify-between text-lg mb-5">
          <div className="font-semibold text-xl text-red-400">
            결제 예정금액
          </div>
          <div className="font-semibold text-xl">
            {addNumberCommas(
              totalPrice!(numberFormatPrice, numberFormatDiscountPrice),
            )}{' '}
            원
          </div>
        </div>
      </div>
      <Button
        type="submit"
        label="결제하기"
        className="absolute w-[calc(100%-56px)] bottom-6 left-7 bg-sky-400 text-white border-0"
      />
    </>
  );
};

const RefundReceipt = ({
  lesson,
  lessonName,
  paymentType,
  refundType,
  refundRange,
  refundPrice,
  price,
  onClickRefundHandler,
}: Pick<
  Props,
  | 'lesson'
  | 'lessonName'
  | 'paymentType'
  | 'refundType'
  | 'refundRange'
  | 'refundPrice'
  | 'price'
  | 'onClickRefundHandler'
>) => {
  return (
    <>
      <div className="h-1/2 pt-6 px-8 pr-7">
        <div className="flex items-center justify-between text-lg mb-5">
          <div>상품명</div>
          <div>{lesson?.name ?? lessonName}</div>
        </div>
        <div className="flex items-center justify-between text-lg mb-5">
          <div>상품금액</div>
          <div>
            {addNumberCommas(
              lesson?.price
                ? Number(lesson?.price.replaceAll(',', ''))
                : price!,
            )}{' '}
            원
          </div>
        </div>
        <div className="flex items-center justify-between text-lg mb-5">
          <div>결제유형</div>
          <div>{transferPaymentType(paymentType!)}</div>
        </div>
        <div className="flex items-center justify-between text-lg mb-5">
          <div>결제금액</div>
          <div>{addNumberCommas(Number(price))}원</div>
        </div>
        <div className="flex items-center justify-between text-lg mb-5 text-red-400">
          <div>환불유형</div>
          <div>{transferPaymentType(refundType!)}</div>
        </div>
        <div className="flex items-center justify-between text-lg mb-5 text-red-400">
          <div>환불범위</div>
          <div>{transferRefundRange(refundRange!)}</div>
        </div>
        <div className="flex items-center justify-between text-lg mb-5 text-red-400">
          <div>환불금액</div>
          <div>{addNumberCommas(refundPrice!)} 원</div>
        </div>
      </div>
      <div className="h-24 pt-6 px-8 pr-7 border-t border-gray-300">
        <div className="flex items-center justify-between text-lg mb-5">
          <div className="font-semibold text-xl text-red-400">
            예정 환불금액
          </div>
          <div className="font-semibold text-xl">
            {addNumberCommas(refundPrice!)} 원
          </div>
        </div>
      </div>
      <Button
        label="환불하기"
        className="absolute w-[calc(100%-56px)] bottom-6 left-7 bg-red-400 text-white border-0"
        disabled={refundPrice! <= 0}
        onClick={onClickRefundHandler}
      />
    </>
  );
};

CustomerModalReceiptContainer.PaymentReceipt = PaymentReceipt;
CustomerModalReceiptContainer.RefundReceipt = RefundReceipt;

export default CustomerModalReceiptContainer;
