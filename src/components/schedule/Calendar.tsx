import { Dispatch, SetStateAction } from "react";
import styled from "@emotion/styled";
import { v4 as uuidV4 } from "uuid";
import { Button, CSS_TYPE, ImageContainer as Image } from "@styles/styles";
import { colorList } from "@utils/colorSet";
import { ObjectProps } from "@interfaces/common";
import { getTimeZoneList, getPrevNextMonth } from "@utils/date";
import SingleArrowLeftIcon from "@icons/grey_single_arrow_left.svg";
import SingleArrowRightIcon from "@icons/grey_single_arrow_right.svg";
import WriteIcon from "@icons/edit_white.svg";

interface U{
  [key: string]: number;
};

interface CalendarProps{
  courtList: Array<ObjectProps<string>>;
  dateWeekList: {
    weekNumber: number;
    dateWeekList: Array<ObjectProps<number | string>>;
  };
  calendarDate: U;
  setCalendarDate: Dispatch<SetStateAction<{
    year: number;
    month: number;
    week: number;
  }>>
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const Calendar = ({ courtList, dateWeekList, calendarDate, setCalendarDate, setShowModal }: CalendarProps) => {

  const { year, month } = calendarDate;
  const currentWeekDayList = dateWeekList.dateWeekList;

  const { timeList } = getTimeZoneList();

  // 코트의 갯수 및 종류

  // 예약리스트

  // 공휴일 체크하고 이벤트 표시

  const onClickPrevMonthHandler = () =>{
    const { prevDate } = getPrevNextMonth(year, month);
    setCalendarDate({
      year: prevDate.year,
      month: prevDate.month,
      week: 1,
    });
  };

  const onClickNextMonthHandler = () =>{
    
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
          {
            (courtList && courtList.length > 0) && courtList.map((item, index) => {
              return (
                <CourtList
                  key={item.id}
                  backgroundColor={colorList[index]}
                >{item.name}</CourtList>
              )
            })
          }
          <CourtList backgroundColor={"rgba(164, 164, 164, 100)"}>야외</CourtList>
        </CourtLists>
        <CalendarHeaderContainer>
          <Image
            src={SingleArrowLeftIcon}
            alt="prev button"
            width={24}
            height={24}
            cursor={"pointer"}
            onClick={onClickPrevMonthHandler}
          />
          {year}년 {month}월
          <Image
            src={SingleArrowRightIcon}
            alt="next button"
            width={24}
            height={24}
            cursor={"pointer"}
            onClick={onClickNextMonthHandler}
          />
        </CalendarHeaderContainer>
        <HeaderBtnContainer>
          <Button
            display={"flex"}
            alignItems={"center"}
            fontSize={"1rem"}
            fontWeight={"400"}
            color={"var(--basic-white-color)"}
            backgroundColor={"var(--business-active-color)"}
            margin={"0 0 0 auto"}
            onClick={() => setShowModal(true)}
          >
            <Image
              src={WriteIcon}
              alt={"calendar register"}
              width={16}
              height={16}
              margin={"0 4px 0 0"}
            />스케줄 등록하기
          </Button>
        </HeaderBtnContainer>
      </HeaderContainer>
      <WeekHeaderContainer>
        {
          (currentWeekDayList && currentWeekDayList.length > 0) && currentWeekDayList.map((item) => {
            return(
              <WeekDayContainer key={item.date}>
                <DayWrapper
                  color={item.day === "Sat" ? "var(--basic-blue-color)" : item.day === "Sun" ? "var(--basic-red-color)" : "var(--basic-black-color)"}
                >
                  {typeof(item.date) === "number" ? item.date + `(${item.day_KR})` : ""}
                </DayWrapper>
                <DayEventContainer></DayEventContainer>
              </WeekDayContainer>
            )
          })
        }
      </WeekHeaderContainer>
      <CalendarContainer>
        <TimeZoneContainer>
          <ul>
            {
              (timeList && timeList.length > 0) && timeList.map((item) => {
                return (
                  <TimeList key={item}>
                    {item}
                  </TimeList>
                )
              })
            }
          </ul>
        </TimeZoneContainer>
        <WeekContainer>
          {
            (currentWeekDayList && currentWeekDayList.length > 0) && currentWeekDayList.map((item, index) => {
              return(
                <DateContainer key={uuidV4()}>
                  {
                    (timeList && timeList.length > 0) && timeList.map((event) => {
                      return (
                        <DateEventLists key={uuidV4()}>
                          <DateEventList></DateEventList>
                        </DateEventLists>
                      )
                    })
                  }
                </DateContainer>
              )
            })
          }
        </WeekContainer>
      </CalendarContainer>
    </Container>
  )
};

const Container = styled.div({
  position: "relative",
  height: "calc(80% - 16px)",
  margin: "8px 0 0 0",
  padding: "8px 0 0 0"
});
const HeaderContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid var(--basic-grey-color)",
  padding: "0 0 16px 0"
});
const CourtLists = styled.ul({
  width: "calc(100% / 3)",
  display: "flex",
  alignItems: "center"
});
const CourtList = styled.li<CSS_TYPE>(
  {
    borderRadius: "8px",
    padding: "0.3rem 0.9rem",
    margin: "0 8px 0 0",
    color: "var(--basic-white-color)"
  },
  props => ({
    backgroundColor: props.backgroundColor ? props.backgroundColor : "var(--basic-white-color)"
  })
);
const CalendarHeaderContainer = styled.div({
  width: "calc(100% / 3)",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  fontSize: "1.1rem"
});
const HeaderBtnContainer = styled.div({
  width: "calc(100% / 3)",
  textAlign: "right"
});
const WeekHeaderContainer = styled.div({
  position: "relative",
  display: "flex",
  width: "100%",
  padding: "0 0 0 6%",
  borderBottom: "1px solid var(--basic-grey-color)",
});
const WeekDayContainer = styled.div({
  width: "calc(100% / 7)",
  borderLeft: "1px solid var(--basic-grey-color)",

  ":nth-last-of-type(1)": {
    borderRight: "1px solid var(--basic-grey-color)"
  }
});
const DayWrapper = styled.div<CSS_TYPE>(
  {
    height: "36px",
    lineHeight: "36px",
    textAlign: "center",
    borderBottom: "1px solid var(--basic-grey-color)",
    fontWeight: "400"
  },
  props => ({
    color: props.color
  })
);
const DayEventContainer = styled.div({
  minHeight: "28px",
  padding: "0.4rem 0.6rem",
});
const CalendarContainer = styled.div({
  position: "relative",
  width: "100%",
  height: "82%",
  display: "flex",
  overflowY: "scroll",

  "::-webkit-scrollbar": {
    scrollBehavior: "smooth",
    display: "none"
  }
});
const TimeZoneContainer = styled.div({
  position: "relative",
  width: "6%",
  height: "calc(100% - 36px)",
  padding: "4px 0 0 0",
});
const TimeList = styled.li({
  position: "relative",
  height: "52px",
  textAlign: "center",
});
const WeekContainer = styled.div({
  position: "relative",
  width: "94%",
  height: "100%",
  display: "flex",
  fontSize: "0.8rem"
});
const DateContainer = styled.div({
  width: "calc(100% / 7)",

  ":nth-last-of-type(1) > ul > li": {
    borderRight: "1px solid var(--basic-grey-color)"
  }
});
const DateEventLists = styled.ul({

});
const DateEventList = styled.li(
  {
    position: "relative",
    height: "52px",
    padding: "0.4rem 0.6rem",
    borderBottom: "1px solid var(--basic-grey-color)",
    borderLeft: "1px solid var(--basic-grey-color)",
  },
  props => ({

  })
);

export default Calendar;