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
// import DaySchedule from '../component/DaySchedule';

import dynamic from 'next/dynamic';
const DaySchedule = dynamic(() => import('../component/DaySchedule'), {
  ssr: false,
});

const Schedule = () => {

  const today = new Date();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('');

  return (
    <>
      <PageHeader title={'스케줄 관리'} />
      {/* <TabList
        state={currentCoach}
        setState={setCurrentCoach}
        list={coachList}
      />
      <TabList
        state={currentWeek}
        setState={setCurrentWeek}
        list={weekList}
        borderBottom={true}
      /> */}
        {/* // <ScheduleCalendar
        //   courtList={courtList}
        //   dateWeekList={dateWeekList}
        //   calendarDate={calendarDate}
        //   setCalendarDate={setCalendarDate}
        //   setShowModal={setShowModal}
        //   setModalType={setModalType}
        // /> */}
      <DaySchedule
        date={today}
      />
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