import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import CalendarIcon from '@icons/calendar/calendar';
import { Flex } from 'styled-system/jsx';
import { css } from 'styled-system/css';

type Props = {
  startDate: Date | null;
  endDate?: Date | null;
  onChangeStartDateHandler: (date: Date) => void;
  onChangeEndDateHandler: (date: Date) => void;
};

const RangeCalendar = ({
  startDate,
  endDate,
  onChangeStartDateHandler,
  onChangeEndDateHandler,
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
        icon={
          <CalendarIcon
            className={css({ fill: 'var(--grey300)', zIndex: 99 })}
          />
        }
        className={css({
          ...calendarStyle,
          borderRight: 0,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        })}
        selected={startDate}
        onChange={onChangeStartDateHandler}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="yyyy.MM.dd"
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
        icon={
          <CalendarIcon
            className={css({ fill: 'var(--grey300)', zIndex: 99 })}
          />
        }
        className={css({
          ...calendarStyle,
          borderRight: 0,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        })}
        selected={endDate}
        onChange={onChangeEndDateHandler}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="yyyy.MM.dd"
      />
    </Flex>
  );
};

export default RangeCalendar;
