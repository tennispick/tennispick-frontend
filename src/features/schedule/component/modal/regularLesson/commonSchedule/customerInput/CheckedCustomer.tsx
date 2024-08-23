import CancelWhiteBtn from '@icons/cancel_white_btn.svg';
import Image from 'next/image';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

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
      className={flex({
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '80%',
        margin: '12px 0 0 0',
      })}
    >
      {customer.map(({ id, name }) => {
        return (
          <div
            key={id}
            className={flex({
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
            })}
          >
            {name}
            <Image
              id={id}
              src={CancelWhiteBtn}
              alt="close"
              className={css({ cursor: 'pointer' })}
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
