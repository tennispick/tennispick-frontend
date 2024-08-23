import Portal from '@components/Portal';
import { Modal } from '@components/index';
import { SetStateAction } from '@/types/index';
import CancelBtnIcon from '@icons/cancel_black_btn.svg';
import CustomerInfoContainer from './CustomerInfoContainer';
import PaymentContainer from './PaymentContainer';
import RefundContainer from './RefundContainer';
import { CustomerPaymentRefundData } from '@apis/payment/payment.type';
import { useLessonListQuery } from '@features/lesson/query/LessonQuery';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import Image from 'next/image';
import { styled } from 'styled-system/jsx';

type Props = {
  id: string;
  type: string;
  showModal: boolean;
  setShowModal: SetStateAction<boolean>;
  checkedItem: CustomerPaymentRefundData | undefined;
};

const CustomerPaymentRefundModal = ({
  id,
  type,
  showModal,
  setShowModal,
  checkedItem,
}: Props) => {
  const isPayment = type === 'payment';

  const { data: lessonList } = useLessonListQuery({
    type: 'all',
    isSuspense: true,
  });

  const totalPrice = (price: number, discountPrice: number) =>
    price - discountPrice;

  return (
    <Portal id="portal">
      <Modal
        title=""
        titleContainer={false}
        className={css({
          width: 'calc(75vw - 3%)',
          height: 'calc(100vh - 5%)',
          top: '50%',
          padding: 0,
        })}
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <CustomerPaymentRefundModalHeader
          isPayment={isPayment}
          setShowModal={setShowModal}
        />
        <CustomerInfoContainer isPayment={isPayment} />
        <div className={flex({ width: 'calc(100% - 194px)' })}>
          {
            {
              payment: (
                <PaymentContainer
                  customerId={id}
                  lessonList={lessonList}
                  totalPrice={totalPrice}
                />
              ),
              refund: (
                <RefundContainer
                  customerId={id}
                  checkedItem={checkedItem!}
                  lessonList={lessonList}
                />
              ),
            }[type]
          }
        </div>
      </Modal>
    </Portal>
  );
};

const CustomerPaymentRefundModalHeader = ({
  isPayment,
  setShowModal,
}: {
  isPayment: boolean;
  setShowModal: SetStateAction<boolean>;
}) => {
  return (
    <Header>
      <span className={css({ fontWeight: 600, fontSize: '1.1rem' })}>
        {isPayment ? '결제하기' : '환불하기'}
      </span>
      <Image
        src={CancelBtnIcon}
        alt={'close button'}
        width={28}
        height={28}
        className={css({ cursor: 'pointer' })}
        onClick={() => setShowModal(false)}
      />
    </Header>
  );
};

const Header = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px',
    borderBottom: '1px solid var(--grey100)',
    padding: '16px 28px',
  },
});

export default CustomerPaymentRefundModal;
