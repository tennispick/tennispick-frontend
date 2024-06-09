import { useState } from 'react';
import PageHeader from '@components/common/PageHeader';
import Portal from '@components/Portal';
import Modal from '@components/layer/Modal';
import ScheduleCreateModal from '@features/schedule/component/modal/CreateModal';
import DaySchedule from '../component/DaySchedule';
import ButtonContainer from '../component/ButtonContainer';
import { useGetCoachListQuery } from '@features/coach/query/coachQuery';
import useMobile from '@hooks/useMobile';
import { useGetCourtListQuery } from '@features/court/query/courtQuery';

const Schedule = () => {
  const today = new Date();

  const isMobile = useMobile();
  const [calendarDate, setCalendarDate] = useState(today);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('');

  const { data: coachList } = useGetCoachListQuery({});

  const { data: courtList } = useGetCourtListQuery({});

  return (
    <>
      <PageHeader title={'스케줄 관리'} />
      <div css={{ padding: '0 0 12px 0' }}>
        <ul css={{ display: 'flex' }}>
          {courtList &&
            courtList?.map((el) => {
              return (
                <li
                  key={el.id}
                  css={{
                    backgroundColor: `var(--black100)`,
                    color: 'var(--white100)',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    margin: '0 8px 0 0',
                  }}
                >
                  <span>{el.name}</span>
                </li>
              );
            })}
        </ul>
      </div>
      <ButtonContainer
        calendarDate={calendarDate}
        setCalendarDate={setCalendarDate}
        setModalType={setModalType}
        setShowModal={setShowModal}
      />
      <DaySchedule
        isMobile={isMobile}
        date={calendarDate}
        coachList={coachList ? coachList : []}
      />
      {showModal && (
        <Portal id='portal'>
          <Modal
            title={
              modalType === 'regular' ? '정규 스케줄 등록' : '보강 스케줄 등록'
            }
            showModal={showModal}
            setShowModal={setShowModal}
            css={{
              top: '45%',
              maxWidth: '1440px',
              minHeight: '500px',
              width: modalType === 'regular' ? '1440px' : '720px',
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
