import { useState, useEffect } from 'react';

import { PageHeader, TabList, Button } from '@components/index';
import { CustomerWhiteIcon } from '@icons/index';
import { tabList as coachTabList } from '../data/tabList';
import CoachList from '../component/CoachList';
import { useGetCoachListQuery } from '../query/coachQuery';
import Loading from '@components/common/Loading';

const CoachScreen = () => {
  const { data } = useGetCoachListQuery({});

  const [tabList, setTabList] = useState(coachTabList);
  const [currentTab, setCurrentTab] = useState<string>(tabList[0].id);

  useEffect(() => {
    if (data) {
      const prevTabList = [...tabList];
      prevTabList[0].name = `전체(${data.length})`;
      setTabList(prevTabList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (!data) return <Loading />;

  return (
    <>
      <PageHeader title={'코치 목록'} />
      {/* <Filter /> */}
      {/* <Search /> */}
      <TabList
        state={currentTab}
        setState={setCurrentTab}
        list={tabList}
        borderBottom={true}
        buttonElement={
          <Button
            variant={'iconBtn'}
            label={'코치 등록하기'}
            src={CustomerWhiteIcon}
            imageCss={{
              width: '20px',
              height: '20px',
              margin: '0 8px 0 0',
            }}
            css={{
              backgroundColor: 'var(--business-active-color)',
              color: 'var(--white100)',
            }}
            onClick={() => {}}
          />
        }
      />
      {/* <CoachList /> */}
      <CoachList list={data} />
    </>
  );
};

export default CoachScreen;
