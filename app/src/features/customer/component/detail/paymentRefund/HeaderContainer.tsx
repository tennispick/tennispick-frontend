import { CustomerPaymentRefundData } from 'app/src/apis/payment/payment.type';
import { PaymentRefundType } from 'app/src/features/customer/type/payment.type';
import { addNumberCommas } from 'app/src/utils/numberForm';
import { css } from 'styled-system/css';
import { Flex, styled } from 'styled-system/jsx';

type Props = {
  type: PaymentRefundType;
  data: CustomerPaymentRefundData[];
  handleShowPaymentModalClick: () => void;
};

const CustomerDetailPaymentRefundHeaderContainer = ({
  type,
  data,
  handleShowPaymentModalClick,
}: Props) => {
  const totalLength = data.length;
  const totalPrice = data.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const totalRefundPrice = data.reduce((acc, cur) => acc + cur.refundPrice, 0);

  return (
    <HeaderContainer>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <div className={css({ margin: '0 16px 0 0' })}>
            총{' '}
            <span className={css({ fontWeight: 600 })}>
              {addNumberCommas(totalLength)}
            </span>
            건
          </div>
          <div>
            총 {type === 'payment' ? '결제' : '환불'}금액 :{' '}
            <span className={css({ fontWeight: 600 })}>
              {addNumberCommas(
                type === 'payment' ? totalPrice : totalRefundPrice,
              )}
            </span>
            원
          </div>
        </Flex>
        {type === 'payment' && (
          <div
            className={css({
              color: 'var(--business-color)',
              fontWeight: 600,
              margin: '0 8px 0 0',
              cursor: 'pointer',
            })}
            onClick={handleShowPaymentModalClick}
          >
            결제하기
          </div>
        )}
      </Flex>
    </HeaderContainer>
  );
};

const HeaderContainer = styled('div', {
  base: {
    height: '48px',
    lineHeight: '24px',
    backgroundColor: 'var(--white100)',
    margin: '0 0 12px 0',
    padding: '12px',
    borderRadius: '8px',
  },
});

export default CustomerDetailPaymentRefundHeaderContainer;
