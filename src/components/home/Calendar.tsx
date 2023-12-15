import styled from '@emotion/styled';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

const Calendar = ({ ...props }) => {

	const { onClick, ...rest } = props;

	return(
		<CalendarContainer
			locale={'ko-kr'}
			calendarType={'gregory'}
			formatDay ={(locale, date) => dayjs(date).format('DD')}
			onClickDay={(e) => onClick(e)}
			{...rest}
		/>
	)
};

const CalendarContainer = styled(ReactCalendar)({
	position: 'relative',
	color: 'var(--black100)',
	borderRadius: '16px',
	padding: '12px',

	'.react-calendar__navigation': {
		display: 'flex',
		height: '32px',
		marginBottom: '0.5em',
	},

	'.react-calendar__navigation button': {
		minWidth: '32px',
		background: 'none'
	},

	// 요일
	'.react-calendar__month-view__weekdays__weekday':{
		':nth-of-type(1)':{
			color: 'var(red100)'
		},
		':nth-of-type(7)':{
			color: 'var(--blue100)'
		},

		'abbr': {
			fontWeight: 500,
			textDecoration: 'none'
		}
	},

	// 일
	'.react-calendar__month-view__days__day': {
		
		':nth-of-type(7n + 1)':{
			color: 'var(red100)'
		},
		':nth-of-type(7n)':{
			color: 'var(--blue100)'
		},
	},

	// 현재날짜
	'.react-calendar__tile--now': {
		backgroundColor: 'var(--business-color)',
		color: 'var(--white100) !important',
		borderRadius: '8px',

		':hover': {
			backgroundColor: 'var(--business-color)',
			color: 'var(--white100)',
		}
	},

	'.react-calendar__tile': {
		padding: '7px 8px',

		':hover': {
			backgroundColor: 'var(--blue100)',
			color: 'var(--white100) !important',
			borderRadius: '8px',
		}
	},

	'.react-calendar__tile--active': {
		backgroundColor: 'var(--blue100) !important',
		color: 'var(--white100) !important',
		borderRadius: '8px',
	},

	'.react-calendar__month-view__days__day--neighboringMonth':{
		color: 'var(--grey100) !important'
	}
});

export default Calendar;
