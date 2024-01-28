import { v4 as uuidV4 } from 'uuid';
import { numberZeroFillFormat } from './numberForm';
import { TransferTimeList, WeekListProps } from 'src/interfaces/calendar';
import { ScheduleListsType } from '@features/layer/scheduleByDate/type/schedule';
import { STRING_WEEK_LIST, STRING_WEEK_LIST_KR } from "@features/schedule/constants/schedule";
import { CalendarDayList } from '@features/schedule/type/calendar.type';

/**
 * getDay(): 주어진 날짜의 첫 번째 날짜의 요일 정보를 반환
 * getDate(): 주어진 날짜의 일을 반환(ex, 28일)
 */

export const addDays = (date: Date, days: number) =>{
	let result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}

export const getWeek = (date: Date) =>{

	const newDate = new Date(date);
	const currentDate = newDate.getDate();
	const firstDay = new Date(newDate.setDate(1)).getDay();

	return Math.ceil((currentDate + firstDay) / 7);
};

/**
 * 입력 날짜에 해당하는 주차 및 리스트 반환
 * @param { args } Date 객체
 * @returns Object Array
 */
export const getWeekList = (args?: Date): WeekListProps => {
	const date = args ? args : new Date();

	const calendarYear = date.getFullYear();
	const calendarMonth = date.getMonth() + 1;
	let calendarDay = 1;

	let currentWeek = '';
	const currentDate = date.getDate();
	const monthStartDay = new Date(calendarYear, date.getMonth(), 1);
	const monthLastDate = new Date(calendarYear, calendarMonth, 0);

	const calendarMonthStartDay = monthStartDay.getDay();
	const calendarMonthLastDate = monthLastDate.getDate();

	const calendarWeekCount = Math.ceil(
		(calendarMonthStartDay + calendarMonthLastDate) / 7,
	); // (당일 + 첫요일)

	let dateList = [];
	let weekTabList = [];
	let isCheckMonthStartDay = 0;

	for (
		let monthWeekCount = 1;
		monthWeekCount <= calendarWeekCount;
		monthWeekCount++
	) {
		let uuid = uuidV4();
		let dateWeekList = [];
		let startDate: number = 0;
		let endDate: number = 0;

		for (let weekCount = 0; weekCount < 7; weekCount++) {
			if (weekCount === 0) startDate = calendarDay;

			if (weekCount === 6)
				endDate =
					calendarDay > calendarMonthLastDate
						? calendarMonthLastDate
						: calendarDay;

			if (
				calendarMonthStartDay <= isCheckMonthStartDay &&
				calendarDay <= calendarMonthLastDate
			) {
				dateWeekList.push({
					date: calendarDay,
					day: STRING_WEEK_LIST_KR[weekCount],
					day_KR: STRING_WEEK_LIST_KR[weekCount],
				});
				calendarDay++;
			}
			isCheckMonthStartDay++;
		}

		const startWeekDate =
			numberZeroFillFormat(calendarMonth, 2) +
			'.' +
			numberZeroFillFormat(startDate, 2);
		const endWeekDate =
			numberZeroFillFormat(calendarMonth, 2) +
			'.' +
			numberZeroFillFormat(endDate, 2);

		const checkStartDate = new Date(calendarYear + '.' + startWeekDate);
		const checkEndDate = new Date(calendarYear + '.' + endWeekDate);
		checkEndDate.setHours(23, 59, 59);

		if (checkStartDate <= date && checkEndDate >= date) currentWeek = uuid;

		weekTabList.push({
			id: uuid,
			name: `${monthWeekCount}주차 (${startWeekDate} ~ ${endWeekDate})`,
			startWeekDate: startWeekDate,
			endWeekDate: endWeekDate,
			value: startWeekDate + ' ~ ' + endWeekDate,
		});

		// 1주차 Date 빈 값 채워주기
		if (dateWeekList.length < 7) {
			const emptyLength = 7 - dateWeekList.length;

			for (let emptyDay = 0; emptyDay < emptyLength; emptyDay++) {
				if (monthWeekCount === 1) {
					dateWeekList.unshift({
						date: 'date' + emptyDay,
						day: 'day' + emptyDay,
						day_KR: 'day_KR' + emptyDay,
					});
				} else {
					dateWeekList.push({
						date: 'date' + emptyDay,
						day: 'day' + emptyDay,
						day_KR: 'day_KR' + emptyDay,
					});
				}
			}
		}

		dateList.push({
			weekNumber: monthWeekCount,
			dateWeekList: dateWeekList,
		});
	}

	return {
		calendarYear: calendarYear,
		calendarMonth: calendarMonth,
		currentWeek: currentWeek,
		currentDate: currentDate,
		weekTabList: weekTabList,
		dateList: dateList,
	};
};

