import { MouseEvent, Suspense, useState } from 'react';
import SNBList from './SNBList';
import { paymentList } from '../data/snbList';

import CustomerDetailPaymentRefundContainer from './detail/paymentRefund/Container';
import { PaymentRefundType } from '../type/payment.type';
import { CustomerPaymentRefundData } from '@apis/payment/payment.type';
import { SetStateAction } from '@/types/index';
import PaymentRefundModal from './modal/PaymentRefundModal';
import Loading from '@components/common/Loading';

type Props = {
  id: string;
};

const CustomerPayment = ({ id }: Props) => {
  const [currentItem, setCurrentItem] = useState<PaymentRefundType>(
    paymentList[0].id,
  );
  const [checkedItem, setCheckedItem] = useState<
    CustomerPaymentRefundData | undefined
  >(undefined);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<PaymentRefundType>('payment');

  const onClickOpenModalHandler = () => {
    setShowModal(true);
    setModalType('payment');
  };

  const onClickOpenRefundModalHandler = (
    e: MouseEvent<HTMLButtonElement>,
    target: CustomerPaymentRefundData,
  ) => {
    e.stopPropagation();

    setShowModal(true);
    setModalType('refund');
    setCheckedItem(target);
  };

  return (
    <section css={{ position: 'relative', width: '49%' }}>
      <SNBList
        currentItem={currentItem as string}
        setCurrentItem={setCurrentItem as SetStateAction<string>}
        tabLists={paymentList}
      />
      <div
        css={{
          position: 'relative',
          height: '50vh',
          backgroundColor: 'var(--grey400)',
          borderRadius: '16px',
          padding: '12px',
        }}
      >
        <Suspense fallback={<Loading />}>
          <CustomerDetailPaymentRefundContainer
            customerId={id}
            type={currentItem}
            onClickOpenModalHandler={onClickOpenModalHandler}
            onClickOpenRefundModalHandler={onClickOpenRefundModalHandler}
          />
        </Suspense>
      </div>
      {showModal && (
        <Suspense fallback={<Loading />}>
          <PaymentRefundModal
            id={id}
            type={modalType}
            showModal={showModal}
            setShowModal={setShowModal}
            checkedItem={checkedItem}
          />
        </Suspense>
      )}
    </section>
  );
};

export default CustomerPayment;
