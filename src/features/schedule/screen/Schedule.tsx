import { useState } from 'react';
import PageHeader from '@components/common/PageHeader';
import Portal from '@components/Portal';
import Modal from '@components/layer/Modal';
import ScheduleCreateModal from '@features/schedule/component/modal/CreateModal';
import DaySchedule from '../component/DaySchedule';

const Schedule = () => {
  const today = new Date();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType] = useState<string>('');

  return (
    <>
      <PageHeader title={'스케줄 관리'} />
      <DaySchedule date={today} />
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
