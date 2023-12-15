import { ChangeEventHandler, FormEvent, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Image from 'next/image';

import { createScheduleModalEachInputList } from '../../../data/createScheduleModal';
import LessonTypeInputRadioContainer from '../..//modal/LessonTypeInputRadioContainer';
import CoachSelectContainer from '../../modal/CoachSelectContainer';
import CourtSelectContainer from '../../modal/CourtSelectContainer';
import LessonTimeInputRadioContainer from "../../modal/LessonTimeInputRadioContainer";
import LessonScheduleTypeInputRadioContainer from "../../modal/LessonDateTypeInputRadioContainer";
import LessonCountOfWeekInputRadioContainer from "../../modal/LessonCountOfWeekInputRadioContainer";

import ScheduleCalendarSelectContainer from '../../modal/ScheduleAllCalendarSelectContainer';

import { getCoachQuery } from "@queries/coach";
import { getCourtQuery } from "@queries/court";
import { ScheduleListType } from "../../../type";

import CalendarBlackIcon from '@icons/calendar_black.svg';

type Props = {
  formData: any;
  onChangeFormData: ChangeEventHandler<any>;
}

const ScheduleComponentModalAllRegister = ({ formData, onChangeFormData }: Props) =>{

  // 코치 목록
  const coachList = getCoachQuery();

  // 코트 목록
  const courtList = getCourtQuery();

  const [scheduleList, setScheduleList] = useState<Array<ScheduleListType>>([{
    id: 1,
    date: '',
    day: '',
    startTime: '',
    endTime: ''
  }]);

  const { scheduleType, lesson, lessonTime, lessonDateType } = formData;

  const getInputComponentByType = (type: string) =>{

    if (type === 'lessonType') return <LessonTypeInputRadioContainer onChangeFormData={onChangeFormData} />;
    if (type === 'lessonDateType') return <LessonScheduleTypeInputRadioContainer onChangeFormData={onChangeFormData} />;
    if (type === 'lessonTime') return <LessonTimeInputRadioContainer data={formData} onChangeFormData={onChangeFormData} />;
    if (type === 'lessonCount') return <LessonCountOfWeekInputRadioContainer onChangeFormData={onChangeFormData} />;
    if (type === 'coach') return <CoachSelectContainer onChangeFormData={onChangeFormData} coachList={coachList} />;
    if (type === 'court') return <CourtSelectContainer onChangeFormData={onChangeFormData} courtList={courtList} />;

    return null;
  }
  
  return(
    <div css={{ position: 'relative', width: '85%', display: 'flex' }}>
      <div css={{ position: 'relative', width: '30%' }}>
        {createScheduleModalEachInputList.map(({ type, title, icon, alt }) => {
          return(
            <InputContainer key={type}>
              <HeadContainer>
                {icon &&
                  <Image
                    src={icon}
                    alt={alt}
                    width={20}
                    height={20}
                  />
                }
                {title}
              </HeadContainer>
              <BodyContainer>{getInputComponentByType(type)}</BodyContainer>
            </InputContainer>
          )
        })}
      </div>
      <div css={{ position: 'relative', width: '70%'}}>
         <InputContainer>
           <HeadContainer>
             <Image
               src={CalendarBlackIcon}
               alt={'calendar schedule'}
               width={20}
               height={20}
             />스케줄 일정 선택
           </HeadContainer>
           <BodyContainer>
             <ScheduleCalendarSelectContainer
               data={formData}
               setScheduleList={setScheduleList}
            />
          </BodyContainer>
        </InputContainer>
      </div>
    </div>
  )
}

const InputContainer = styled.div({
  position: 'relative',
  margin: '0 0 24px 0'
});

const HeadContainer = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',

  'img': {
    margin: '0 6px 0 0'
  }
});
const BodyContainer = styled.div({
  margin: '12px 0 0 0'
});

export default ScheduleComponentModalAllRegister;