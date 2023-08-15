import { useState } from "react";
import { v4 as uuidV4 } from "uuid";

import { Filter, PageHeader, Search, TabList, Button, CourtList, } from "@components/index";
import { CustomerWhiteIcon } from "@icons/index";


const CourtPage = () => {
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

  return (
    <>
      <PageHeader title={"코트 목록"} />
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
            label={'코트 생성하기'}
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
      <CourtList />
    </>
  )
};

export default CourtPage;