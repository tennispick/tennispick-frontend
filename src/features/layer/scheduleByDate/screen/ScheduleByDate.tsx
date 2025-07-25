import { useState } from 'react';
import ScheduleByDateHeader from '../component/Header';
import useKeyEscEvent from '@hooks/useKeyEscEvent';
import ScheduleByDateTimeTable from '../component/TimeTable';
import ModalCustomer from '@/shared/components/layer/calendar/customer/Customer';
import ModalCalendar from '@/shared/components/layer/calendar/Calendar';
import { ScheduleLessonByDateData } from '@apis/schedule/schedule.type';

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
    <div className="h-full w-full">
      <ScheduleByDateHeader
        day={day}
        handleCloseModalClick={handleCloseModalClick}
        customerInfo={customerInfo}
      />
      <div className="flex h-[calc(100%_-_64px)]">
        <ScheduleByDateTimeTable
          day={day}
          onChangeCustomerIdHandler={onChangeCustomerIdHandler}
          onChangeCustomerInfoHandler={onChangeCustomerInfoHandler}
        />
        <div className="flex w-[70%] flex-col">
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
