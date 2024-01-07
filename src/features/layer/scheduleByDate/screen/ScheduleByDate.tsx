import { Dispatch, SetStateAction, useState } from "react";
import { CustomerLessonType } from 'src/types/customer';
import ScheduleByDateHeader from "../component/Header";
import useKeyEscEvent from '@hooks/useKeyEscEvent';
import ScheduleByDateTimeTable from "../component/TimeTable";
import ModalCustomer from "@components/layer/calendar/Customer";
import ModalCalendar from "@components/layer/calendar/Calendar";

type Props = {
  day: Date;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const ScheduleByDate = ({ setShowModal, day }: Props) => {

  const [ customerInfo, setCustomerInfo ] = useState<CustomerLessonType | null>(null);

  useKeyEscEvent({ event: () => setShowModal(false) });

  return(
    <div css={{ position: 'relative', width: '100%', height: '100%' }}>
      <ScheduleByDateHeader day={day} setShowModal={setShowModal} customerInfo={customerInfo} />
      <div css={{
        position: 'relative',
        height: 'calc(100% - 64px)',
        display: 'flex',
      }}>
        <ScheduleByDateTimeTable day={day} />
        <div css={{ position: 'relative', display: 'flex', flexDirection: 'column', width: '70%' }}>
          <ModalCustomer
            customerInfo={customerInfo}
          />
          <ModalCalendar
            day={day}
          />
        </div>
      </div>
    </div>
  )
};

export default ScheduleByDate;