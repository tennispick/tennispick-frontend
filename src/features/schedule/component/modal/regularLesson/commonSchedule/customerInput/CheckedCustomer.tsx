import CancelWhiteBtn from '@icons/cancel_white_btn.svg';
import Image from 'next/image';

type Props = {
  customer: { id: string; name: string }[];
  onClickCancelCustomerHandler: (id: string) => void;
};

const ScheduleModalRegularLessonCommonScheduleCustomerInputCheckedCustomer = ({
  customer,
  onClickCancelCustomerHandler,
}: Props) => {
  return (
    <ul
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '80%',
        margin: '12px 0 0 0',
      }}
    >
      {customer.map(({ id, name }) => {
        return (
          <div
            key={id}
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              width: '48%',
              margin: '8px 0 0 0',
              padding: '8px 0',
              textAlign: 'center',
              backgroundColor: 'var(--blue100)',
              color: 'var(--white100)',
              borderRadius: '8px',
            }}
          >
            {name}
            <Image
              id={id}
              src={CancelWhiteBtn}
              alt="close"
              css={{
                cursor: 'pointer',
              }}
              width={20}
              height={20}
              onClick={() => onClickCancelCustomerHandler(id)}
            />
          </div>
        );
      })}
    </ul>
  );
};

export default ScheduleModalRegularLessonCommonScheduleCustomerInputCheckedCustomer;
