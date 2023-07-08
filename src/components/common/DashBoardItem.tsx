import { PropsWithChildren, ReactElement } from "react";
import styled from "@emotion/styled";
import { CSS_TYPE } from "@styles/styles";

export interface DashBoard {
  width?: string;
  height?: string;
  minHeight?: string;
  margin?: string;
  title: string;
};

const DashBoardItem = ({ width, height, minHeight, margin, title, children }: PropsWithChildren<DashBoard>): ReactElement => {
  return (
    <Container
      width={width}
      height={height}
      minHeight={minHeight}
      margin={margin}
    >
      <HeaderContainer>
        <TitleWrapper>{title}</TitleWrapper>
        <BtnWrapper></BtnWrapper>
      </HeaderContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  )
}

const Container = styled.div<CSS_TYPE>(
  {
    position: "relative",
    border: "1px solid var(--basic-grey-color)",
    borderRadius: "25px",
    padding: "16px"
  },
  props => ({
    width: props.width ? props.width : "auto",
    height: props.height ? props.height : "auto",
    minHeight: props.minHeight ? props.minHeight : "auto",
    margin: props.margin ? props.margin : "0"
  })
);
const HeaderContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 0 0 4px",
  margin: "0 0 16px 0"
});
const TitleWrapper = styled.div({
  fontWeight: "600"
});
const BtnWrapper = styled.div({});
const ChildrenContainer = styled.div({
  position: "relative",
  width: "100%",
  height: "calc(100% - 42px)",
  borderRadius: "25px"
});

export default DashBoardItem;