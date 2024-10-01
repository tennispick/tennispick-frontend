'use client';

import { useState } from 'react';

import { PageHeader, Portal, Modal } from '@components/index';
import { CustomerWhiteIcon } from '@icons/index';
import CoachList from '../component/CoachList';
import { useGetCoachListQuery } from '../query/coachQuery';
import Loading from '@components/common/Loading';
import CoachCreateModal from '../component/modal/CreateModal';
import { css } from 'styled-system/css';
import Tab from '@widgets/Tab';
import IconButton from '@components/button/IconButton';

const CoachScreen = () => {
  const { Tabs, TabLists, TabList, TabPanels, TabPanel } = Tab();
  const { isLoading, data } = useGetCoachListQuery({});

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCreateCoachClick = () => setOpenModal(true);

  if (isLoading || !data) return <Loading />;

  return (
    <>
      <PageHeader title="코치 목록" />
      <Tabs defaultActiveKey={'all'}>
        <TabLists>
          <TabList activeKey={'all'}>전체</TabList>
        </TabLists>
        <div
          className={css({ position: 'absolute', top: '76px', right: '24px' })}
        >
          <IconButton
            iconAlign="left"
            iconSrc={CustomerWhiteIcon}
            iconAlt="coach"
            variant="primary"
            size="md"
            label={'코치 등록하기'}
            onClick={handleCreateCoachClick}
          />
        </div>
        <TabPanels className={css({ height: 'calc(100% - 2.875rem - 52px)' })}>
          <TabPanel activeKey={'all'} className={css({ height: '100%' })}>
            <CoachList data={data} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      {openModal && (
        <Portal id="portal">
          <Modal
            title="코치 생성"
            setOpenModal={setOpenModal}
            css={{ height: '90%', top: '47.5%' }}
          >
            <CoachCreateModal handleClose={handleCreateCoachClick} />
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default CoachScreen;
