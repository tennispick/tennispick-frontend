'use client';

import IconButton from 'src/이전 파일들/components/button/IconButton';
import NoticeList from '@/이전 파일들/features/community/component/List';
import { PageHeader } from 'src/이전 파일들/components/index';
import Tab from 'src/widgets/Tab';
import { EditWhiteIcon } from 'src/이전 파일들/assets/icons/index';

import { useRouter } from 'next/navigation';
import { css } from 'styled-system/css';

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
        <div
          className={css({ position: 'absolute', top: '76px', right: '24px' })}
        >
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
        <TabPanels className={css({ height: 'calc(100% - 2.875rem - 52px)' })}>
          <TabPanel activeKey={'all'} className={css({ height: '100%' })}>
            <NoticeList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default CommunityScreen;
