'use client';

import { useState } from 'react';

import { PageHeader, Portal, Modal } from '@/shared/components/index';
import { CustomerWhiteIcon } from '@icons/index';
import CoachList from '../component/CoachList';
import { useGetCoachListQuery } from '../query/coachQuery';
import Loading from '@/shared/components/common/Loading';
import CoachCreateModal from '../component/modal/CreateModal';
import Tab from '@widgets/Tab';
import IconButton from '@/shared/components/button/IconButton';

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
        <div className="absolute top-[76px] right-6">
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
        <TabPanels className="h-[calc(100%-2.875rem-52px)]">
          <TabPanel activeKey={'all'} className="h-full">
            <CoachList data={data} />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Portal id="modal">
        {openModal && (
          <Modal
            title={'코치 등록하기'}
            openModal={openModal}
            setOpenModal={setOpenModal}
          >
            <CoachCreateModal setOpenModal={setOpenModal} />
          </Modal>
        )}
      </Portal>
    </>
  );
};

export default CoachScreen;
