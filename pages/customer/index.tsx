import { useState } from "react";
import { v4 as uuidV4 } from "uuid";

import { Filter, PageHeader, Search, TabList, Button, CustomerList } from "@components/index";
import { CustomerWhiteIcon } from "@icons/index";

const CustomerPage = () =>{

  const tabListArr = [
    {
      id: uuidV4(),
      name: "전체",
      value: "all"
    },
    {
      id: uuidV4(),
      name: "수강중",
      value: "court6"
    },
    {
      id: uuidV4(),
      name: "수강만료",
      value: "court9"
    },
  ];

  const [currentTab, setCurrentTab] = useState<string>(tabListArr[0].id);
  const [tabList,] = useState(tabListArr);

  return(
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
            onClick={() => { }}
          />
        }
      />
      <CustomerList />
    </>
  )
};

export default CustomerPage;