import { Dispatch, SetStateAction } from 'react';
import { v4 as uuidV4 } from 'uuid';
import styled from '@emotion/styled';

import { CSS_TYPE, ImageContainer as Image } from '@styles/styles';
import { Button } from '@components/index';
import { colorList } from '@utils/colorSet';
import { ObjectProps } from '@interfaces/common';
import {
	getTimeZoneList,
	getPrevNextMonth,
	isCheckTimeInRange,
} from '@utils/date';

import {
	EditWhiteIcon,
	GreySingleArrowLeft,
	GreySingleArrowRight,
} from '@icons/index';
import { getScheduleQuery } from '@queries/index';
import { numberZeroFillFormat } from '@utils/numberForm';

type CalendarDateProps = {
	[key: string]: number;
}

type Props = {
	courtList: Array<ObjectProps<string>>;
	dateWeekList: {
		weekNumber: number;
		dateWeekList: Array<ObjectProps<number | string>>;
	};
	calendarDate: CalendarDateProps;
	setCalendarDate: Dispatch<
		SetStateAction<{
			year: number;
			month: number;
			week: number;
		}>
	>;
	setShowModal: Dispatch<SetStateAction<boolean>>;
	setModalType: Dispatch<SetStateAction<string>>;
}

const ScheduleCalendar = ({
	courtList,
	dateWeekList,
	calendarDate,
	setCalendarDate,
	setShowModal,
	setModalType
}: Props) => {
	const { year, month } = calendarDate;
	const currentWeekDayList = dateWeekList.dateWeekList;

	const startWeekDate = `${year}-${numberZeroFillFormat(month, 2)}-${
		currentWeekDayList[0].date
	} 00:00:00`;
	const endWeekDate = `${year}-${numberZeroFillFormat(month, 2)}-${
		currentWeekDayList[currentWeekDayList.length - 1].date
	} 23:59:59`;

	const { data }: any = getScheduleQuery({ startWeekDate, endWeekDate });

	const { timeList } = getTimeZoneList();

	const onClickPrevMonthHandler = () => {
		const { prevDate } = getPrevNextMonth(year, month);
		setCalendarDate({
			year: prevDate.year,
			month: prevDate.month,
			week: 1,
		});
	};

	const onClickNextMonthHandler = () => {
		const { nextDate } = getPrevNextMonth(year, month);
		setCalendarDate({
			year: nextDate.year,
			month: nextDate.month,
			week: 1,
		});
	};

	return (
		<Container>
			<HeaderContainer>
				<CourtLists>
					{courtList &&
						courtList.length > 0 &&
						courtList.map((item, index) => {
							return (
								<CourtList key={item.id} backgroundColor={colorList[index]}>
									{item.name}
								</CourtList>
							);
						})}
					<CourtList backgroundColor={'rgba(164, 164, 164, 100)'}>
						야외
					</CourtList>
				</CourtLists>
				<CalendarHeaderContainer>
					<Image
						src={GreySingleArrowLeft}
						alt="prev button"
						width={24}
						height={24}
						cursor={'pointer'}
						onClick={onClickPrevMonthHandler}
					/>
					{year}년 {month}월
					<Image
						src={GreySingleArrowRight}
						alt="next button"
						width={24}
						height={24}
						cursor={'pointer'}
						onClick={onClickNextMonthHandler}
					/>
				</CalendarHeaderContainer>
				<CreateLessonButtonWrapper>
					<Button
						variant={'iconBtn'}
						label={'정규 스케줄 등록'}
						src={EditWhiteIcon}
						imageCss={{
							width: '20px',
							height: '20px',
							margin: '0 8px 0 0',
						}}
						css={{
							backgroundColor: 'var(--business-active-color)',
							color: 'var(--white100)',
						}}
						onClick={() => {
							setShowModal(true);
							setModalType('regular');
						}}
					/>
					<Button
						variant={'iconBtn'}
						label={'보강 스케줄 등록'}
						src={EditWhiteIcon}
						imageCss={{
							width: '20px',
							height: '20px',
							margin: '0 8px 0 0',
						}}
						css={{
							backgroundColor: 'var(--business-active-color)',
							color: 'var(--white100)',
							margin: '0 0 0 8px'
						}}
						onClick={() => {
							setShowModal(true);
							setModalType('additional');
						}}
					/>
				</CreateLessonButtonWrapper>
			</HeaderContainer>
			<WeekHeaderContainer>
				{currentWeekDayList &&
					currentWeekDayList.length > 0 &&
					currentWeekDayList.map((item) => {
						return (
							<WeekDayContainer key={item.date}>
								<DayWrapper
									color={
										item.day === 'Sat'
											? 'var(--blue100)'
											: item.day === 'Sun'
											? 'var(--red100)'
											: 'var(--black100)'
									}
								>
									{typeof item.date === 'number'
										? item.date + `(${item.day_KR})`
										: ''}
								</DayWrapper>
								{/* 공휴일 및 이벤트 */}
								<DayEventContainer>이벤트</DayEventContainer>
							</WeekDayContainer>
						);
					})}
			</WeekHeaderContainer>
			<CalendarContainer>
				<TimeZoneContainer>
					<ul>
						{timeList &&
							timeList.length > 0 &&
							timeList.map((item) => {
								return <TimeList key={item}>{item}</TimeList>;
							})}
					</ul>
				</TimeZoneContainer>
				<WeekContainer>
					{currentWeekDayList &&
						currentWeekDayList.length > 0 &&
						currentWeekDayList.map((element) => {
							{
								/* 스케줄 노출 */
							}
							return (
								<DateContainer key={uuidV4()}>
									{timeList &&
										timeList.length > 0 &&
										timeList.map((item, index) => {
											return (
												<ul key={uuidV4()}>
													<DateEventList>
														{data?.data &&
															data.data.length > 0 &&
															data.data.map((event: any) => {
																// 시작 및 종료 스케줄 기준 시간값
																const prevTime = item;
																const nextTime = timeList[index + 1];

																const isTimeInRange = isCheckTimeInRange(
																	prevTime,
																	nextTime,
																	event.start_time,
																);

																const startTimeString =
																	event.start_time.split(':')[1];
																const eventPositionTop =
																	(Number(startTimeString) / 60) * 100;
																const startTime = new Date(
																	event.origin_start_time,
																);
																const endTime = new Date(event.origin_end_time);
																const eventBackgroundHeight =
																	((endTime.getTime() - startTime.getTime()) /
																		(60 * 60 * 1000)) *
																	100;

																// TODO Width 설정

																// TODO 24시일 때, 가정하자

																return (
																	isTimeInRange &&
																	element.date === Number(event.date) && (
																		<div
																			key={uuidV4()}
																			css={{
																				position: 'relative',
																				top: `${eventPositionTop}%`,
																				height: `${eventBackgroundHeight}%`,
																				backgroundColor: '#26AD8D',
																				borderRadius: '8px',
																				cursor: 'pointer',
																				zIndex: 99,
																			}}
																			onClick={() => alert('야호')}
																		/>
																	)
																);
															})}
													</DateEventList>
												</ul>
											);
										})}
								</DateContainer>
							);
						})}
				</WeekContainer>
			</CalendarContainer>
		</Container>
	);
};

