'use client';

import Loading from '@components/common/Loading';
import { useCourtListQuery } from '../query/courtQuery';
import {
  CourtList,
  DetailCourt,
  GenerateCourtModal,
  PageHeader,
  Portal,
} from '@components/index';
import Modal from '@components/layer/Modal';
import IconButton from '@components/button/IconButton';
import { EditWhiteIcon } from '@icons/index';
import { useState } from 'react';
import { css } from 'styled-system/css';
import Tab from '@widgets/Tab';
import RightSideContainer from '@components/layer/RightSideContainer';

const CourtScreen = () => {
  const { Tabs, TabLists, TabList, TabPanels, TabPanel } = Tab();
  const { isLoading, isFetching, data } = useCourtListQuery({ enabled: true });
  const [courtId, setCourtId] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [showRightSide, setShowRightSide] = useState<boolean>(false);

  if (isLoading || isFetching) return <Loading />;

  const handleCreateCourtlClick = () => setOpenModal(true);

  const handleShowCourtDetailClick = (id: string) => {
    setCourtId(id);
    setShowRightSide(true);
  };

  const handleHideRightSideClick = () => setShowRightSide(false);

  return (
    <>
      <PageHeader title={'코트 목록'} />
      <Tabs defaultActiveKey={'all'}>
        <TabLists>
          <TabList activeKey={'all'}>전체</TabList>
        </TabLists>
        <div
          className={css({ position: 'absolute', top: '76px', right: '24px' })}
        >
          <IconButton
            iconAlign="left"
            iconSrc={EditWhiteIcon}
            iconAlt="court"
            variant="primary"
            size="md"
            label={'코트 생성하기'}
            onClick={handleCreateCourtlClick}
            className={css({ marginLeft: 'auto' })}
          />
        </div>
        <TabPanels className={css({ height: 'calc(100% - 2.875rem - 52px)' })}>
          <TabPanel activeKey={'all'} className={css({ height: '100%' })}>
            <CourtList
              data={data!}
              handleShowCourtDetailClick={handleShowCourtDetailClick}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
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
            <DetailCourt
              id={courtId}
              handleHideRightSideClick={handleHideRightSideClick}
            />
          </RightSideContainer>
        </Portal>
      )}
    </>
  );
};

export default CourtScreen;
