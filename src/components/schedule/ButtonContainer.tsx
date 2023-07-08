import React, { Dispatch, SetStateAction } from "react";
import styled from "@emotion/styled";
import { Button } from "@styles/styles";

interface ButtonContainer {
  viewCategory: string;
  setViewCategory: Dispatch<SetStateAction<string>>;
}

const ButtonContainer = ({ viewCategory, setViewCategory }: ButtonContainer) =>{
  return (
    <Container>
      <Button
        fontSize={"0.95rem"}
        fontWeight={"400"}
        color={"var(--basic-white-color)"}
        backgroundColor={"var(--business-active-color)"}
      >주차별 보기</Button>
      <Button
        fontSize={"0.95rem"}
        fontWeight={"400"}
        margin={"0 0 0 16px"}
        border={"1px solid var(--deactive-color)"}
      >요일별 보기</Button>
    </Container>
  )
};

const Container = styled.div({
  width: "fit-content",
  margin: "8px 0 8px auto"
});

export default React.memo(ButtonContainer);