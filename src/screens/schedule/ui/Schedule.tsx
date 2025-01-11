'use client';

import { useState } from 'react';

import CourtContainer from '../../../이전 파일들/features/schedule/component/CourtContainer';
import ModalAdditionalLesson from '../../../이전 파일들/features/schedule/component/modal/additionalLesson/ModalAdditionalLesson';
import ModalRegularLesson from '../../../이전 파일들/features/schedule/component/modal/regularLesson/ModalRegularLesson';
import useModal from 'src/이전 파일들/hooks/useModal';

import DayScheduleCalendar from '../../../이전 파일들/features/schedule/component/DayScheduleCalendar';
import { PeriodNavigation, Toolbar } from '..';
import { Body, Section } from '@/app/layout';
import { useCoachsQuery } from '@/features/coach/api/queries';
import { useCourtsQuery } from '@/features/court/api/queries';
import { CoachsBadges } from './badges/Coachs';
import { CourtsBadges } from './badges/Courts';

export const Schedule = () => {

  const today = new Date();
  const [calendarDate, setCalendarDate] = useState(today);

  const { data: coachData } = useCoachsQuery();
  const { data: courtData } = useCourtsQuery();

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
        <CoachsBadges data={coachData} />
        <CourtsBadges data={courtData} />
        <PeriodNavigation
          date={calendarDate}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
        <DayScheduleCalendar
          date={calendarDate}
          coachList={[]}
        />
      </Section>
      {/* <CourtContainer /> */}
      {/*
      <ScheduleCalendarTable
        isMobile={isMobile}
        date={calendarDate}
        coachList={data ?? []}
      />
       */}
    </Body>
  );
};
