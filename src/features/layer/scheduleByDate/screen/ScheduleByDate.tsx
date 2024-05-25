import { useState } from 'react';
import ScheduleByDateHeader from '../component/Header';
import useKeyEscEvent from '@hooks/useKeyEscEvent';
import ScheduleByDateTimeTable from '../component/TimeTable';
import ModalCustomer from '@components/layer/calendar/customer/Customer';
import ModalCalendar from '@components/layer/calendar/Calendar';
import { ScheduleLessonByDateData } from '@apis/schedule/schedule.type';

type Props = {
  day: Date;
  onCloseModalHandler: () => void;
};

const ScheduleByDate = ({ onCloseModalHandler, day }: Props) => {
  const [customerInfo, setCustomerInfo] =
    useState<ScheduleLessonByDateData | null>(null);
  const [customerId, setCustomerId] = useState<string>('');

  const onChangeCustomerIdHandler = (customerId: string) =>
    setCustomerId(customerId);

  const onChangeCustomerInfoHandler = (
    customerInfo: ScheduleLessonByDateData,
  ) => setCustomerInfo(customerInfo);

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
          onChangeCustomerInfoHandler={onChangeCustomerInfoHandler}
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
            day={day}
            customerId={customerId}
            customerInfo={customerInfo}
            onCloseModalHandler={onCloseModalHandler}
          />
          <ModalCalendar day={day} />
        </div>
      </div>
    </div>
  );
};

export default ScheduleByDate;