export const getTimeZoneList = () => {
	let timeList = [];

	for (let index = 0; index <= 24; index++) {
		timeList.push(`${numberZeroFillFormat(index, 2)}:00`);
	}

	return {
		timeList: timeList,
	};
};

export const getTimezoneListByTime = (openHour: number, closeHour: number) => {
	let timeList = [];

	for (let index = 0; index <= 24; index++) {
		if(index >= openHour && index <= closeHour) timeList.push(`${numberZeroFillFormat(index, 2)}:00`);	
	}

	return {
		timeList: timeList,
	};
};

export const transferTimeZoneToSettingLessonTime = (array: string[], lessonTime: number): TransferTimeList[] =>{

	const list = [];
	const result: TransferTimeList[] = [];

	for(let index = 0; index < array.length-1; index++){

		const startTime = array[index];
		const endTime = array[index+1];

		const startMinutes = Number(startTime.split(":")[0]) * 60;
		const endMinutes = Number(endTime.split(":")[0]) * 60;

		for(let idx = startMinutes; idx < endMinutes; idx += lessonTime){
			const currentHour = Math.floor(idx / 60).toString().padStart(2, "0");
			const currentMinute = (idx % 60).toString().padStart(2, "0");

			list.push(`${currentHour}:${currentMinute}`);
		}
	}

	for(let index = 0; index < list.length; index++){
		result.push({
			startTime: list[index],
			endTime: list[index+1] ? list[index+1] : "24:00",
		});
	}
	return result;
}

export const getPrevNextMonth = (year: number, month: number) => {
	const dateMonth = month - 1;

	const prevDate = new Date();
	prevDate.setFullYear(month === 1 ? year - 1 : year);
	prevDate.setMonth(month === 1 ? 11 : dateMonth - 1);

	const nextDate = new Date();
	nextDate.setFullYear(month === 12 ? year + 1 : year);
	nextDate.setMonth(month === 12 ? 0 : dateMonth + 1);

	return {
		prevDate: {
			fullDate: prevDate.getFullYear() + '.' + (prevDate.getMonth() + 1),
			year: prevDate.getFullYear(),
			month: prevDate.getMonth() + 1,
		},
		nextDate: {
			fullDate: nextDate.getFullYear() + '.' + (nextDate.getMonth() + 1),
			year: nextDate.getFullYear(),
			month: nextDate.getMonth() + 1,
		},
	};
};

/** Only Get Time String */
export const isCheckTimeInRange = (
	startTime: string,
	endTime: string,
	targetTime: string,
) => {
	if (startTime && endTime && targetTime) {
		const startTimeDateValue = new Date(
			0,
			0,
			0,
			Number(startTime.split(':')[0]),
			Number(startTime.split(':')[1]),
		);
		const endTimeDateValue = new Date(
			0,
			0,
			0,
			Number(endTime.split(':')[0]),
			Number(endTime.split(':')[1]),
		);
		const targetTimeDateValue = new Date(
			0,
			0,
			0,
			Number(targetTime.split(':')[0]),
			Number(targetTime.split(':')[1]),
		);

		return (
			targetTimeDateValue >= startTimeDateValue &&
			targetTimeDateValue <= endTimeDateValue
		);
	}
};

export const getDiffTimeMinutes = (startTime: string, endTime: string) =>{

	const startMinutes = Number(startTime.split(":")[0]) * 60 + Number(startTime.split(":")[1]);
	const endMinutes = Number(endTime.split(":")[0]) * 60 + Number(endTime.split(":")[1]);

	return endMinutes - startMinutes;
}

/** 년도 SelectBox */
export const getYearList = () => {
	let array = [];
	const now = new Date();
	const year = now.getFullYear();

	for (let start = 1900; start <= year; start++) {
		array.push(start);
	}

	return {
		yearArray: array,
		year: year,
	};
};

