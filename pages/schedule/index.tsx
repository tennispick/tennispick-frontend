import { use, useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import PageHeader from "@components/common/PageHeader";
import TabList from "@components/common/TabList";
import ButtonContainer from "@components/schedule/ButtonContainer";
import { getWeekList } from "@utils/date";
import { WeekListProps } from "src/interfaces/calendar";
import Calendar from "@components/schedule/Calendar";
import Portal from "@components/Portal";
import Modal from "@components/layer/Modal";

const SchedulePage = () => {

  // TODO Data Fetching
  const coachArr = [
    {
      id: uuidV4(),
      name: "전체",
      value: "all",
      status: "active"
    },
    {
      id: uuidV4(),
      name: "Jane",
      value: "jane",
      status: "active"
    },
    {
      id: uuidV4(),
      name: "Marin",
      value: "marin",
      status: "active"
    },
    {
      id: uuidV4(),
      name: "Taeil",
      value: "taeil",
      status: "active"
    }
  ];

  const courtArr = [
    {
      id: uuidV4(),
      name: "코트1",
      value: "court1"
    },
    {
      id: uuidV4(),
      name: "코트2",
      value: "court2"
    },
    {
      id: uuidV4(),
      name: "코트3",
      value: "court4",
    },
    {
      id: uuidV4(),
      name: "코트4",
      value: "court4",
    }
  ];

  const [mount, setMount] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  // 글로벌 탭 리스트: 코치
  const [currentCoach, setCurrentCoach] = useState<string>(coachArr[0].id);
  const [coachList,] = useState(coachArr);

  // 코트 목록
  const [courtList,] = useState(courtArr);

  // 주차별 및 요일별 보기 구분
  const [viewCategory, setViewCategory] = useState("week");

  // 월을 기준으로 주차 및 날짜 구분하기
  const [calendarInfo, setCalendarInfo] = useState<WeekListProps>(getWeekList());

  const [calendarDate, setCalendarDate] = useState({
    year: calendarInfo.calendarYear,
    month: calendarInfo.calendarMonth,
    week: 1
  });

  // 현재 선택된 차수(ex, 1주차)
  const [currentWeek, setCurrentWeek] = useState<string>(calendarInfo.currentWeek);

  // 선택된 월의 주 목록(1주 ~ 5주)
  const [weekList, setWeekTabList] = useState(calendarInfo.weekTabList);
  const [dateWeekList, setDateWeekList] = useState(calendarInfo.dateList[0]);

  useEffect(() => {

    // Page Init Mount Check
    if (mount) {

      // 탭 리스트 변화
      const date = new Date();
      date.setFullYear(calendarDate.year);
      date.setMonth(calendarDate.month - 1);

      const weekInfo = getWeekList(date);

      setCalendarInfo(weekInfo);
      setCurrentWeek(weekInfo.weekTabList[0].id);
      setWeekTabList(weekInfo.weekTabList);
    }
  }, [calendarDate])

  /* Tab의 N주차 선택에 따른 요일 및 정보 표시 */
  useEffect(() => {

    const week = calendarInfo.weekTabList.findIndex((el) => el.id === currentWeek);

    setDateWeekList(calendarInfo.dateList[week]);
  }, [currentWeek])

  useEffect(() => {
    setMount(true);

    return () => setMount(false);
  }, [])

  return (
    <>
      <PageHeader title={"스케줄"} />
      <TabList state={currentCoach} setState={setCurrentCoach} list={coachList} />
      <ButtonContainer viewCategory={viewCategory} setViewCategory={setViewCategory} />
      <TabList state={currentWeek} setState={setCurrentWeek} list={weekList} borderBottom={true} />
      <Calendar
        courtList={courtList}
        dateWeekList={dateWeekList}
        calendarDate={calendarDate}
        setCalendarDate={setCalendarDate}
        setShowModal={setShowModal}
      />
      {
        showModal &&
        <Portal id={"#portal"}>
          <Modal
            title={"스케줄 등록"}
            showModal={showModal}
            setShowModal={setShowModal}
          >
          </Modal>
        </Portal>
      }
    </>
  )
}

export default SchedulePage;