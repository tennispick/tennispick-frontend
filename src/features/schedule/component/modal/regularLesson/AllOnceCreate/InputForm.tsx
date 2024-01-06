import styled from "@emotion/styled";
import { allOnceFormInputList } from "@features/schedule/data/formdataInputList";
import Image from "next/image";
import ScheduleModalRadioInput from "../../RadioInput";
import ScheduleModalSelectBox from "../../SelectBox";
import ScheduleModalRegularLessonAllOnceCreateScheduleFormField from "./ScheduleFormField";
import { FormAllOnceCreateType } from "@features/schedule/type/schedule.type";
import { UseInputType } from "src/types";
import { useGetCourtList } from "@features/court/query/courtQuery";
import { handleDuplicateDataCheck } from "@utils/dataCheck";
import { useGetCoachList } from "@features/coach/query/coachQuery";
import { SetStateAction, Dispatch } from "react";

type Props = {
  lesson: string;
  formData: FormAllOnceCreateType;
  onChangeAllCreateFormData: UseInputType<HTMLInputElement | HTMLSelectElement>;
  setAllCreateFormData: Dispatch<SetStateAction<FormAllOnceCreateType>>;
};

const ScheduleModalRegularLessonAllOnceCreateInputForm = ({ lesson, formData, onChangeAllCreateFormData, setAllCreateFormData}: Props) =>{

  const { data: courtList } = useGetCourtList();
  const { data: coachList } = useGetCoachList();

  return(
    <>
      <div css={{ position: 'relative', width: '25%' }}>
        {allOnceFormInputList.map(({ type, fieldType, list, title, icon, alt }) => {

          if(type === 'coach' && coachList) handleDuplicateDataCheck({ prevList: list, list: coachList });
          if(type === 'court' && courtList) handleDuplicateDataCheck({ prevList: list, list: courtList });

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
                      lesson={lesson}
                      onChangeFormData={onChangeAllCreateFormData}
                    />,
                  select:
                    <ScheduleModalSelectBox
                      type={type}
                      selectList={list}
                      onChangeFormData={onChangeAllCreateFormData}
                    />
                }[fieldType]}
              </div>
            </div>
          )
        })}
      </div>
      <ScheduleModalRegularLessonAllOnceCreateScheduleFormField
        formData={formData}
        setFormData={setAllCreateFormData}
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