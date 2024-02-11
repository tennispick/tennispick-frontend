import { Dispatch, SetStateAction, useState } from 'react';
import SNBList from './SNBList';
import { paymentList } from '../data/snbList';
import SectionChildrenLayout from './SectionChildrenLayout';
import { Button } from '@components/index';
import CustomerModal from './modal/CustomerModal';

type Props = {
  id: string;
};

const CustomerPayment = ({ id }: Props) => {

  const [currentItem, setCurrentItem] = useState(paymentList[0].id);
  const [checkedItems, setCheckedItems] = useState<Array<string>>([]);

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
            payment: <CustomerPayment.Payment id={id} checkedItems={checkedItems}/>,
            refund: <CustomerPayment.Refund  />,
          }[currentItem]
        }
        contentChildren={
          {
            payment: <CustomerPayment.PaymentChildren checkedItems={checkedItems} setCheckedItems={setCheckedItems} />,
            refund: <CustomerPayment.RefundChildren />,
          }[currentItem]
        }
      />
    </section>
  );
};

const Payment = ({ id, checkedItems }: { id: string; checkedItems: Array<string> }) => {

  const isDisabledRefundButton = checkedItems.length === 0;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('');

  // TODO 결제하기, 환불하기 CSS 적용 및 Click Event

  const onShowModal = (type: string) => {
    setShowModal(true);
    setModalType(type);
  };

  const onClickPaymentHandler = () => onShowModal('payment');
  const onClickRefundHandler = () => onShowModal('refund');

  return (
    <>
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
          <Button
            label={'환불하기'}
            css={{
              padding: 0,
              border: 0,
              color: 'var(--red200)',
              lineHeight: '24px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
            onClick={onClickRefundHandler}
            disabled={isDisabledRefundButton}
          />
        </div>
      </div>
      {showModal && <CustomerModal id={id} type={modalType} showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};
const PaymentChildren = ({ checkedItems, setCheckedItems }: { checkedItems: Array<string>, setCheckedItems: Dispatch<SetStateAction<Array<string>>> }) => {
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
