'use client';

import IconButton from '@/shared/components/button/IconButton';
import NoticeList from '@features/community/component/List';
import { PageHeader } from '@/shared/components/index';
import Tab from '@widgets/Tab';
import { EditWhiteIcon } from '@icons/index';

import { useRouter } from 'next/navigation';

const CommunityScreen = () => {
  const { Tabs, TabLists, TabList, TabPanels, TabPanel } = Tab();

  const router = useRouter();

  const handleCreateNoticeClick = () => router.push('/community/create');

  return (
    <>
      <PageHeader title={'공지사항'} />
      <Tabs defaultActiveKey={'all'}>
        <TabLists>
          <TabList activeKey={'all'}>전체</TabList>
        </TabLists>
        <div className="absolute right-6 top-[76px]">
          <IconButton
            iconAlign="left"
            iconSrc={EditWhiteIcon}
            iconAlt="customer"
            variant="primary"
            size="md"
            label={'공지사항 등록하기'}
            onClick={handleCreateNoticeClick}
          />
        </div>
        <TabPanels className="h-[calc(100%_-_2.875rem_-_52px)]">
          <TabPanel activeKey={'all'} className="h-full">
            <NoticeList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default CommunityScreen;
