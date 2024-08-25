import { useState, useEffect } from 'react';

import { PageHeader, TabList, Button, Portal, Modal } from '@components/index';
import { CustomerWhiteIcon } from '@icons/index';
import { tabList as coachTabList } from '../data/tabList';
import CoachList from '../component/CoachList';
import { useGetCoachListQuery } from '../query/coachQuery';
import Loading from '@components/common/Loading';
import CoachCreateModal from '../component/modal/CreateModal';
import { css } from 'styled-system/css';

const CoachScreen = () => {
  const { data } = useGetCoachListQuery({});

  const [tabList, setTabList] = useState(coachTabList);
  const [currentTab, setCurrentTab] = useState<string>(tabList[0].id);

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModalClick = () => setOpenModal(true);

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
      <PageHeader title="코치 목록" />
      <TabList
        state={currentTab}
        setState={setCurrentTab}
        list={tabList}
        borderBottom={true}
        buttonElement={
          <Button
            variant="iconBtn"
            label="코치 등록하기"
            src={CustomerWhiteIcon}
            imageCss={{
              width: '20px',
              height: '20px',
              margin: '0 8px 0 0',
            }}
            className={css({
              backgroundColor: 'var(--business-active-color)',
              color: 'var(--white100)',
            })}
            onClick={handleOpenModalClick}
          />
        }
      />
      <CoachList list={data} />
      {openModal && (
        <Portal id="portal">
          <Modal
            title="코치 생성"
            openModal={openModal}
            setOpenModal={setOpenModal}
            className={css({ top: '47.5%' })}
          >
            <CoachCreateModal onCloseModal={handleOpenModalClick} />
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default CoachScreen;
