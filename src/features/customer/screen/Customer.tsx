'use client';

import Modal from '@components/layer/Modal';
import {
  PageHeader,
  CustomerList,
  Portal,
  GenerateCustomerModal,
} from '@components/index';
import { CustomerWhiteIcon } from '@icons/index';
import { css } from 'styled-system/css';
import { useCustomerListQuery } from '../query/CustomerQuery';
import Loading from '@components/common/Loading';
import Tab from '@widgets/Tab';
import IconButton from '@components/button/IconButton';
import { useState } from 'react';
import { INFINITEQUERY_PAGE_LIMIT } from '@/constants/page';

const CustomerScreen = () => {
  const { Tabs, TabLists, TabList, TabPanels, TabPanel } = Tab();

  // TODO isFetchingNextPage Skelton
  const { isLoading, data, hasNextPage, fetchNextPage } = useCustomerListQuery({
    limit: INFINITEQUERY_PAGE_LIMIT,
  });

  const [openModal, setOpenModal] = useState(false);
  const handleFetchNextPage = () => fetchNextPage();

  if (isLoading || !data) return <Loading />;

  return (
    <>
      <PageHeader title={'회원 목록'} />
      <Tabs defaultActiveKey={'all'}>
        <TabLists>
          <TabList activeKey={'all'}>전체</TabList>
        </TabLists>
        <div
          className={css({ position: 'absolute', top: '76px', right: '24px' })}
        >
          <IconButton
            iconAlign="left"
            iconSrc={CustomerWhiteIcon}
            iconAlt="customer"
            variant="primary"
            size="md"
            label={'회원 등록하기'}
            onClick={() => setOpenModal(true)}
          />
        </div>
        <TabPanels className={css({ height: 'calc(100% - 2.875rem - 52px)' })}>
          <TabPanel activeKey={'all'} className={css({ height: '100%' })}>
            <CustomerList
              data={data?.pages}
              hasNextPage={hasNextPage}
              handleFetchNextPage={handleFetchNextPage}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
      {openModal && (
        <Portal id={'portal'}>
          <Modal
            title={'회원 등록'}
            setOpenModal={setOpenModal}
            css={{ top: '47.5%' }}
          >
            <GenerateCustomerModal setOpenModal={setOpenModal} />
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default CustomerScreen;
