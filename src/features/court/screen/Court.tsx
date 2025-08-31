'use client';

import Loading from '@/shared/components/common/Loading';
import { useCourtListQuery } from '../query/courtQuery';
import {
  CourtList,
  DetailCourt,
  GenerateCourtModal,
  PageHeader,
  Portal,
} from '@/shared/components/index';
import IconButton from '@/shared/components/button/IconButton';
import { EditWhiteIcon } from '@icons/index';
import { useState } from 'react';
import Tab from '@widgets/Tab';
import RightSideContainer from '@/shared/components/layer/RightSideContainer';
import useModal from '@hooks/useModal';

const CourtScreen = () => {
  const { Tabs, TabLists, TabList, TabPanels, TabPanel } = Tab();
  const { isLoading, isFetching, data } = useCourtListQuery({ enabled: true });

  const [courtId, setCourtId] = useState<string>('');
  const [showRightSide, setShowRightSide] = useState<boolean>(false);

  const handleShowCourtDetailClick = (id: string) => {
    setCourtId(id);
    setShowRightSide(true);
  };

  const handleHideRightSideClick = () => setShowRightSide(false);

  const { handleShowModal: handleShowRegularModal } = useModal({
    type: 'md',
    title: '코트 생성하기',
    children: <GenerateCourtModal />,
  });

  if (isLoading || isFetching) return <Loading />;

  return (
    <>
      <PageHeader title={'코트 목록'} />
      <Tabs defaultActiveKey={'all'}>
        <TabLists>
          <TabList activeKey={'all'}>전체</TabList>
        </TabLists>
        <div className="absolute right-6 top-[76px]">
          <IconButton
            iconAlign="left"
            iconSrc={EditWhiteIcon}
            iconAlt="court"
            variant="primary"
            size="md"
            label={'코트 생성하기'}
            onClick={handleShowRegularModal}
            className="ml-auto"
          />
        </div>
        <TabPanels className="h-[calc(100%_-_2.875rem_-_52px)]">
          <TabPanel activeKey={'all'} className="h-full">
            <CourtList
              data={data!}
              handleShowCourtDetailClick={handleShowCourtDetailClick}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
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
