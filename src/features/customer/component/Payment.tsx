import { useState } from 'react';
import SNBList from './SNBList';
import { paymentList } from '../data/snbList';
import SectionChildrenLayout from './SectionChildrenLayout';

type Props = {
  id: string;
};

const CustomerPayment = ({ id }: Props) => {
  console.log(id);
  const [currentItem, setCurrentItem] = useState(paymentList[0].id);

  return (
    <section css={{ position: 'relative', width: '49%' }}>
      <SNBList
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        tabLists={paymentList}
      />
      <SectionChildrenLayout
        titleChildren={
          {
            payment: <CustomerPayment.Payment />,
            refund: <CustomerPayment.Refund />,
          }[currentItem]
        }
        contentChildren={
          {
            payment: <CustomerPayment.PaymentChildren />,
            refund: <CustomerPayment.RefundChildren />,
          }[currentItem]
        }
      />
    </section>
  );
};

const Payment = () => {
  // TODO 결제하기, 환불하기 CSS 적용 및 Click Event

  const onClickPaymentHandler = () => {
    alert('결제하기');
  };

  const onClickRefundHandler = () => {
    alert('환불하기');
  };

  return (
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
          총 결제금액 : <span>510,000</span>원
        </div>
      </div>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <div
          css={{
            color: 'var(--business-color)',
            fontWeight: 600,
            cursor: 'pointer',
            margin: '0 12px 0 0',
          }}
          onClick={onClickPaymentHandler}
        >
          결제하기
        </div>
        <div
          css={{
            color: 'var(--red200)',
            fontWeight: 600,
            cursor: 'pointer',
          }}
          onClick={onClickRefundHandler}
        >
          환불하기
        </div>
      </div>
    </div>
  );
};
const PaymentChildren = () => {
  return (
    <div
      css={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      결제 내역이 없어요.
    </div>
  );
};

const Refund = () => {
  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <div css={{ margin: '0 12px 0 0' }}>
          총 <span>7</span>건
        </div>
        <div>
          총 결제금액 : <span>300,000</span>원
        </div>
      </div>
    </div>
  );
};
const RefundChildren = () => {
  return (
    <div
      css={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      환불 내역이 없어요.
    </div>
  );
};

CustomerPayment.Payment = Payment;
CustomerPayment.PaymentChildren = PaymentChildren;

CustomerPayment.Refund = Refund;
CustomerPayment.RefundChildren = RefundChildren;

export default CustomerPayment;
