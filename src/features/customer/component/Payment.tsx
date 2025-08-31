import { MouseEvent, Suspense, useState } from 'react';
import SNBList from './SNBList';
import { paymentList } from '../data/snbList';

import CustomerDetailPaymentRefundContainer from './detail/paymentRefund/Container';
import { PaymentRefundType } from '../type/payment.type';
import { CustomerPaymentRefundData } from '@apis/payment/payment.type';
import { SetStateAction } from '@/types/index';
import PaymentRefundModal from './modal/PaymentRefundModal';
import Loading from '@/shared/components/common/Loading';

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
    <section className="w-[49%]">
      <SNBList
        currentItem={currentItem as string}
        setCurrentItem={setCurrentItem as SetStateAction<string>}
        tabLists={paymentList}
      />
      <div className="h-[50vh] bg-gray-200 rounded-2xl p-3">
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
