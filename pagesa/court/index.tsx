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
import { css } from 'styled-system/css';

const CourtPage = () => {
  const { data } = getCourtQuery();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [courtId, setCourtId] = useState<string>('');
  const [showRightSide, setShowRightSide] = useState<boolean>(false);

  const handleShowModalClick = () => setOpenModal(true);

  return (
    <>
      <PageHeader title={'코트 목록'} />
      <Button
        variant={'iconBtn'}
        label={'코트 생성하기'}
        src={EditWhiteIcon}
        className={css({
          border: 0,
          backgroundColor: 'var(--business-sub-color)',
          color: 'var(--white100)',
          padding: '12px 16px',
          margin: '0 12px 0 auto',
        })}
        onClick={handleShowModalClick}
      />
      {data && (
        <CourtList
          data={data.data}
          setCourtId={setCourtId}
          setShowRightSide={setShowRightSide}
        />
      )}
      {openModal && (
        <Portal id={'portal'}>
          <Modal title={'코트 생성'} setOpenModal={setOpenModal}>
            <GenerateCourtModal setOpenModal={setOpenModal} />
          </Modal>
        </Portal>
      )}
      {showRightSide && (
        <Portal id={'drawer'}>
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
