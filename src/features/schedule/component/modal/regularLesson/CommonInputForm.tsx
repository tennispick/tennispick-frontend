import styled from "@emotion/styled";
import { commonFormInputList } from "@features/schedule/data/formdataInputList";
import Image from "next/image";
import ScheduleModalRadioInput from "../RadioInput";
import ScheduleModalSelectBox from "../SelectBox";
import { getCustomerQuery } from "@queries/customer";
import { ChangeEventHandler } from "react";

type Props = {
  commonFormData: {[key:string]: string};
  onChangeCommonFormData: ChangeEventHandler<HTMLInputElement>;
}

const ScheduleModalRegularLessonCommonInputFormList = ({ commonFormData, onChangeCommonFormData }: Props) => {

  // 회원
  const { data: customerList } = getCustomerQuery();

  // 수강권

  const handleDuplicateDataCheck = ({
    prevList,
    list
  }: { [key:string]: Array<{[key:string]: string}> }) => {

    const prevListIds = new Set(prevList.map(item => item.value));

    list.forEach(({ id, name }) => {
      if (!prevListIds.has(id)) {
        prevList.push({
          value: id,
          label: name
        });
        prevListIds.add(id);
      }
    });
  }

  return(
    <div
      css={{
        position: 'relative',
        width: '15%'
      }}
    >
      {commonFormInputList.map(({ type, fieldType, list, title, icon, alt }) => {

        if (type === 'customer' && customerList) handleDuplicateDataCheck({ prevList: list, list: customerList.data });

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
                radio:
                  <ScheduleModalRadioInput
                    type={type}
                    radioList={list}
                    onChangeCommonFormData={onChangeCommonFormData}
                  />,
                select:
                  <ScheduleModalSelectBox
                    type={type}
                    selectList={list}
                  />
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

export default ScheduleModalRegularLessonCommonInputFormList;