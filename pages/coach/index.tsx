import { v4 as uuidV4 } from "uuid";
import Filter from "@components/common/Filter";
import PageHeader from "@components/common/PageHeader";
import Search from "@components/common/Search";
import TabList from "@components/common/TabList";
import { useState } from "react";
import { CoachList } from "@components/coach/List";
import Button from "@components/common/Button";
import { CustomerWhiteIcon } from "@icons/index";

const CoachPage = () => {

  const tabListArr = [
    {
      id: uuidV4(),
      name: "전체",
      value: "all"
    },
    {
      id: uuidV4(),
      name: "강습중",
      value: "court6"
    },
    {
      id: uuidV4(),
      name: "강습없음",
      value: "court9"
    },
  ];

  const [currentTab, setCurrentTab] = useState<string>(tabListArr[0].id);
  const [tabList,] = useState(tabListArr);

  return (
    <>
      <PageHeader title={"코치 목록"} />
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
            label={'코치 등록하기'}
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
            onClick={() => {}}
          />
        }
      />
      <CoachList />
    </>
  )
};

export default CoachPage;