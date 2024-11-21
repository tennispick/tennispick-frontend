import Portal from 'app/src/components/Portal';
import { Modal } from 'app/src/components/index';
import { SetStateAction } from 'app/src/types/index';
import CancelBtnIcon from '@icons/cancel_black_btn.svg';
import CustomerInfoContainer from './CustomerInfoContainer';
import PaymentContainer from './PaymentContainer';
import RefundContainer from './RefundContainer';
import { CustomerPaymentRefundData } from 'app/src/apis/payment/payment.type';
import { useLessonListQuery } from 'app/src/features/lesson/query/LessonQuery';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import Image from 'next/image';
import { styled } from 'styled-system/jsx';
import Loading from 'app/src/components/common/Loading';

type Props = {
  customerId: string;
  type: string;
  setOpenModal: SetStateAction<boolean>;
  checkedItem: CustomerPaymentRefundData | undefined;
};

const CustomerPaymentRefundModal = ({
  customerId,
  type,
  setOpenModal,
  checkedItem,
}: Props) => {
  const isPayment = type === 'payment';

  const { data, isFetching } = useLessonListQuery({
    type: 'all',
    isSuspense: true,
  });

  const totalPrice = (price: number, discountPrice: number) =>
    price - discountPrice;

  if (isFetching) return <Loading />;

  return (
    <Portal id="portal">
      <Modal
        title=""
        titleContainer={false}
        setOpenModal={setOpenModal}
        css={{
          width: 'calc(75vw - 3%)',
          height: 'calc(100vh - 5%)',
          top: '50%',
          padding: 0,
        }}
      >
        <CustomerPaymentRefundModalHeader
          isPayment={isPayment}
          setOpenModal={setOpenModal}
        />
        <CustomerInfoContainer customerId={customerId} isPayment={isPayment} />
        <div className={flex({ height: 'calc(100% - 194px)' })}>
          {
            {
              payment: (
                <PaymentContainer
                  customerId={customerId}
                  lessonList={data!}
                  totalPrice={totalPrice}
                />
              ),
              refund: (
                <RefundContainer
                  customerId={customerId}
                  checkedItem={checkedItem!}
                  lessonList={data!}
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
  setOpenModal,
}: {
  isPayment: boolean;
  setOpenModal: SetStateAction<boolean>;
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
        onClick={() => setOpenModal(false)}
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
