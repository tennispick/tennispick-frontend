import styled from "@emotion/styled";
import { commonFormInputList } from "@features/schedule/data/formdataInputList";
import Image from "next/image";
import ScheduleModalRadioInput from "../RadioInput";
import ScheduleModalSelectBox from "../SelectBox";
import { getCustomerQuery } from "@queries/customer";
import { getLessonQuery } from "@queries/lesson";
import ScheduleModalSearchInput from "../SearchInput";
import { UseInputType } from "src/types";
import { Dispatch, SetStateAction } from "react";
import { FormCommonInputType } from "@features/schedule/type/schedule.type";
import { handleDuplicateDataCheck } from "@utils/dataCheck";

type Props = {
  commonFormData: FormCommonInputType;
  onChangeCommonFormData: UseInputType<HTMLInputElement | HTMLSelectElement>;
  setCommonFormData: Dispatch<SetStateAction<FormCommonInputType>>;
}

const ScheduleModalRegularLessonCommonInputFormList = ({ commonFormData, onChangeCommonFormData, setCommonFormData }: Props) => {

  const { data: customerList } = getCustomerQuery();
  const { data: lessonList } = getLessonQuery();

  return(
    <div css={{ position: 'relative', width: '20%' }}>
      {commonFormInputList.map(({ type, fieldType, list, title, icon, alt }) => {

        if (type === 'customer' && customerList) handleDuplicateDataCheck({ prevList: list, list: customerList.data });
        if (type === 'lesson' && lessonList) handleDuplicateDataCheck({ prevList: list, list: lessonList.data });

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
                    onChangeFormData={onChangeCommonFormData}
                  />,
                select:
                  <ScheduleModalSelectBox
                    type={type}
                    selectList={list}
                    onChangeFormData={onChangeCommonFormData}
                  />,
                search: 
                  <ScheduleModalSearchInput
                    formData={commonFormData}
                    setFormData={setCommonFormData}
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