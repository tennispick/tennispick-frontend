import { useState } from 'react';
import ScheduleByDateHeader from '../component/Header';
import useKeyEscEvent from '@hooks/useKeyEscEvent';
import ScheduleByDateTimeTable from '../component/TimeTable';
import ModalCustomer from '@components/layer/calendar/customer/Customer';
import ModalCalendar from '@components/layer/calendar/Calendar';
import { ScheduleLessonByDateData } from '@apis/schedule/schedule.type';
import { flex } from 'styled-system/patterns';
import { css } from 'styled-system/css';

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
    <div className={css({ width: '100%', height: '100%' })}>
      <ScheduleByDateHeader
        day={day}
        onCloseModalHandler={onCloseModalHandler}
        customerInfo={customerInfo}
      />
      <div className={flex({ height: 'calc(100% - 64px)' })}>
        <ScheduleByDateTimeTable
          day={day}
          onChangeCustomerIdHandler={onChangeCustomerIdHandler}
          onChangeCustomerInfoHandler={onChangeCustomerInfoHandler}
        />
        <div className={flex({ flexDirection: 'column', width: '70%' })}>
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
