import { useEffect, useState } from "react";

import Modal from "@components/layer/Modal";
import { getCustomerQuery } from "@queries/index";
import { Filter, PageHeader, Search, TabList, Button, CustomerList, Portal, GenerateCustomerModal } from "@components/index";
import { CustomerWhiteIcon, EditWhiteIcon } from "@icons/index";
import { customerTabList } from "@mocks/tabList";

const CustomerPage = () => {

  const { data } = getCustomerQuery();

  const [tabList, setTabList] = useState(customerTabList);
  const [currentTab, setCurrentTab] = useState<string>(tabList[0].id);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (data) {
      let prevTabList = [...tabList];
      prevTabList[0].name = `전체(${data.data.length})`;
      setTabList(prevTabList);
    }
  }, [data])

  return (
    <>
      <PageHeader title={"회원 목록"} />
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
            label={'회원 등록하기'}
            src={CustomerWhiteIcon}
            imageCss={{
              width: "20px",
              height: "20px",
              margin: "0 8px 0 0"
            }}
            css={{
              backgroundColor: 'var(--business-active-color)',
              color: 'var(--basic-white-color)',
            }}
            onClick={() => setShowModal(true)}
          />
        }
      />
      {data && <CustomerList data={data.data} />}
      {
        showModal &&
        <Portal id={'portal'}>
          <Modal
            title={'회원 등록'}
            showModal={showModal}
            setShowModal={setShowModal}
            css={{
              top: '47.5%'
            }}
          >
            <GenerateCustomerModal setShowModal={setShowModal} />
          </Modal>
        </Portal>
      }
    </>
  )
};

export default CustomerPage;