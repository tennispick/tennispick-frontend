import { useState } from 'react';
import { CustomerLessonType } from 'src/types/customer';
import ScheduleByDateHeader from '../component/Header';
import useKeyEscEvent from '@hooks/useKeyEscEvent';
import ScheduleByDateTimeTable from '../component/TimeTable';
import ModalCustomer from '@components/layer/calendar/customer/Customer';
import ModalCalendar from '@components/layer/calendar/Calendar';

type Props = {
  day: Date;
  onCloseModalHandler: () => void;
};

const ScheduleByDate = ({ onCloseModalHandler, day }: Props) => {
  const [customerInfo] = useState<CustomerLessonType | null>(null);
  const [customerId, setCustomerId] = useState<string>('');

  const onChangeCustomerIdHandler = (customerId: string) =>
    setCustomerId(customerId);

  useKeyEscEvent({ event: onCloseModalHandler });

  return (
    <div css={{ position: 'relative', width: '100%', height: '100%' }}>
      <ScheduleByDateHeader
        day={day}
        onCloseModalHandler={onCloseModalHandler}
        customerInfo={customerInfo}
      />
      <div
        css={{
          position: 'relative',
          height: 'calc(100% - 64px)',
          display: 'flex',
        }}
      >
        <ScheduleByDateTimeTable
          day={day}
          onChangeCustomerIdHandler={onChangeCustomerIdHandler}
        />
        <div
          css={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            width: '70%',
          }}
        >
          <ModalCustomer
            customerId={customerId}
            onCloseModalHandler={onCloseModalHandler}
          />
          <ModalCalendar day={day} />
        </div>
      </div>
    </div>
  );
};

export default ScheduleByDate;
