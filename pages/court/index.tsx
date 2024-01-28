import { useState } from 'react';

import Modal from '@components/layer/Modal';
import {
  PageHeader,
  Button,
  CourtList,
  DetailCourt,
  Portal,
  GenerateCourtModal,
} from '@components/index';
import { getCourtQuery } from '@queries/index';
import { EditWhiteIcon } from '@icons/index';
import RightSideContainer from '@components/layer/RightSideContainer';

const CourtPage = () => {
  // lessonType={tabList[tabList.findIndex(e => e.id === currentTab)].value}

  const { data } = getCourtQuery();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [courtId, setCourtId] = useState<string>('');
  const [showRightSide, setShowRightSide] = useState<boolean>(false);

  return (
    <>
      <PageHeader title={'코트 목록'} />
      <Button
        variant={'iconBtn'}
        label={'코트 생성하기'}
        src={EditWhiteIcon}
        css={{
          border: 0,
          backgroundColor: 'var(--business-sub-color)',
          color: 'var(--white100)',
          padding: '12px 16px',
          margin: '0 12px 0 auto',
        }}
        onClick={() => setShowModal(true)}
      />
      {data && (
        <CourtList
          data={data.data}
          setCourtId={setCourtId}
          setShowRightSide={setShowRightSide}
        />
      )}
      {showModal && (
        <Portal id={'portal'}>
          <Modal
            title={'코트 생성'}
            showModal={showModal}
            setShowModal={setShowModal}
          >
            <GenerateCourtModal setShowModal={setShowModal} />
          </Modal>
        </Portal>
      )}
      {showRightSide && (
        <Portal id={'rightSide'}>
          <RightSideContainer
            title={'코트 상세정보'}
            showRightSide={showRightSide}
            setShowRightSide={setShowRightSide}
          >
            <DetailCourt id={courtId} setShowRightSide={setShowRightSide} />
          </RightSideContainer>
        </Portal>
      )}
    </>
  );
};

export default CourtPage;
