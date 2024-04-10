import Portal from '@components/Portal';
import { Modal } from '@components/index';
import styled from '@emotion/styled';
import { ImageContainer as Image } from '@styles/styles';
import { Dispatch, FormEvent, SetStateAction } from 'react';
import CancelBtnIcon from '@icons/cancel_black_btn.svg';
import CustomerInfoContainer from './CustomerInfoContainer';
import PaymentContainer from './PaymentContainer';
import RefundContainer from './RefundContainer';
import { useLessonListQuery } from '@features/lesson/query/LessonQuery';
import { createCustomerPayment } from '@apis/customer/customer.api';
import { useRouter } from 'next/navigation';

type Props = {
  id: string;
  type: string;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const CustomerPaymentRefundModal = ({
  id,
  type,
  showModal,
  setShowModal,
}: Props) => {
  const isPayment = type === 'payment';

  const router = useRouter();
  const { data: lessonList } = useLessonListQuery({ type: 'all' });

  const totalPrice = (price: number, discountPrice: number) =>
    price - discountPrice;

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const { discountPrice } = Object.fromEntries(formData.entries());
    const price = lessonList
      .find(({ id }: { id: number }) => id === Number(formData.get('name')))
      .price.replaceAll(',', '');

    formData.append('type', type);
    formData.append('customerId', id);
    formData.append(
      'price',
      totalPrice(Number(price), Number(discountPrice)).toString(),
    );

    const { data } = await createCustomerPayment(formData);
    if (data.affectedRows > 0)
      alert('결제가 성공적으로 진행되었어요.\n스케줄 등록을 진행해주세요.');
    else alert('결제에 실패했어요.\n관리자에게 문의해주세요.');

    router.refresh();
  };

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
        <CustomerPaymentRefundModalHeader isPayment={isPayment} />
        <CustomerInfoContainer isPayment={isPayment} />
        <form
          css={{ display: 'flex', height: 'calc(100% - 194px)' }}
          onSubmit={onSubmitHandler}
        >
          {
            {
              payment: (
                <PaymentContainer
                  lessonList={lessonList}
                  totalPrice={totalPrice}
                />
              ),
              refund: <RefundContainer />,
            }[type]
          }
        </form>
      </Modal>
    </Portal>
  );
};

const CustomerPaymentRefundModalHeader = ({
  isPayment,
}: {
  isPayment: boolean;
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
        // onClick={() => setShowModal(false)}
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
