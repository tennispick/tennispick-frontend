import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

const Calendar = ({ ...props }) => {
  const { onClick, ...rest } = props;

  return (
    <ReactCalendar
      className="rounded-2xl p-3 text-[var(--black100)] react-calendar__navigation:!flex !h-8 !mb-2 react-calendar__navigation_button:!min-w-8 !bg-none react-calendar__month-view__weekdays__weekday--abbr:font-medium no-underline react-calendar__month-view__weekdays__weekday:first:!text-[var(--red100)] react-calendar__month-view__weekdays__weekday:last:!text-[var(--blue100)] react-calendar__month-view__days__day:nth-of-type(7n+1):text-[var(--red100)] react-calendar__month-view__days__day:nth-of-type(7n):!text-[var(--blue100)] react-calendar__tile--now:!bg-[var(--business-color)] !text-white !rounded-lg react-calendar__tile--now:hover:!bg-[var(--business-color)] !text-white react-calendar__tile--now:nth-of-type(7n):!text-white react-calendar__tile:p-2 react-calendar__tile:hover:!bg-[var(--blue100)] !text-white !rounded-lg react-calendar__tile--active:!bg-[var(--blue100)] !text-white !rounded-lg react-calendar__month-view__days__day--neighboringMonth:!text-[var(--grey100)]"
      locale={'ko-kr'}
      calendarType={'gregory'}
      formatDay={(locale, date) => dayjs(date).format('DD')}
      onClickDay={(e) => onClick(e)}
      {...rest}
    />
  );
};

export default Calendar;
