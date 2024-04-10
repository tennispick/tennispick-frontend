import { SetStateAction } from '@/types/index';

type Props = {
  checkedItems: Array<string>;
  setCheckedItems: SetStateAction<string[]>;
};

const CustomerDetailPaymentBody = ({
  checkedItems,
  setCheckedItems,
}: Props) => {
  return (
    <div
      css={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      결제 내역이 없어요.
    </div>
  );
};

export default CustomerDetailPaymentBody;
