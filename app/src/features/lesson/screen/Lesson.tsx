'use client';

import { useState } from 'react';

import { PageHeader, Portal } from 'app/src/components/index';
import { EditWhiteIcon } from 'app/src/assets/icons/index';

import LessonList from '../component/LessonList';
import Modal from 'app/src/components/layer/Modal';
import LessonModal from '../component/modal/LessonModal';
import { css } from 'styled-system/css';
import Tab from 'app/src/widgets/Tab';
import IconButton from 'app/src/components/button/IconButton';

const LessonScreen = () => {
  const { Tabs, TabLists, TabList, SingleTabPanel } = Tab();

  const [stateKey, setStateKey] = useState<string>('all');
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCreateLessonClick = () => setOpenModal(true);

  const handleActiveKeyClick = (key: string) => setStateKey(key);

  return (
    <>
      <PageHeader title={'레슨권 목록'} />
      <Tabs defaultActiveKey={'all'}>
        <TabLists>
          <TabList
            activeKey={'all'}
            handleActiveKeyClick={() => handleActiveKeyClick('all')}
          >
            전체
          </TabList>
          <TabList
            activeKey={'weekday'}
            handleActiveKeyClick={() => handleActiveKeyClick('weekday')}
          >
            평일 레슨
          </TabList>
          <TabList
            activeKey={'weekend'}
            handleActiveKeyClick={() => handleActiveKeyClick('weekend')}
          >
            주말 레슨
          </TabList>
          <TabList
            activeKey={'coupon'}
            handleActiveKeyClick={() => handleActiveKeyClick('coupon')}
          >
            쿠폰 레슨
          </TabList>
        </TabLists>
        <div
          className={css({ position: 'absolute', top: '76px', right: '24px' })}
        >
          <IconButton
            iconAlign="left"
            iconSrc={EditWhiteIcon}
            iconAlt="lesson"
            variant="primary"
            size="md"
            label={'레슨권 등록하기'}
            onClick={handleCreateLessonClick}
          />
        </div>
        <SingleTabPanel
          stateKey={stateKey}
          className={css({ height: 'calc(100% - 2.875rem - 52px)' })}
        >
          <LessonList type={stateKey} />
        </SingleTabPanel>
      </Tabs>
      {openModal && (
        <Portal id={'portal'}>
          <Modal
            title={'레슨권 생성'}
            setOpenModal={setOpenModal}
            css={{ top: '47.5%' }}
          >
            <LessonModal setOpenModal={setOpenModal} />
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default LessonScreen;
