import styled from "@emotion/styled";
import infoIcon from "@icons/info.svg";
import { ImageContainer } from "@styles/styles";

const NoResult = ({ description }: { description: string }) => {
  return (
    <Container>
      <ScriptContainer>
        <ImageContainer
          src={infoIcon}
          alt={"info icon"}
          width={20}
          height={20}
          margin={"0 6px 0 0"}
        />
        {description}
      </ScriptContainer>
    </Container>
  )
};

const Container = styled.div({
  position: "relative",
  width: "100%",
  height: "100%",
  backgroundColor: "var(--basic-grey-2-color)",
  borderRadius: "inherit"
});
const ScriptContainer = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  alignItems: "center"
});

export default NoResult;