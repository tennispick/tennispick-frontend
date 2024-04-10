import { LessonType } from '@/types/lesson';
import { Button } from '@components/index';
import styled from '@emotion/styled';
import {
  discountTypeList,
  paymentTypeList,
} from '@features/customer/data/paymentRefund';
import { addNumberCommas } from '@utils/numberForm';

type Props = {
  type: string;
  lesson: LessonType | undefined;
  paymentType: string;
  discountType: string;
  discountPrice: number;
  totalPrice: (price: number, disCountPrice: number) => number;
};

const CustomerModalReceiptContainer = ({
  type,
  lesson,
  paymentType,
  discountType,
  discountPrice,
  totalPrice,
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
          refund: <CustomerModalReceiptContainer.RefundReceipt />,
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
              totalPrice(numberFormatPrice, numberFormatDiscountPrice),
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
              totalPrice(numberFormatPrice, numberFormatDiscountPrice),
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

const RefundReceipt = () => {
  return (
    <>
      <div
        css={{
          height: '130px',
          borderBottom: '1px solid var(--grey100)',
          padding: '0 28px',
        }}
      >
        <span
          css={{
            position: 'absolute',
            bottom: '16px',
            color: 'var(--red200)',
            fontSize: '1.3rem',
            fontWeight: 600,
          }}
        >
          환불 상세내역
        </span>
      </div>
      <div css={{ height: 'calc(55% - 129px)', padding: '36px 32px 0 28px' }}>
        <ReceiptRow>
          <div>상품명</div>
          <div>주말 그룹 레슨</div>
        </ReceiptRow>
        <ReceiptRow>
          <div>상품금액</div>
          <div>140,000 원</div>
        </ReceiptRow>
        <ReceiptRow>
          <div>결제유형</div>
          <div>카드결제</div>
        </ReceiptRow>
        <ReceiptRow>
          <div>결제금액</div>
          <div>140,000 원</div>
        </ReceiptRow>
        <ReceiptRow>
          <div>환불유형</div>
          <div>카드결제</div>
        </ReceiptRow>
        <ReceiptRow>
          <div>환불범위</div>
          <div>전액환불</div>
        </ReceiptRow>
        <ReceiptRow>
          <div>환불 예정금액</div>
          <div>140,000 원</div>
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
            환불금액
          </div>
          <div css={{ fontWeight: 600, fontSize: '1.2rem' }}>145,000 원</div>
        </ReceiptRow>
      </div>
      <Button
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
        disabled={true}
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
