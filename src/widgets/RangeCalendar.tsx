import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import CalendarIcon from 'src/이전 파일들/assets/icons/calendar/calendar';
import { Flex } from 'styled-system/jsx';
import { css } from 'styled-system/css';

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
    <Flex alignItems="center">
      <DatePicker
        locale={ko}
        showIcon={true}
        icon={<CalendarIcon className={css({ fill: 'var(--grey300)' })} />}
        className={css({
          ...calendarStyle,
          borderRight: '0 !important',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        })}
        selected={startDate}
        onChange={handleChangeStartDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="yyyy.MM.dd"
        disabled={disabled}
      />
      <div
        className={css({
          height: '40px',
          lineHeight: '40px',
          padding: '0 12px 0 0',
          borderTop: '1px solid var(--grey300)',
          borderBottom: '1px solid var(--grey300)',
        })}
      >
        {'-'}
      </div>
      <DatePicker
        locale={ko}
        showIcon={true}
        icon={<CalendarIcon className={css({ fill: 'var(--grey300)' })} />}
        className={css({
          ...calendarStyle,
          borderLeft: '0 !important',
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        })}
        selected={endDate}
        onChange={handleChangeEndDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="yyyy.MM.dd"
        disabled={disabled}
      />
    </Flex>
  );
};

export default RangeCalendar;
