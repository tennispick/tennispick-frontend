import { Dispatch, Suspense, useState } from 'react';
import SNBList from './SNBList';
import { paymentList } from '../data/snbList';
import SectionChildrenLayout from './SectionChildrenLayout';
import CustomerDetailPaymentHeader from './detail/paymentRefund/payment/header';
import CustomerDetailRefundHeader from './detail/paymentRefund/refund/header';
import CustomerDetailRefundBody from './detail/paymentRefund/refund/body';
import CustomerDetailPaymentBody from './detail/paymentRefund/payment/body';
import CustomerDetailPaymentRefundContainer from './detail/paymentRefund/Container';
import { PaymentRefundData, PaymentRefundType } from '../type/payment.type';
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
  const [checkedItems, setCheckedItems] = useState<PaymentRefundData[] | []>(
    [],
  );
  const [showModal, setShowModal] = useState<boolean>(false);

  const onClickOpenModalHandler = () => setShowModal(true);

  return (
    <section css={{ position: 'relative', width: '49%' }}>
      <SNBList
        currentItem={currentItem as string}
        setCurrentItem={setCurrentItem as SetStateAction<string>}
        tabLists={paymentList}
      />
      <CustomerDetailPaymentRefundContainer
        type={currentItem}
        checkedItems={checkedItems}
        onClickOpenModalHandler={onClickOpenModalHandler}
      />
      {showModal && (
        <Suspense fallback={<Loading />}>
          <PaymentRefundModal
            id={id}
            type={'payment'}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </Suspense>
      )}
      {/* <SectionChildrenLayout
        headerChildren={
          {
            payment: (
              <CustomerDetailPaymentHeader id={id} checkedItems={checkedItems} />
            ),
            refund: <CustomerDetailRefundHeader />,
          }[currentItem]
        }
        bodyChildren={
          {
            payment: (
              <CustomerDetailPaymentBody
                checkedItems={checkedItems}
                setCheckedItems={setCheckedItems}
              />
            ),
            refund: <CustomerDetailRefundBody />,
          }[currentItem]
        }
      /> */}
    </section>
  );
};

export default CustomerPayment;
