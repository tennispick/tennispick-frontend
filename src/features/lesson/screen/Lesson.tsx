import { useState } from 'react';

import { PageHeader, TabList, Button, Portal } from '@components/index';
import { EditWhiteIcon } from '@icons/index';
import { useLessonListQuery } from '../query/LessonQuery';
import LessonList from '../component/LessonList';
import Loading from '@components/common/Loading';
import Modal from '@components/layer/Modal';
import LessonModal from '../component/modal/LessonModal';
import { css } from 'styled-system/css';

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
  const [showModal, setShowModal] = useState<boolean>(false);

  const { data } = useLessonListQuery({ type: currentTab });

  if (!data) return <Loading />;

  return (
    <>
      <PageHeader title={'레슨권 목록'} />
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
            onClick={() => setShowModal(true)}
          />
        }
      />
      <LessonList list={data} />
      {showModal && (
        <Portal id={'portal'}>
          <Modal
            title={'레슨권 생성'}
            showModal={showModal}
            setShowModal={setShowModal}
            className={css({ top: '47.5%' })}
          >
            <LessonModal setShowModal={setShowModal} />
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default LessonScreen;
