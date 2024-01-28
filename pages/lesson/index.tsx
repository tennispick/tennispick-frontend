import { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

import {
  Filter,
  PageHeader,
  Search,
  TabList,
  Button,
  LessonList,
} from '@components/index';
import { EditWhiteIcon } from '@icons/index';

const LessonPage = () => {
  const tabListArr = [
    {
      id: uuidV4(),
      name: '전체 레슨',
      value: 'all',
    },
    {
      id: uuidV4(),
      name: '평일 레슨',
      value: 'weekday',
    },
    {
      id: uuidV4(),
      name: '주말 레슨',
      value: 'weekend',
    },
    {
      id: uuidV4(),
      name: '쿠폰 레슨',
      value: 'coupon',
    },
  ];

  const [currentTab, setCurrentTab] = useState<string>(tabListArr[0].id);
  const [tabList] = useState(tabListArr);

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
      <LessonList />
    </>
  );
};

export default LessonPage;
