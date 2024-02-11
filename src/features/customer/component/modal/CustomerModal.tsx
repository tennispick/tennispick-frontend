import Portal from '@components/Portal';
import { Modal } from '@components/index';
import styled from '@emotion/styled';
import { ImageContainer as Image } from '@styles/styles';
import { Dispatch, SetStateAction } from 'react';
import CancelBtnIcon from '@icons/cancel_black_btn.svg';
import ReceiptContainer from './ReceiptContainer';
import CustomerInfoContainer from './CustomerInfoContainer';
import PaymentContainer from './PaymentContainer';
import RefundContainer from './RefundContainer';

type Props = {
  id: string;
  type: string;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const CustomerModal = ({ id, type, showModal, setShowModal }: Props) => {
  const isPayment = type === 'payment';

  return (
    <Portal id={'portal'}>
      <Modal
        title={''}
        titleContainer={false}
        css={{
          width: 'calc(100vw - 3%)',
          height: 'calc(100vh - 5%)',
          top: '50%',
          padding: 0,
        }}
        showModal={showModal}
        setShowModal={setShowModal}
      >
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
        <form css={{ display: 'flex', height: 'calc(100% - 65px)' }}>
          <div
            css={{
              position: 'relative',
              width: '70%',
              height: '100%',
              borderRight: '1px solid var(--grey100)',
            }}
          >
            <CustomerInfoContainer />
            {
              {
                payment: <PaymentContainer />,
                refund: <RefundContainer />,
              }[type]
            }
          </div>
          <ReceiptContainer type={type} />
        </form>
      </Modal>
    </Portal>
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

export default CustomerModal;