/** 월별 SelectBox */
export const getMonthList = () => {
	let array = [];
	const now = new Date();
	const month =
		now.getMonth() + 1 > 9 ? now.getMonth() + 1 : '0' + (now.getMonth() + 1);

	for (let start = 1; start <= 12; start++) {
		let element = start > 9 ? String(start) : '0' + String(start);
		array.push(element);
	}

	return {
		monthArray: array,
		month: month,
	};
};

/** 일별 SelectBox */
export const getDayList = () => {
	let array = [];
	const now = new Date();
	const date = now.getDate() > 9 ? now.getDate() : Number('0' + now.getDate());

	for (let start = 1; start <= 31; start++) {
		let element = start > 9 ? String(start) : '0' + String(start);
		array.push(element);
	}

	return {
		dateArray: array,
		date: date,
	};
};

export const getTimeList = ({ step = 20, afterTime = "00:00", isInclude = false }: {
	step?: number | string;
	afterTime?: string;
	isInclude?: boolean;
}) => {

	if(typeof step === 'string') { step = step === '0' ? 20 : Number(step); }

	const array = [];
	const [afterTimeHour, afterTimeMinute] = afterTime.split(":").map(Number);

  for (let hour = afterTimeHour; hour < 24; hour++) {
    for (let minute = isInclude ? afterTimeMinute : (hour === afterTimeHour) ? afterTimeMinute + step : 0; minute < 60; minute += step) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      array.push(time);
    }
  }

	return array;
};

// const getDayListByMonth = (params: any): any => {

// 	const { datePayload, weekCount, date: paramDate, isWeekDay } = params;
// 	const { year: paramYear, month: paramMonth, dayList } = datePayload;

// 	const today = new Date();

// 	const isCurrentMonth = today.getFullYear() === paramYear && (today.getMonth()) === paramMonth;

// 	// 오늘날짜보다 과거 날짜면, 그 입력된 과거날짜를 그대로 사용하고, 그렇지 않을 때는 현재 날짜와 비교 후 연산
// 	const dateInMonth = (paramDate < today) ? (paramDate.getDate() - (isWeekDay ? (paramDate.getDay() - 1) : paramDate.getDay()))
// 		: isCurrentMonth ? (paramDate.getDate() - (isWeekDay ? (paramDate.getDay() - 1) : paramDate.getDay())) : paramDate.getDate();
// 	const lastDateInMonth = new Date(paramYear + (paramMonth === 11 ? 1 : 0), (paramMonth === 11 ? 0 : paramMonth) + 1, 0).getDate();

// 	const list = { ...dayList };

// 	let isCalcWeekCount = 0;
// 	let isCheckOneWeek = 1;

// 	for(let date = dateInMonth; date <= lastDateInMonth; date++){

// 		if(isCheckOneWeek === (isWeekDay ? 5 : 3)) {
// 			isCheckOneWeek = 1;
// 			isCalcWeekCount++;
// 		}

// 		if((weekCount - isCalcWeekCount) < 1){
// 			return {
// 				year: paramYear,
// 				month: paramMonth,
// 				dayList: list
// 			};
// 		}

// 		const dayNumber = new Date(paramYear, paramMonth, date).getDay();
// 		const day = STRING_WEEK_LIST[dayNumber];

// 		if(isWeekDay){
// 			if(day === "sunday" || day === "saturday") continue;
// 		}
// 		else{
// 			if(day !== "sunday" && day !== "saturday") continue;
// 		}

// 		if(!list[day][paramYear]){
// 			list[day][paramYear] = {};
// 		}

// 		if (!list[day][paramYear][paramMonth + 1]) {
// 			list[day][paramYear][paramMonth + 1] = [];
// 		}

// 		list[day][paramYear][paramMonth + 1].push(date);

// 		isCheckOneWeek++;
// 	};

// 	const nextYear = paramYear + (paramMonth === 11 ? 1 : 0);
// 	const nextMonth = paramMonth === 11 ? 0 : paramMonth + 1;

// 	return getDayListByMonth({
// 		datePayload: {
// 			year: nextYear,
// 			month: nextMonth,
// 			dayList: list
// 		},
// 		weekCount: weekCount - isCalcWeekCount,
// 		date: new Date(nextYear, nextMonth, 1),
// 		isWeekDay
// 	})
// };

// export const getDayOfWeek = ({ date, weekCount, isWeekDay }: ScheduleListsType) => {

