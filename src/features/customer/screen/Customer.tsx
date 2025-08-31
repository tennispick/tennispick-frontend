'use client';

import Modal from '@/shared/components/layer/Modal';
import {
  PageHeader,
  CustomerList,
  Portal,
  GenerateCustomerModal,
} from '@/shared/components/index';
import { CustomerWhiteIcon } from '@icons/index';
import { useCustomerListQuery } from '../query/CustomerQuery';
import Loading from '@/shared/components/common/Loading';
import Tab from '@widgets/Tab';
import IconButton from '@/shared/components/button/IconButton';
import { useState } from 'react';
import { INFINITEQUERY_PAGE_LIMIT } from '@/shared/constants/page';

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
        <div className="absolute top-[76px] right-6">
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
        <TabPanels className="h-[calc(100%-2.875rem-52px)]">
          <TabPanel activeKey={'all'} className="h-full">
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
            className="top-[47.5%]"
          >
            <GenerateCustomerModal setOpenModal={setOpenModal} />
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default CustomerScreen;
