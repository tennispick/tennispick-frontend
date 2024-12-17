'use client';

import { useState } from 'react';
import { useGetCoachListQuery } from '@/이전 파일들/features/coach/query/coachQuery';
import CourtContainer from '../../../이전 파일들/features/schedule/component/CourtContainer';
import ModalAdditionalLesson from '../../../이전 파일들/features/schedule/component/modal/additionalLesson/ModalAdditionalLesson';
import ModalRegularLesson from '../../../이전 파일들/features/schedule/component/modal/regularLesson/ModalRegularLesson';
import useModal from 'src/이전 파일들/hooks/useModal';
import DayScheduleCalendar from '../../../이전 파일들/features/schedule/component/DayScheduleCalendar';
import ButtonToolbar from '../../../이전 파일들/features/schedule/component/buttonToolbar/ButtonToolBar';
import { PeriodNavigation, Toolbar } from '..';
import TenButton from 'src/shared/ui/TenButton';
import TenDrawer from 'src/shared/ui/TenDrawer';
import { Body, Section } from '@/app/layout';

export const Schedule = () => {
  const today = new Date();

  const [calendarDate, setCalendarDate] = useState(today);
  const { data } = useGetCoachListQuery({});

  // const { handleShowModal: handleShowRegularModal } = useModal({
  //   type: 'full',
  //   title: '정규 스케줄 등록',
  //   children: <ModalRegularLesson />,
  // });

  // const { handleShowModal: handleShowAdditionalModal } = useModal({
  //   type: 'md',
  //   title: '보강 스케줄 등록',
  //   children: <ModalAdditionalLesson />,
  // });

  // const handleChangeDate = (date: Date) => setCalendarDate(date);

  const handlePrevClick = () =>
    setCalendarDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1),
    );
  const handleNextClick = () =>
    setCalendarDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1),
    );

  return (
    <Body title={'스케줄 관리'} toolbar={<Toolbar />}>
      <Section>
        <PeriodNavigation
          date={calendarDate}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
        {/* <DayScheduleCalendar date={calendarDate} coachList={data ?? []} /> */}
      </Section>
      {/* <CourtContainer /> */}
      {/* <ButtonToolbar
        calendarDate={calendarDate}
        handleChangeDate={handleChangeDate}
        handleShowRegularModal={handleShowRegularModal}
        handleShowAdditionalModal={handleShowAdditionalModal}
      />
      <ScheduleCalendarTable
        isMobile={isMobile}
        date={calendarDate}
        coachList={data ?? []}
      />
       */}
    </Body>
  );
};
