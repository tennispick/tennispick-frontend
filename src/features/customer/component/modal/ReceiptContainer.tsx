import { Button } from '@components/index';
import styled from '@emotion/styled';
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
import { addNumberCommas } from '@utils/numberForm';

type Props = {
  type: PaymentRefundType;
  lesson: LessonListQueryData | undefined;
  paymentType: string;
  discountType: string;
  discountPrice: number;
  totalPrice?: (price: number, disCountPrice: number) => number;
  price?: number;
  refundType?: string;
  refundRange?: string;
  refundPrice?: number;
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
  price,
}: Props) => {
  return (
    <div css={{ position: 'relative', width: '30%', height: '100%' }}>
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
              paymentType={paymentType}
              refundType={refundType}
              refundRange={refundRange}
              refundPrice={refundPrice}
              price={price}
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
      <div css={{ height: '45%', padding: '36px 32px 0 28px' }}>
        <ReceiptRow>
          <div>상품명</div>
          <div>{lesson?.name}</div>
        </ReceiptRow>
        <ReceiptRow>
          <div>결제유형</div>
          <div>
            {paymentTypeList.find(({ value }) => value === paymentType)
              ?.label || ''}
          </div>
        </ReceiptRow>
        <ReceiptRow>
          <div>상품금액</div>
          <div>{lesson?.price} 원</div>
        </ReceiptRow>
        <ReceiptRow>
          <div>할인유형</div>
          <div>
            {discountTypeList.find(({ value }) => value === discountType)
              ?.label || ''}
          </div>
        </ReceiptRow>
        <ReceiptRow>
          <div>할인금액</div>
          <div>
            {addNumberCommas(discountPrice) === ''
              ? 0
              : addNumberCommas(discountPrice)}{' '}
            원
          </div>
        </ReceiptRow>
        <ReceiptRow>
          <div>결제 예정금액</div>
          <div>
            {addNumberCommas(
              totalPrice!(numberFormatPrice, numberFormatDiscountPrice),
            )}{' '}
            원
          </div>
        </ReceiptRow>
      </div>
      <div
        css={{
          position: 'relative',
          height: '96px',
          padding: '36px 32px 0 28px',
          borderTop: '1px solid var(--grey100)',
        }}
      >
        <ReceiptRow>
          <div
            css={{
              fontWeight: 600,
              fontSize: '1.2rem',
              color: 'var(--red200)',
            }}
          >
            결제 예정금액
          </div>
          <div css={{ fontWeight: 600, fontSize: '1.2rem' }}>
            {addNumberCommas(
              totalPrice!(numberFormatPrice, numberFormatDiscountPrice),
            )}{' '}
            원
          </div>
        </ReceiptRow>
      </div>
      <Button
        type="submit"
        label="결제하기"
        css={{
          position: 'absolute',
          width: 'calc(100% - 56px)',
          bottom: '24px',
          left: '28px',
          backgroundColor: 'var(--business-active-color)',
          color: 'var(--white100)',
          border: 0,
        }}
      />
    </>
  );
};

const RefundReceipt = ({
  lesson,
  paymentType,
  refundType,
  refundRange,
  refundPrice,
  price,
}: Pick<
  Props,
  | 'lesson'
  | 'paymentType'
  | 'refundType'
  | 'refundRange'
  | 'refundPrice'
  | 'price'
>) => {
  return (
    <>
      <div css={{ height: '50%', padding: '36px 32px 0 28px' }}>
        <ReceiptRow>
          <div>상품명</div>
          <div>{lesson?.name}</div>
        </ReceiptRow>
        <ReceiptRow>
          <div>상품금액</div>
          <div>
            {addNumberCommas(Number(lesson!.price.replaceAll(',', '')))} 원
          </div>
        </ReceiptRow>
        <ReceiptRow>
          <div>결제유형</div>
          <div>{transferPaymentType(paymentType!)}</div>
        </ReceiptRow>
        <ReceiptRow>
          <div>결제금액</div>
          <div>{addNumberCommas(Number(price))}원</div>
        </ReceiptRow>
        <ReceiptRow css={{ color: 'var(--red200)' }}>
          <div>환불유형</div>
          <div>{transferPaymentType(refundType!)}</div>
        </ReceiptRow>
        <ReceiptRow css={{ color: 'var(--red200)' }}>
          <div>환불범위</div>
          <div>{transferRefundRange(refundRange!)}</div>
        </ReceiptRow>
        <ReceiptRow css={{ color: 'var(--red200)' }}>
          <div>환불금액</div>
          <div>{addNumberCommas(refundPrice!)} 원</div>
        </ReceiptRow>
      </div>
      <div
        css={{
          position: 'relative',
          height: '96px',
          padding: '36px 32px 0 28px',
          borderTop: '1px solid var(--grey100)',
        }}
      >
        <ReceiptRow>
          <div
            css={{
              fontWeight: 600,
              fontSize: '1.2rem',
              color: 'var(--red200)',
            }}
          >
            예정 환불금액
          </div>
          <div css={{ fontWeight: 600, fontSize: '1.2rem' }}>
            {addNumberCommas(refundPrice!)} 원
          </div>
        </ReceiptRow>
      </div>
      <Button
        type="submit"
        label="환불하기"
        css={{
          position: 'absolute',
          width: 'calc(100% - 56px)',
          bottom: '24px',
          left: '28px',
          backgroundColor: 'var(--red200)',
          color: 'var(--white100)',
          border: 0,
        }}
        disabled={refundPrice! <= 0}
      />
    </>
  );
};

const ReceiptRow = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '1.05rem',
  margin: '0 0 20px 0',
});

CustomerModalReceiptContainer.PaymentReceipt = PaymentReceipt;
CustomerModalReceiptContainer.RefundReceipt = RefundReceipt;

export default CustomerModalReceiptContainer;
