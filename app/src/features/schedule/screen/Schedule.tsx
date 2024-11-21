'use client';

import { useState } from 'react';
import PageHeader from 'app/src/components/common/PageHeader';
import ButtonToolbar from 'app/src/features/schedule/component/buttonToolbar/ButtonToolBar';
import { useGetCoachListQuery } from 'app/src/features/coach/query/coachQuery';
import useMobile from 'app/src/hooks/useMobile';
import CourtContainer from '../component/CourtContainer';
import ModalAdditionalLesson from '../component/modal/additionalLesson/ModalAdditionalLesson';
import ModalRegularLesson from '../component/modal/regularLesson/ModalRegularLesson';
import useModal from 'app/src/hooks/useModal';
import DayScheduleCalendar from '../component/DayScheduleCalendar';

const Schedule = () => {
  const today = new Date();

  const isMobile = useMobile();

  const [calendarDate, setCalendarDate] = useState(today);
  const { data } = useGetCoachListQuery({});

  const { handleShowModal: handleShowRegularModal } = useModal({
    type: 'full',
    title: '정규 스케줄 등록',
    children: <ModalRegularLesson />,
  });

  const { handleShowModal: handleShowAdditionalModal } = useModal({
    type: 'md',
    title: '보강 스케줄 등록',
    children: <ModalAdditionalLesson />,
  });

  const handleChangeDate = (date: Date) => setCalendarDate(date);

  return (
    <>
      <PageHeader title={'스케줄 관리'} />
      <CourtContainer />
      <ButtonToolbar
        calendarDate={calendarDate}
        handleChangeDate={handleChangeDate}
        handleShowRegularModal={handleShowRegularModal}
        handleShowAdditionalModal={handleShowAdditionalModal}
      />
      {/* <ScheduleCalendarTable
        isMobile={isMobile}
        date={calendarDate}
        coachList={data ?? []}
      /> */}
      <DayScheduleCalendar
        isMobile={isMobile}
        date={calendarDate}
        coachList={data ?? []}
      />
    </>
  );
};

export default Schedule;
