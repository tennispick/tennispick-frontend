import styled from '@emotion/styled';
import { formInputList } from '@features/schedule/data/formdataInputList';
import Image from 'next/image';
import ScheduleModalRadioInput from '../../RadioInput';
import ScheduleModalSelectBox from '../../SelectBox';
import ScheduleModalRegularLessonAllOnceCreateScheduleFormField from './ScheduleFormField';
import { FormAllOnceCreateType } from '@features/schedule/type/schedule.type';
import { UseInputType } from 'src/types';
import { SetStateAction, Dispatch, useState, useEffect } from 'react';
import { CoachListData } from '@apis/coach/coach.type';
import { CourtListData } from '@apis/court/court.type';
import { transFormSelectList } from '@features/schedule/util/regularLesson';
import { TDataCommonList } from '@features/schedule/type/data.type';

type Props = {
  scheduleType: string;
  lesson: string;
  formData: FormAllOnceCreateType;
  onChangeAllCreateFormData: UseInputType<HTMLInputElement | HTMLSelectElement>;
  setAllCreateFormData: Dispatch<SetStateAction<FormAllOnceCreateType>>;
  coachList: CoachListData[] | undefined;
  courtList: CourtListData[] | undefined;
};

const ScheduleModalRegularLessonAllOnceCreateInputForm = ({
  scheduleType,
  lesson,
  formData,
  onChangeAllCreateFormData,
  setAllCreateFormData,
  coachList,
  courtList,
}: Props) => {
  const disabled = lesson === '' ? true : false;

  const [formList, setFormList] = useState<TDataCommonList[]>(formInputList);

  useEffect(() => {
    transFormSelectList(setFormList, 'coach', coachList);
    transFormSelectList(setFormList, 'court', courtList);

    setAllCreateFormData((prev) => {
      return {
        ...prev,
        court:
          coachList && coachList.length > 0 ? coachList[0].id.toString() : '',
        coach:
          courtList && courtList.length > 0 ? courtList[0].id.toString() : '',
      };
    });
  }, [coachList, courtList]);

  return (
    <>
      <div css={{ position: 'relative', width: '25%' }}>
        {formList.map(({ type, fieldType, list, title, icon, alt }) => {
          return (
            <div css={{ margin: '0 0 24px 0' }} key={type}>
              <HeadContainer>
                <Image src={icon} alt={alt} width={20} height={20} />
                {title}
              </HeadContainer>
              <div css={{ margin: '12px 0 0 0' }}>
                {
                  {
                    radio: (
                      <ScheduleModalRadioInput
                        type={type}
                        radioList={list}
                        onChangeFormData={onChangeAllCreateFormData}
                        disabled={disabled}
                      />
                    ),
                    select: (
                      <ScheduleModalSelectBox
                        type={type}
                        list={list}
                        onChangeFormData={onChangeAllCreateFormData}
                      />
                    ),
                  }[fieldType]
                }
              </div>
            </div>
          );
        })}
      </div>
      <ScheduleModalRegularLessonAllOnceCreateScheduleFormField
        scheduleType={scheduleType}
        formData={formData}
        setFormData={setAllCreateFormData}
      />
    </>
  );
};

const HeadContainer = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',

  img: {
    margin: '0 6px 0 0',
  },
});

export default ScheduleModalRegularLessonAllOnceCreateInputForm;