const Container = styled.div({
	position: 'relative',
	height: 'calc(80% - 24px)',
	margin: '8px 0 0 0',
	padding: '8px 0 0 0',
});
const HeaderContainer = styled.div({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	borderBottom: '1px solid var(--grey100)',
	padding: '0 0 16px 0',
});
const CourtLists = styled.ul({
	width: 'calc(100% / 3)',
	display: 'flex',
	alignItems: 'center',
});
const CourtList = styled.li<CSS_TYPE>(
	{
		borderRadius: '8px',
		padding: '0.3rem 0.9rem',
		margin: '0 8px 0 0',
		color: 'var(--white100)',
	},
	(props) => ({
		backgroundColor: props.backgroundColor
			? props.backgroundColor
			: 'var(--white100)',
	}),
);
const CalendarHeaderContainer = styled.div({
	width: 'calc(100% / 3)',
	textAlign: 'center',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-around',
	fontSize: '1.1rem',
});
const CreateLessonButtonWrapper = styled.div({
	width: 'calc(100% / 3)',
	textAlign: 'right',
	display: 'flex',
	justifyContent: 'flex-end',
});
const WeekHeaderContainer = styled.div({
	position: 'relative',
	display: 'flex',
	width: '100%',
	padding: '0 0 0 6%',
	borderBottom: '1px solid var(--grey100)',
});
const WeekDayContainer = styled.div({
	width: 'calc(100% / 7)',
	borderLeft: '1px solid var(--grey100)',

	':nth-last-of-type(1)': {
		borderRight: '1px solid var(--grey100)',
	},
});
const DayWrapper = styled.div<CSS_TYPE>(
	{
		height: '36px',
		lineHeight: '36px',
		textAlign: 'center',
		borderBottom: '1px solid var(--grey100)',
		fontWeight: '400',
	},
	(props) => ({
		color: props.color,
	}),
);
const DayEventContainer = styled.div({
	minHeight: '28px',
	padding: '0.4rem 0.6rem',
});
const CalendarContainer = styled.div({
	position: 'relative',
	width: '100%',
	height: '82%',
	display: 'flex',
	overflowY: 'scroll',

	'::-webkit-scrollbar': {
		scrollBehavior: 'smooth',
		display: 'none',
	},
});
const TimeZoneContainer = styled.div({
	position: 'relative',
	width: '6%',
	height: 'calc(100% - 36px)',
	padding: '4px 0 0 0',
});
const TimeList = styled.li({
	position: 'relative',
	height: '52px',
	textAlign: 'center',
});
const WeekContainer = styled.div({
	position: 'relative',
	width: '94%',
	height: '100%',
	display: 'flex',
	fontSize: '0.8rem',
});
const DateContainer = styled.div({
	width: 'calc(100% / 7)',

	':nth-last-of-type(1) > ul > li': {
		borderRight: '1px solid var(--grey100)',
	},
});
const DateEventList = styled.li(
	{
		position: 'relative',
		height: '52px',
		padding: '0 0.6rem',
		borderBottom: '1px solid var(--grey100)',
		borderLeft: '1px solid var(--grey100)',
	}
);

export default ScheduleCalendar;
