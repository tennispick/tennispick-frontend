import React from "react";
import styled from "@emotion/styled";

const PageHeader = ({ title }: { title: string }) => {

  return (
    <Container>{title}</Container>
  )
};

const Container = styled.div({
  fontSize: "1.2rem",
  fontWeight: "600",
  borderBottom: "1px solid var(--basic-grey-color)",
  padding: "0 0 12px 0",
  margin: "0 0 12px 0"
});

export default React.memo(PageHeader);