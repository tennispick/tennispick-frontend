import { useState } from 'react';

import { Button, Filter, PageHeader, Search, TabList } from '@components/index';
import { comunityTabList } from '@mocks/tabList';
import { EditWhiteIcon } from '@icons/index';
import NoticeList from '@components/community/List';
import { useRouter } from 'next/navigation';

const CommunityPage = () => {
  const [currentTab, setCurrentTab] = useState<string>(comunityTabList[0].id);
  const [tabList] = useState(comunityTabList);

  const router = useRouter();

  return (
    <>
      <PageHeader title={'공지사항'} />
      <Filter />
      <Search />
      <TabList
        state={currentTab}
        setState={setCurrentTab}
        list={tabList}
        borderBottom={true}
        buttonElement={
          <Button
            variant={'iconBtn'}
            label={'작성하기'}
            src={EditWhiteIcon}
            imageCss={{
              width: '20px',
              height: '20px',
              margin: '0 8px 0 0',
            }}
            css={{
              backgroundColor: 'var(--business-active-color)',
              color: 'var(--white100)',
            }}
            onClick={() => router.push('/community/notice/create')}
          />
        }
      />
      <NoticeList />
    </>
  );
};

export default CommunityPage;
