import React, { useState, MouseEvent } from "react";
import styled from "@emotion/styled";
import { CSS_TYPE, ImageContainer as Image } from "@styles/styles";
import FilterIcon from "@icons/filter_black_icon.svg";
import { dropDownActive, dropDownDeActive } from "@styles/animation";

const Filter = () => {

  const [showDropDownContent, setShowDropDownContent] = useState<boolean>(false);

  const onClickShowDropDownHandler = (e: MouseEvent<HTMLDivElement>) => {

    setShowDropDownContent(!showDropDownContent);
  }

  // showDropDownContent에 따라서 애니메이션을 다르게 주어보자

  return (
    <Container>
      <FilterContainer
        onClick={(e) => onClickShowDropDownHandler(e)}
      >
        <Image
          src={FilterIcon}
          alt={"filter icon"}
          width={16}
          height={16}
          margin={"0 8px 0 0"}
        />
        <div>
          <span>정렬기준</span>
          <span>생성날짜</span>
        </div>
        <div>
          <span>정렬유형</span>
          <span>오름차순</span>
        </div>
        <FilterDropDownContainer
          className={showDropDownContent ? "" : "hidden"}
          css={showDropDownContent ? dropDownActive : dropDownDeActive}
          onClick={(e) => e.stopPropagation()}
        >
          열릴 공간임
        </FilterDropDownContainer>
      </FilterContainer>
    </Container>
  )
}

const Container = styled.div({
  position: "relative",
  width: "100%",
  height: "auto"
})
const FilterContainer = styled.div({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "fit-content",
  margin: "0 0 0 auto",
  padding: "6px 16px",
  border: "1px solid var(--basic-grey-3-color)",
  borderRadius: "8px",
  cursor: "pointer"
})

const FilterDropDownContainer = styled.div<CSS_TYPE>(
  {
    position: "absolute",
    width: "100%",
    top: "36px",
    left: "0",
    padding: "6px 16px",
    border: "1px solid var(--basic-grey-3-color)",
    borderRadius: "8px",
    backgroundColor: "var(--basic-white-color)",
    zIndex: 99
  },
  props => ({

  })
)

export default React.memo(Filter);