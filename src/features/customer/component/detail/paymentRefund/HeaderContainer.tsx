import styled from '@emotion/styled';
import {
  PaymentRefundData,
  PaymentRefundType,
} from '@features/customer/type/payment.type';
import { Button } from '@components/index';
import { SetStateAction } from '@/types/index';

type Props = {
  type: PaymentRefundType;
  checkedItems: PaymentRefundData[];
  onClickOpenModalHandler: () => void;
};

const CustomerDetailPaymentRefundHeaderContainer = ({
  type,
  checkedItems,
  onClickOpenModalHandler,
}: Props) => {
  const isDisabledRefundButton = checkedItems.length === 0;

  return (
    <HeaderContainer>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div css={{ display: 'flex', alignItems: 'center' }}>
          <div css={{ margin: '0 12px 0 0' }}>
            총 <span>7</span>건
          </div>
          <div>
            총 {type === 'payment' ? '결제' : '환불'}금액 : <span>510,000</span>
            원
          </div>
        </div>
        <div
          css={{
            color: 'var(--business-color)',
            fontWeight: 600,
            cursor: 'pointer',
          }}
          onClick={onClickOpenModalHandler}
        >
          결제하기
        </div>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div({
  position: 'relative',
  height: '48px',
  lineHeight: '24px',
  backgroundColor: 'var(--white100)',
  margin: '0 0 12px 0',
  padding: '12px',
  borderRadius: '8px',
});

export default CustomerDetailPaymentRefundHeaderContainer;
