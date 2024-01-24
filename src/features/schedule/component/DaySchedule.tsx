import { useState, useMemo, useEffect } from "react";
import { CSS_TYPE, ImageContainer as Image } from '@styles/styles';
import {
	EditWhiteIcon,
	GreySingleArrowLeft,
	GreySingleArrowRight,
} from '@icons/index';
import {
	getTimeZoneList,
	getPrevNextMonth,
	isCheckTimeInRange,
  getWeekList,
  getWeek,
  addDays,
} from '@utils/date';
import WeekdaySchedule from "./WeekdaySchedule";
import WeekendSchedule from "./WeekendSchedule";
import { STRING_WEEK_LIST } from "../constants/schedule";

type Props = {
  date: Date;
}

const DaySchedule = ({ date }: Props) => {

  const [ calendarDate, setCalendarDate ] = useState(date);
  const week = getWeek(new Date(calendarDate));

  const [coach] = useState([
    {
      id: 'coach1',
      name: 'Jason',
      color: 'var(--green100)',
    },
    {
      id: 'coach2',
      name: 'Martin',
      color: 'var(--purple100)',
    },
    {
      id: 'coach3',
      name: 'Alice',
      color: 'var(--blue100)',
    },
    {
      id: 'coach4',
      name: 'Mark',
      color: 'var(--red100)',
    },
    {
      id: 'coach5',
      name: 'Haward',
      color: 'var(--yellow100)',
    }
  ])

  // const handlePrevWeekClick = () => {
	// 	const { prevDate } = getPrevNextMonth(year, month);
	// 	setCalendarDate({
	// 		year: prevDate.year,
	// 		month: prevDate.month,
  //     week: 1,
	// 	});
	// };

	// const handleNextWeekClick = () => {
	// 	const { nextDate } = getPrevNextMonth(year, month);
	// 	setCalendarDate({
	// 		year: nextDate.year,
	// 		month: nextDate.month,
  //     week: 1,
	// 	});
	// };

  const handleWeekClick = (days: number) =>  {

    const currentDayOfWeek = calendarDate.getDay();
    const mondayDate = new Date(calendarDate);
    mondayDate.setDate(calendarDate.getDate() - currentDayOfWeek + (currentDayOfWeek === 0 ? -6 : 1));

    setCalendarDate(addDays(mondayDate, days)
  )};

  return(
    <div css={{ position: 'relative', width: '100%', height: 'calc(100% - 64px)' }}>
      <div css={{ padding: '0 0 12px 0' }}>
        {/* <ul css={{ display: 'flex' }}>
          {coach.map((el) => (
            <li key={el.id} css={{ backgroundColor: el.color, color: 'var(--white100)', padding: '8px 16px', borderRadius: '8px', margin: '0 8px 0 0' }}>
              <span>{el.name}</span>
            </li>
          ))}
        </ul> */}
      </div>
      <div css={{ display: 'flex', justifyContent: 'space-between', margin: '0 0 16px 0' }}>
        <Image
          src={GreySingleArrowLeft}
          alt="prev button"
          width={28}
          height={28}
          cursor={'pointer'}
          onClick={() => handleWeekClick(-7)}
        />
        <Image
          src={GreySingleArrowRight}
          alt="next button"
          width={28}
          height={28}
          cursor={'pointer'}
          onClick={() => handleWeekClick(7)}
        />
      </div>
      <div css={{ position: 'relative', display: 'flex', width: '100%', height: 'calc(100% - 48px)' }}>
        <WeekdaySchedule
          today={calendarDate}
          coach={coach}
        />
        <WeekendSchedule
          today={calendarDate}
          coach={coach}
        />
      </div>
    </div>
  )
}

export default DaySchedule;