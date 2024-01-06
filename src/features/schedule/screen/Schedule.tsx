import { useEffect, useState } from 'react';
import PageHeader from '@components/common/PageHeader';
import TabList from '@components/common/TabList';
import { getWeekList } from '@utils/date';
import { WeekListProps } from 'src/interfaces/calendar';
import ScheduleCalendar from '@features/schedule/component/ScheduleCalendar';
import Portal from '@components/Portal';
import Modal from '@components/layer/Modal';
import { coachArr, courtArr } from '@data/schedule';
import ScheduleCreateModal from '@features/schedule/component/modal/CreateModal';
import CreateScheduleModalChildren from '@components/schedule/component/CreateScheduleModalChildren';

const Schedule = () => {

  const [mount, setMount] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('');

  // 글로벌 탭 리스트: 코치
  const [currentCoach, setCurrentCoach] = useState<string>(coachArr[0].id);
  const [coachList] = useState(coachArr);

  // 코트 목록
  const [courtList] = useState(courtArr);

  // 월을 기준으로 주차 및 날짜 구분하기
  const [calendarInfo, setCalendarInfo] = useState<WeekListProps>(
    getWeekList(),
  );

  const [calendarDate, setCalendarDate] = useState({
    year: calendarInfo.calendarYear,
    month: calendarInfo.calendarMonth,
    week: 1,
  });

  // 현재 선택된 차수(ex, 1주차)
  const [currentWeek, setCurrentWeek] = useState<string>(
    calendarInfo.currentWeek,
  );

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
  }, [calendarDate]);

  /* Tab의 N주차 선택에 따른 요일 및 정보 표시 */
  useEffect(() => {
    const week = calendarInfo.weekTabList.findIndex(
      (el) => el.id === currentWeek,
    );

    setDateWeekList(calendarInfo.dateList[week]);
  }, [currentWeek]);

  useEffect(() => {
    setMount(true);

    return () => setMount(false);
  }, []);

  return (
    <>
      <PageHeader title={'스케줄 관리'} />
      <TabList
        state={currentCoach}
        setState={setCurrentCoach}
        list={coachList}
      />
      <TabList
        state={currentWeek}
        setState={setCurrentWeek}
        list={weekList}
        borderBottom={true}
      />
      {mount && (
        <ScheduleCalendar
          courtList={courtList}
          dateWeekList={dateWeekList}
          calendarDate={calendarDate}
          setCalendarDate={setCalendarDate}
          setShowModal={setShowModal}
          setModalType={setModalType}
        />
      )}
      {showModal && (
        <Portal id={'portal'}>
          <Modal
            title={modalType === 'regular' ? '정규 스케줄 등록' : '보강 스케줄 등록'}
            showModal={showModal}
            setShowModal={setShowModal}
            css={{
              top: '45%',
              maxWidth: '1440px',
              minHeight: '520px',
              width: '1440px'
            }}
          >
            <ScheduleCreateModal
              modalType={modalType}
            />
            {/* <CreateScheduleModalChildren /> */}
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default Schedule;