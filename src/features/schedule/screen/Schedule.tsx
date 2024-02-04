import { useState } from 'react';
import PageHeader from '@components/common/PageHeader';
import Portal from '@components/Portal';
import Modal from '@components/layer/Modal';
import ScheduleCreateModal from '@features/schedule/component/modal/CreateModal';
import { CalendarWhiteIcon } from '@icons/index';
import DaySchedule from '../component/DaySchedule';
import { addDays } from '@utils/date';
import { Button } from '@components/index';

const Schedule = () => {
  const today = new Date();

  const [calendarDate, setCalendarDate] = useState(today);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('');

  const handleWeekClick = (days: number) => {
    const currentDayOfWeek = calendarDate.getDay();
    const mondayDate = new Date(calendarDate);
    mondayDate.setDate(
      calendarDate.getDate() -
        currentDayOfWeek +
        (currentDayOfWeek === 0 ? -6 : 1),
    );

    setCalendarDate(addDays(mondayDate, days));
  };

  return (
    <>
      <PageHeader title={'스케줄 관리'} />
      <div>코치 영역</div>
      <div
        css={{ display: 'flex', justifyContent: 'end', margin: '0 0 16px 0' }}
      >
        <Button
          label="이전"
          onClick={() => handleWeekClick(-7)}
          css={{ minWidth: '100px', padding: '10px 16px', margin: '0 8px 0 0' }}
        />
        <Button
          label="다음"
          onClick={() => handleWeekClick(7)}
          css={{ minWidth: '100px', padding: '10px 16px' }}
        />
      </div>
      <div
        css={{ display: 'flex', justifyContent: 'end', margin: '0 0 16px 0' }}
      >
        <Button
          variant={'iconBtn'}
          label={'일정 등록하기'}
          src={CalendarWhiteIcon}
          css={{
            backgroundColor: 'var(--business-active-color)',
            color: 'var(--white100)',
            margin: '0 8px 0 0',
          }}
          onClick={() => {
            setShowModal(true);
            setModalType('regular');
          }}
        />
        <Button
          variant={'iconBtn'}
          label={'보강 등록하기'}
          src={CalendarWhiteIcon}
          css={{
            backgroundColor: 'var(--business-active-color)',
            color: 'var(--white100)',
          }}
          onClick={() => {
            setShowModal(true);
            setModalType('additional');
          }}
        />
      </div>
      <DaySchedule date={calendarDate} />
      {showModal && (
        <Portal id={'portal'}>
          <Modal
            title={
              modalType === 'regular' ? '정규 스케줄 등록' : '보강 스케줄 등록'
            }
            showModal={showModal}
            setShowModal={setShowModal}
            css={{
              top: '45%',
              maxWidth: '1440px',
              minHeight: '520px',
              width: '1440px',
            }}
          >
            <ScheduleCreateModal modalType={modalType} />
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default Schedule;
