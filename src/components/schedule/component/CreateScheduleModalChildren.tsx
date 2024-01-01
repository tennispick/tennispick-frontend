import { FormEvent, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Image from 'next/image';
import { createScheduleModalInputList, createScheduleModalEachInputList } from '../data/createScheduleModal';
import { EditWhiteIcon } from '@icons/index';
import useInput from '@hooks/useInput';
import { Button } from '@components/index';

import CalendarBlackIcon from '@icons/calendar_black.svg';

import CustomerSelectContainer from './modal/CustomerSelectContainer';
import LessonSelectContainer from './modal/LessonSelectContainer';
import ScheduleTypeInputRadioContainer from "./modal/ScheduleTypeInputRadioContainer";
import { getCustomerQuery } from "@queries/customer";
import { getLessonQuery } from "@queries/lesson";
import { ScheduleListType } from "../type";
import ScheduleComponentModalAllRegister from "./modal/AllRegister";
import ScheduleComponentModalEachRegister from "./modal/EachRegister";

const CreateScheduleModalChildren = () =>{

  // 회원 목록
  const customerList = getCustomerQuery();

  // 수강권 목록
  const lessonList = getLessonQuery();

  // TODO 일괄등록과 개별등록에 대한 FormData를 다시 설계해야 함

  const [formData, onChangeFormData, ] = useInput({
    scheduleType: 'all', // 스케줄 등록유형
    customer: '', // 회원 정보
		lesson: 'default', // 수강권 정보
    lessonType: 'regular', // 강습유형
    lessonDateType: 'date', // 강습날짜 유형
    lessonTime: 'default', // 강습시간
    lessonCountOfWeek: 1, // 주 강습횟수
		coach: '', // 코치
		court: '', // 코트
	});
  
  const [scheduleList, setScheduleList] = useState<Array<ScheduleListType>>([{
    id: 1,
    date: '',
    day: '',
    startTime: '',
    endTime: ''
  }]);

  const { scheduleType, lesson, lessonTime, lessonDateType } = formData;

  const getInputComponentByType = (type: string) =>{

    if (type === 'scheduleType') return <ScheduleTypeInputRadioContainer onChangeFormData={onChangeFormData} />;
    if (type === 'customer') return <CustomerSelectContainer onChangeFormData={onChangeFormData} customerList={customerList} />;
    if (type === 'lesson') return <LessonSelectContainer onChangeFormData={onChangeFormData} lessonList={lessonList} />;

    return null;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
  }

  return(
    <Container onSubmit={handleSubmit}>
      <div css={{ position: 'relative', display: 'flex', width: '100%'  }}>
        {/* 공통 유형 */}
        <div css={{ position: 'relative', width: '15%' }}>
          {createScheduleModalInputList.map(({ type, title, icon, alt }) => {
            return(
              <InputContainer key={type}>
                <HeadContainer>
                  <Image
                    src={icon}
                    alt={alt}
                    width={20}
                    height={20}
                  />{title}
                </HeadContainer>
                <BodyContainer>{getInputComponentByType(type)}</BodyContainer>
              </InputContainer>
            )
          })}
        </div>
        {scheduleType === 'all' ?
          <ScheduleComponentModalAllRegister
            formData={formData}
            onChangeFormData={onChangeFormData}
          />
          :
          <ScheduleComponentModalEachRegister
            formData={formData}
            onChangeFormData={onChangeFormData}
            scheduleList={scheduleList}
            setScheduleList={setScheduleList}
          />
        }
      </div>
      <Button
				type={'submit'}
				variant={'iconBtn'}
				label={'스케줄 등록하기'}
				src={EditWhiteIcon}
				css={{
					position: 'absolute',
					width: 'calc(100% - 48px)',
					justifyContent: 'center',
					border: 0,
					backgroundColor: 'var(--business-sub-color)',
					color: 'var(--white100)',
					padding: '12px 16px',
					margin: '36px 0 0 0',
          bottom: '24px',
          left: '24px',
				}}
			/>
    </Container>
  )
}

const Container = styled.form({
  display: 'flex',
  flexDirection: 'column'
});

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

export default CreateScheduleModalChildren;