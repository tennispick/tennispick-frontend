import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import { styled } from 'styled-system/jsx';

const Calendar = ({ ...props }) => {
  const { onClick, ...rest } = props;

  return (
    <CalendarContainer
      locale={'ko-kr'}
      calendarType={'gregory'}
      formatDay={(locale, date) => dayjs(date).format('DD')}
      onClickDay={(e) => onClick(e)}
      {...rest}
    />
  );
};

const CalendarContainer = styled(ReactCalendar, {
  base: {
    position: 'absolute',
    width: '236px !important',
    bottom: '12px',
    color: 'var(--black100)',
    borderRadius: '8px',
    border: '0 !important',
    boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
    padding: '12px',

    '& .react-calendar__navigation': {
      display: 'flex !important',
      height: '32px !important',
      marginBottom: '0.5em !important',
    },

    '& .react-calendar__navigation button': {
      minWidth: '32px !important',
      background: 'none !important',
    },

    // 요일
    '& .react-calendar__month-view__weekdays__weekday': {
      _first: {
        color: 'var(--red100) !important',
      },
      _last: {
        color: 'var(--blue100) !important',
      },

      '& abbr': {
        fontSize: '14px',
        fontWeight: 500,
        textDecoration: 'none',
      },
    },

    // 일
    '& .react-calendar__month-view__days__day': {
      '&:nth-of-type(7n + 1)': {
        color: 'var(--red100)',
      },
      '&:nth-of-type(7n)': {
        color: 'var(--blue100) !important',
      },

      '& abbr': {
        fontSize: '14px',
      },
    },

    // 현재날짜
    '& .react-calendar__tile--now': {
      backgroundColor: 'var(--business-color) !important',
      color: 'var(--white100) !important',
      borderRadius: '8px !important',

      _hover: {
        backgroundColor: 'var(--business-color) !important',
        color: 'var(--white100) !important',
      },

      '&:nth-of-type(7n)': {
        color: 'var(--white100) !important',
      },
    },

    '& .react-calendar__tile': {
      padding: '5px 6px !important',

      _hover: {
        backgroundColor: 'var(--blue100) !important',
        color: 'var(--white100) !important',
        borderRadius: '8px !important',
      },
    },

    '& .react-calendar__tile--active': {
      backgroundColor: 'var(--blue100) !important',
      color: 'var(--white100) !important',
      borderRadius: '8px !important',
    },

    '& .react-calendar__month-view__days__day--neighboringMonth': {
      color: 'var(--grey100) !important',
    },
  },
});

export default Calendar;
