import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import CalendarIcon from '@icons/calendar/calendar';

type Props = {
  startDate: Date | null;
  endDate?: Date | null;
  handleChangeStartDate: (date: Date) => void;
  handleChangeEndDate: (date: Date) => void;
  disabled?: boolean;
};

const RangeCalendar = ({
  startDate,
  endDate,
  handleChangeStartDate,
  handleChangeEndDate,
  disabled = false,
}: Props) => {
  const calendarStyle = {
    width: '10rem',
    height: '40px',
    border: '1px solid var(--grey300)',
    borderRadius: '8px',
    padding: '6px 12px 6px 36px !important',
  };

  return (
    <div className="flex items-center">
      <DatePicker
        locale={ko}
        showIcon={true}
        icon={<CalendarIcon className="fill-[var(--grey300)]" />}
        className="!w-40 !h-10 !border !border-[var(--grey300)] !rounded-lg !pl-9 !pr-3 !py-1.5 !border-r-0 !rounded-r-none"
        selected={startDate}
        onChange={handleChangeStartDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="yyyy.MM.dd"
        disabled={disabled}
      />
      <div className="h-10 border-y border-y-[var(--grey300)] py-0 pr-3 leading-10">
        {'-'}
      </div>
      <DatePicker
        locale={ko}
        showIcon={true}
        icon={<CalendarIcon className="fill-[var(--grey300)]" />}
        className="!w-40 !h-10 !border !border-[var(--grey300)] !rounded-lg !pl-9 !pr-3 !py-1.5 !border-l-0 !rounded-l-none"
        selected={endDate}
        onChange={handleChangeEndDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="yyyy.MM.dd"
        disabled={disabled}
      />
    </div>
  );
};

export default RangeCalendar;
