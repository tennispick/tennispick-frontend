import styled from "@emotion/styled";
import { commonFormInputList } from "@features/schedule/data/formdataInputList";
import Image from "next/image";
import ScheduleModalRadioInput from "../RadioInput";
import ScheduleModalSelectBox from "../SelectBox";

const ScheduleModalRegularLessonCommonFormInputList = () => {
  return(
    <div
      css={{
        position: 'relative',
        width: '15%'
      }}
    >
      {commonFormInputList.map(({ type, fieldType, list, title, icon, alt }) => {
        return(
          <div css={{margin: '0 0 24px 0'}} key={type}>
            <HeadContainer>
              <Image
                src={icon}
                alt={alt}
                width={20}
                height={20}
              />
              {title}
            </HeadContainer>
            <div css={{ margin: '12px 0 0 0' }}>
              {{
                radio: <ScheduleModalRadioInput type={type} radioList={list}/>,
                select: <ScheduleModalSelectBox type={type} />
              }[fieldType]}
            </div>
          </div>
        )
      })}
    </div>
  )
};

const HeadContainer = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',

  'img': {
    margin: '0 6px 0 0'
  }
});

export default ScheduleModalRegularLessonCommonFormInputList;