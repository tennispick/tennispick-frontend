import React from "react";
import styled from "@emotion/styled";
import { CSS_TYPE } from "@styles/styles";
import { Dispatch, ReactElement, SetStateAction } from "react";

interface ListProps {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  list?: any;
  borderBottom?: boolean;
  buttonElement?: React.ReactNode;
};

const TabList = ({ state, setState, list, borderBottom, buttonElement }: ListProps): ReactElement => {

  return (
    <Container>
      <Lists borderBottom={borderBottom ? "1px solid var(--basic-grey-color)" : ""}>
        {
          (list && list.length > 0) && list.map((item: any) => {
            return (
              <List
                key={item.id}
                value={item.value}
                onClick={() => setState(item.id)}
                color={item.id === state ? "var(--basic-black-color)" : "var(--deactive-color)"}
                fontWeight={item.id === state ? "500" : "300"}
                borderBottom={item.id === state ? "2px solid var(--basic-black-color)" : ""}
              >{item.name}</List>
            )
          })
        }
      </Lists>
    </Container>
  )
};

const Container = styled.div({
  padding: "8px 0 0 0",
});
const Lists = styled.ul<CSS_TYPE>(
  {
    display: "flex",
    alignItems: "center",
  },
  props => ({
    borderBottom: props.borderBottom,
  })
);
const List = styled.li<CSS_TYPE>(
  {
    margin: "0 36px 0 0",
    padding: "0 0 8px 0",
    // transition: "all 0.2s ease-in-out",
    cursor: "pointer"
  },
  props => ({
    color: props.color,
    fontWeight: props.fontWeight,
    borderBottom: props.borderBottom
  })
);

export default React.memo(TabList);