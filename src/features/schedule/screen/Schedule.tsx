'use client';

import { useState } from 'react';
import PageHeader from '@components/common/PageHeader';
import Portal from '@components/Portal';
import Modal from '@components/layer/Modal';
import ButtonToolbar from '@features/schedule/component/buttonToolbar/ButtonToolBar';
import { useGetCoachListQuery } from '@features/coach/query/coachQuery';
import useMobile from '@hooks/useMobile';
import { css } from 'styled-system/css';
import CourtContainer from '../component/CourtContainer';
import ModalAdditionalLesson from '../component/modal/additionalLesson/ModalAdditionalLesson';
import ModalRegularLesson from '../component/modal/regularLesson/ModalRegularLesson';
import ScheduleCalendarTable from '../component/scheduleCalendarTable/ScheduleCalendarTable';

const Schedule = () => {
  const today = new Date();

  const isMobile = useMobile();
  const [calendarDate, setCalendarDate] = useState(today);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<'regular' | 'additional'>(
    'regular',
  );

  const { data } = useGetCoachListQuery({});

  const handleChangeDate = (date: Date) => setCalendarDate(date);

  const handleCreateRegularLessonClick = () => {
    setModalType('regular');
    setOpenModal(true);
  };

  const handleCreateAdditionalLessonClick = () => {
    setModalType('additional');
    setOpenModal(true);
  };

  return (
    <>
      <PageHeader title={'스케줄 관리'} />
      <CourtContainer />
      <ButtonToolbar
        calendarDate={calendarDate}
        handleChangeDate={handleChangeDate}
        handleCreateRegularLessonClick={handleCreateRegularLessonClick}
        handleCreateAdditionalLessonClick={handleCreateAdditionalLessonClick}
      />
      <ScheduleCalendarTable
        isMobile={isMobile}
        date={calendarDate}
        coachList={data ?? []}
      />
      {/* <DaySchedule
        isMobile={isMobile}
        date={calendarDate}
        coachList={data ?? []}
      /> */}
      {openModal && (
        <Portal id="portal">
          <Modal
            title={
              modalType === 'regular' ? '정규 스케줄 등록' : '보강 스케줄 등록'
            }
            openModal={openModal}
            setOpenModal={setOpenModal}
            className={css({
              top: '45%',
              maxWidth: '1440px',
              minHeight: '500px',
              width: modalType === 'regular' ? '1440px' : '720px',
            })}
          >
            {
              {
                regular: <ModalRegularLesson />,
                additional: <ModalAdditionalLesson />,
              }[modalType]
            }
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default Schedule;