// 	const datePayload = {
// 		year: date.getFullYear(),
// 		month: date.getMonth(),
// 		dayList: {
// 			...(isWeekDay ?
// 				{
// 					monday: {},
// 					tuesday: {},
// 					wednesday: {},
// 					thursday: {},
// 					friday: {},
// 				}:
// 				{
// 					saturday: {},
// 					sunday: {}
// 				}
// 			)
// 		}
// 	};

// 	const { year, month, dayList } = getDayListByMonth({ datePayload, weekCount, date, isWeekDay });

// 	Object.keys(dayList).forEach((key) => {
// 		let dayListLength = 0;
// 		const target = dayList[key];
	
// 		for (let listYear of Object.keys(target)) {
// 			for (let month of Object.keys(target[listYear])) {
// 				dayListLength += target[listYear][month].length;
// 			}
// 		}
	
// 		if (dayListLength < 7) {
// 			for (let listYear of Object.keys(target)) {
	
// 				for (let month of Object.keys(target[listYear])) {
	
// 					const yearList = Object.keys(target);
// 					const lastYear = yearList[yearList.length - 1];
// 					const monthList = Object.keys(target[lastYear]);
// 					const lastMonth = monthList[monthList.length - 1];
	
// 					const monthLastDate = target[lastYear][lastMonth][target[lastYear][lastMonth].length - 1];
// 					const dateInMonth = new Date(Number(lastYear), Number(lastMonth), 0).getDate();
	
// 					if ((monthLastDate + 7) > dateInMonth) {
// 						const nextYear = Number(lastMonth) === 11 ? Number(lastYear) + 1 : Number(lastYear);
// 						const nextMonth = Number(lastMonth) === 11 ? 0 : Number(lastMonth) + 1;
	
// 						if (!target[nextYear][nextMonth]) target[lastYear][nextMonth] = [];
	
// 						target[nextYear][nextMonth].push(new Date(Number(nextYear), nextMonth, monthLastDate + 7).getDate());
// 						return;
// 					} else {

// 						target[lastYear][lastMonth].push(new Date(Number(lastYear), Number(lastMonth), monthLastDate + 7).getDate());
// 						return;
// 					}
// 				}
// 			}
// 		}
// 	});

// 	return {
// 		year: date.getFullYear(),
// 		month: date.getMonth() + 1,
// 		dayList
// 	};
// };

export const getDayOfWeekList = (date: Date, weekCount: number, isWeekDay: boolean) =>{

  if(isWeekDay) return getCalendarWeekdayList(date, weekCount);
  else return getCalendarWeekendList(date, weekCount);
}

const getCalendarWeekdayList = (date: Date, weekCount: number) =>{

  let result: CalendarDayList<number> = {};
  const weekList = STRING_WEEK_LIST.reduce((acc: Array<string>, day) => {
    if(day !== 'saturday' && day !== 'sunday') acc.push(day);
    return acc;
  }, [])

  weekList.map((day: string) => result[day] = getWeekDayDateListByDay(date, day, weekCount));
  return result;
};

const getCalendarWeekendList = (date: Date, weekCount: number) =>{

	let result: CalendarDayList<number> = {};
  const weekList = STRING_WEEK_LIST.reduce((acc: Array<string>, day) => {
    if(day === 'saturday' || day === 'sunday') acc.push(day);

    return acc;
  }, [])

  return result;
};

// 입력된 날짜 이후의 평일을 요일별로 날짜를 구해서 반환하는 함수
const getWeekDayDateListByDay = (inputDate: Date, inputDay: string, weekCount: number) => {

  const result: {[key: string]: Array<number> } = {};
  const calendarDate = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate());

  for(let count = 0; count < weekCount; count++){

    const paramDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), calendarDate.getDate());
    const resultDate = getDayOfWeek(paramDate, inputDay);

    const year = resultDate.getFullYear();
    const month = resultDate.getMonth() + 1;
    const date = resultDate.getDate();

    // if (!result[year]) result[year] = {};
    if (!result[month]) result[month] = [];
    
    result[month].push(date);

    calendarDate.setDate(calendarDate.getDate() + 7);
  };

  return result;
}

// 입력된 날짜에 해당 주차의 특정 요일의 날짜를 반환하는 함수
const getDayOfWeek = (inputDate: Date, inputDay: string) =>{

  const dayIndex = STRING_WEEK_LIST.findIndex((day) => day === inputDay);
  const dayDifference = dayIndex - inputDate.getDay();
  const inputDayDate = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate() + dayDifference);
  return inputDayDate;
};