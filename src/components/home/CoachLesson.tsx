import DashBoardItem from "@components/common/DashBoardItem";
import styled from "@emotion/styled";
import NoResult from "@components/common/NoResult";
import { useState } from "react";

const CoachLesson = () => {

  const [data, setData] = useState([]);

  return (
    <DashBoardItem
      title={"총 0명 중 0명 의 코치님이 오늘 레슨예정이에요!"}
      width={"calc(40% - 12px)"}
      height={"0"}
      minHeight={"65vh"}
      margin={"0 24px 0 0"}
    >
      {
        data.length > 0 ?
          <DataContainer>
            목록이 있을 때
          </DataContainer>
          :
          <NoResult description={"오늘 레슨 예정인 코치님이 없어요."} />
      }
    </DashBoardItem>
  )
};

const DataContainer = styled.div({});

export default CoachLesson;