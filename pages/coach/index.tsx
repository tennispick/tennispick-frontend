import { v4 as uuidV4 } from "uuid";
import Filter from "@components/common/Filter";
import PageHeader from "@components/common/PageHeader";
import Search from "@components/common/Search";
import TabList from "@components/common/TabList";
import { useEffect, useState } from "react";

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
      <TabList state={currentTab} setState={setCurrentTab} list={tabList} borderBottom={true} />
      <div>내용</div>
    </>
  )
};

export default CoachPage;