import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import CalendarIcon from '@icons/calendar/calendar';

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
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <DatePicker
        locale={ko}
        showIcon={true}
        icon={<CalendarIcon css={{ fill: 'var(--grey300)', zIndex: 99 }} />}
        css={[
          { ...calendarStyle },
          {
            borderRight: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
        ]}
        selected={startDate}
        onChange={onChangeStartDateHandler}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="yyyy.MM.dd"
      />
      <div
        css={{
          height: '40px',
          lineHeight: '40px',
          padding: '0 12px 0 0',
          borderTop: '1px solid var(--grey300)',
          borderBottom: '1px solid var(--grey300)',
        }}
      >
        {'-'}
      </div>
      <DatePicker
        locale={ko}
        showIcon={true}
        icon={<CalendarIcon css={{ fill: 'var(--grey300)', zIndex: 99 }} />}
        css={[
          { ...calendarStyle },
          {
            borderLeft: 0,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
        ]}
        selected={endDate}
        onChange={onChangeEndDateHandler}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="yyyy.MM.dd"
      />
    </div>
  );
};

export default RangeCalendar;
