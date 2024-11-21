import { MouseEvent, Suspense, useState } from 'react';
import SNBList from './SNBList';
import { paymentList } from '../data/snbList';

import CustomerDetailPaymentRefundContainer from './detail/paymentRefund/Container';
import { PaymentRefundType } from '../type/payment.type';
import { CustomerPaymentRefundData } from 'app/src/apis/payment/payment.type';
import { SetStateAction } from 'app/src/types/index';
import PaymentRefundModal from './modal/PaymentRefundModal';
import Loading from 'app/src/components/common/Loading';
import { css } from 'styled-system/css';

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

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<PaymentRefundType>('payment');

  const handleShowPaymentModalClick = () => {
    setOpenModal(true);
    setModalType('payment');
  };

  const handleOpenRefundModal = (
    e: MouseEvent<HTMLButtonElement>,
    target: CustomerPaymentRefundData,
  ) => {
    e.stopPropagation();

    setOpenModal(true);
    setModalType('refund');
    setCheckedItem(target);
  };

  return (
    <section className={css({ width: '49%' })}>
      <SNBList
        currentItem={currentItem as string}
        setCurrentItem={setCurrentItem as SetStateAction<string>}
        tabLists={paymentList}
      />
      <div
        className={css({
          height: '50vh',
          backgroundColor: 'var(--grey400)',
          borderRadius: '16px',
          padding: '12px',
        })}
      >
        <Suspense fallback={<Loading />}>
          <CustomerDetailPaymentRefundContainer
            customerId={id}
            type={currentItem}
            handleShowPaymentModalClick={handleShowPaymentModalClick}
            handleOpenRefundModal={handleOpenRefundModal}
          />
        </Suspense>
      </div>
      {openModal && (
        <Suspense fallback={<Loading />}>
          <PaymentRefundModal
            customerId={id}
            type={modalType}
            setOpenModal={setOpenModal}
            checkedItem={checkedItem}
          />
        </Suspense>
      )}
    </section>
  );
};

export default CustomerPayment;
