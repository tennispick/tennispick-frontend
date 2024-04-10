import { Suspense, useState } from 'react';
import { Button } from '@components/index';
import PaymentRefundModal from '../../../modal/PaymentRefundModal';
import Loading from '@components/common/Loading';

type Props = {
  id: string;
  checkedItems: string[];
};

const CustomerDetailPaymentHeader = ({ id, checkedItems }: Props) => {
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
              color: isDisabledRefundButton
                ? 'var(--grey300)'
                : 'var(--red200)',
              lineHeight: '24px',
              fontWeight: isDisabledRefundButton ? 500 : 600,
              cursor: isDisabledRefundButton ? 'not-allowed' : 'pointer',
            }}
            onClick={() => !isDisabledRefundButton && onClickRefundHandler}
          />
        </div>
      </div>
      {showModal && (
        <Suspense fallback={<Loading />}>
          <PaymentRefundModal
            id={id}
            type={modalType}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </Suspense>
      )}
    </>
  );
};

export default CustomerDetailPaymentHeader;
