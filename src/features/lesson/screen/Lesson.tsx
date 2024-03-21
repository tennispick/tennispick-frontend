import { useState } from 'react';

import { Filter, PageHeader, Search, TabList, Button } from '@components/index';
import { EditWhiteIcon } from '@icons/index';
import { useLessonListQuery } from '../query/LessonQuery';
import LessonList from '../component/LessonList';
import Loading from '@components/common/Loading';

const LessonScreen = () => {
  const tabListArr = [
    {
      id: 'all',
      name: '전체 레슨',
    },
    {
      id: 'weekday',
      name: '평일 레슨',
    },
    {
      id: 'weekend',
      name: '주말 레슨',
    },
    {
      id: 'coupon',
      name: '쿠폰 레슨',
    },
  ];

  const [currentTab, setCurrentTab] = useState<string>(tabListArr[0].id);
  const [tabList] = useState(tabListArr);

  const { data } = useLessonListQuery({ type: currentTab });

  if (!data) return <Loading />;

  return (
    <>
      <PageHeader title={'레슨권 목록'} />
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
            label={'레슨권 생성하기'}
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
            onClick={() => {}}
          />
        }
      />
      <LessonList list={data} />
    </>
  );
};

export default LessonScreen;
