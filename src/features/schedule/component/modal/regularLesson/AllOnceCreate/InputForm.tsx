import styled from "@emotion/styled";
import { allOnceFormInputList } from "@features/schedule/data/formdataInputList";
import Image from "next/image";
import ScheduleModalRadioInput from "../../RadioInput";
import ScheduleModalSelectBox from "../../SelectBox";
import ScheduleModalRegularLessonAllOnceCreateScheduleFormField from "./ScheduleFormField";
import { FormAllOnceCreateType } from "@features/schedule/type/schedule.type";
import { UseInputType } from "src/types";

type Props = {
  formData: FormAllOnceCreateType;
  onChangeAllCrateFormData: UseInputType<HTMLInputElement | HTMLSelectElement>;
};

const ScheduleModalRegularLessonAllOnceCreateInputForm = ({ formData, onChangeAllCrateFormData }: Props) =>{
  return(
    <>
      <div css={{ position: 'relative', width: '25%' }}>
        {allOnceFormInputList.map(({ type, fieldType, list, title, icon, alt }) => {
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
                {{radio:
                    <ScheduleModalRadioInput
                      type={type}
                      radioList={list}
                      onChangeFormData={onChangeAllCrateFormData}
                    />,
                  select:
                    <ScheduleModalSelectBox
                      type={type}
                      selectList={list}
                      onChangeFormData={onChangeAllCrateFormData}
                    />
                }[fieldType]}
              </div>
            </div>
          )
        })}
      </div>
      <ScheduleModalRegularLessonAllOnceCreateScheduleFormField
        formData={formData}
        onChangeFormData={onChangeAllCrateFormData}
      />
    </>
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

export default ScheduleModalRegularLessonAllOnceCreateInputForm;