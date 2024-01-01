import { FormIndividualCreateType } from "@features/schedule/type/schedule.type";
import FormField from "./ScheduleFormField";
import { UseInputType } from "src/types";
import Image from 'next/image';
import TalkBlackIcon from '@icons/talk_black.svg';
import FormHeader from "./ScheduleFormHeader";
import { Dispatch, SetStateAction } from "react";

type Props = {
  formData: FormIndividualCreateType[];
  onChangeIndividualCreateFormData: UseInputType<FormIndividualCreateType>;
  setIndividualCreateFormData: Dispatch<SetStateAction<FormIndividualCreateType[]>>;
};

const ScheduleModalRegularLessonIndividualCreateInputForm = ({ formData, onChangeIndividualCreateFormData, setIndividualCreateFormData }: Props) =>{
  return(
    <div css={{ width: '100%'}} >
      <div css={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        margin: '0 0 16px 0'
      }}>
        <Image
          src={TalkBlackIcon}
          alt={'title icon'}
          width={20}
          height={20}
          css={{ margin: '0 4px 0 0'}}
        />스케줄 개별 등록
      </div>
      <FormHeader />
      <FormField
        formData={formData}
        onChangeFormData={onChangeIndividualCreateFormData}
        setFormData={setIndividualCreateFormData}
      />
    </div>
  )
};

export default ScheduleModalRegularLessonIndividualCreateInputForm;