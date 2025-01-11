import { useState } from 'react';
import ScheduleByDateHeader from '../component/Header';
import useKeyEscEvent from 'src/이전 파일들/hooks/useKeyEscEvent';
import ScheduleByDateTimeTable from '../component/TimeTable';
import ModalCustomer from 'src/이전 파일들/components/layer/calendar/customer/Customer';
import ModalCalendar from 'src/이전 파일들/components/layer/calendar/Calendar';
import { ScheduleLessonByDateData } from 'src/이전 파일들/apis/schedule/schedule.type';
import { flex } from 'styled-system/patterns';
import { css } from 'styled-system/css';

type Props = {
  day: Date;
  handleCloseModalClick: () => void;
};

const ScheduleByDate = ({ handleCloseModalClick, day }: Props) => {
  const [customerInfo, setCustomerInfo] =
    useState<ScheduleLessonByDateData | null>(null);
  const [customerId, setCustomerId] = useState<string>('');

  const onChangeCustomerIdHandler = (customerId: string) =>
    setCustomerId(customerId);

  const onChangeCustomerInfoHandler = (
    customerInfo: ScheduleLessonByDateData,
  ) => setCustomerInfo(customerInfo);

  useKeyEscEvent({ event: handleCloseModalClick });

  return (
    <div className={css({ width: '100%', height: '100%' })}>
      <ScheduleByDateHeader
        day={day}
        handleCloseModalClick={handleCloseModalClick}
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
            handleCloseModalClick={handleCloseModalClick}
          />
          <ModalCalendar day={day} />
        </div>
      </div>
    </div>
  );
};

export default ScheduleByDate;
