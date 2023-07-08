import React from "react";
import styled from "@emotion/styled";
import { Input, Select } from "@styles/styles";
import SearchIcon from "@icons/search_black_icon.svg";

interface SearchProps {

}

const Search = ({ }: SearchProps) => {

  return (
    <Container>
      <SearchContainer>
        <Select padding={"6px 12px 6px 8px"}>
          <option value={"all"}>전체</option>
        </Select>
        <SearchInput type={"text"} placeholder={"검색어를 입력해주세요."} />
      </SearchContainer>
    </Container>
  )
}

const Container = styled.div({
  position: "relative",
  width: "100%",
  height: "auto"
})
const SearchContainer = styled.div({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "fit-content",
  margin: "12px 0 0 auto",
})
const SearchInput = styled(Input)({
  minWidth: '480px',
  fontSize: '0.9rem',
  borderRadius: '8px',
  padding: '6px 32px 6px 10px',
  margin: '0 0 0 8px',

  '&::placeholder': {
    padding: '0 0 0 24px',
    backgroundImage: `url(${SearchIcon.src})`,
    backgroundSize: '',
    backgroundPosition: '1px center',
    backgroundRepeat: 'no-repeat',
    textAlign: 'left',
    textIndent: '0'
  }
})

export default React.memo(Search);