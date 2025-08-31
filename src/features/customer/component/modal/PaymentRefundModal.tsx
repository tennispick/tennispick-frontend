import Portal from '@/shared/components/Portal';
import { Modal } from '@/shared/components/index';
import { SetStateAction } from '@/types/index';
import CancelBtnIcon from '@icons/cancel_black_btn.svg';
import CustomerInfoContainer from './CustomerInfoContainer';
import PaymentContainer from './PaymentContainer';
import RefundContainer from './RefundContainer';
import { CustomerPaymentRefundData } from '@apis/payment/payment.type';
import { useLessonListQuery } from '@features/lesson/query/LessonQuery';
import Image from 'next/image';
import Loading from '@/shared/components/common/Loading';

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
        className="w-[calc(75vw-3%)] h-[calc(100vh-5%)] top-1/2 p-0"
      >
        <CustomerPaymentRefundModalHeader
          isPayment={isPayment}
          setOpenModal={setOpenModal}
        />
        <CustomerInfoContainer customerId={customerId} isPayment={isPayment} />
        <div className="flex h-[calc(100%-194px)]">
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
    <div className="flex items-center justify-between h-16 border-b border-gray-300 px-7 py-4">
      <span className="font-semibold text-lg">
        {isPayment ? '결제하기' : '환불하기'}
      </span>
      <Image
        src={CancelBtnIcon}
        alt={'close button'}
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpenModal(false)}
      />
    </div>
  );
};

export default CustomerPaymentRefundModal;
