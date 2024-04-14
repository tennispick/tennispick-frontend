import Portal from '@components/Portal';
import { Modal } from '@components/index';
import { SetStateAction } from '@/types/index';
import styled from '@emotion/styled';
import { ImageContainer as Image } from '@styles/styles';
import CancelBtnIcon from '@icons/cancel_black_btn.svg';
import CustomerInfoContainer from './CustomerInfoContainer';
import PaymentContainer from './PaymentContainer';
import RefundContainer from './RefundContainer';
import { CustomerPaymentRefundData } from '@apis/payment/payment.type';
import { useLessonListQuery } from '@features/lesson/query/LessonQuery';

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
    <Portal id={'portal'}>
      <Modal
        title={''}
        titleContainer={false}
        css={{
          width: 'calc(75vw - 3%)',
          height: 'calc(100vh - 5%)',
          top: '50%',
          padding: 0,
        }}
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <CustomerPaymentRefundModalHeader
          isPayment={isPayment}
          setShowModal={setShowModal}
        />
        <CustomerInfoContainer isPayment={isPayment} />
        <div css={{ display: 'flex', height: 'calc(100% - 194px)' }}>
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
      <span css={{ fontWeight: 600, fontSize: '1.1rem' }}>
        {isPayment ? '결제하기' : '환불하기'}
      </span>
      <Image
        src={CancelBtnIcon}
        alt={'close button'}
        width={28}
        height={28}
        cursor={'pointer'}
        onClick={() => setShowModal(false)}
      />
    </Header>
  );
};

const Header = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '64px',
  borderBottom: '1px solid var(--grey100)',
  padding: '16px 28px',
});

export default CustomerPaymentRefundModal;
