import useInput from "@hooks/useInput";
import AllOnceCreateInputForm from "./AllOnceCreate/InputForm";
import CommonInputForm from "./CommonInputForm";
import IndividualCreateInputForm from "./IndividualCreate/InputForm";
import { FormEvent, useEffect } from "react";
import { Button } from "@components/index";
import { EditWhiteIcon } from '@icons/index';
import { FormAllOnceCreateType } from "@features/schedule/type/schedule.type";
import { handleInputValidationCheck, handleInputArrayValidationCheck } from "@utils/validation";
import { commonFormDataValidationSet, allCreateFormDataValidationSet, individualCreateFormValidationSet } from "@features/schedule/util/inputFormValidationSet";
import { useScheduleMutation } from "@features/schedule/mutation/scheduleMutation";

type Props = {

};

const ModalRegularLesson = ({ }: Props) => {

  const { mutate, isLoading } = useScheduleMutation();
  const [commonFormData, onChangeCommonFormData, setCommonFormData] = useInput({
    scheduleType: 'all', // 스케줄 등록유형
    lessonType: 'private', // 레슨유형
    customer: [], // 회원
    lesson: '', // 수강권
  });

  // 일괄등록
  const [allCreateFormData, onChangeAllCreateFormData, setAllCreateFormData] = useInput({
    lessonDateType: 'date', // 강습날짜 유형
    lessonTime: '20', // 강습시간 선택
    weeklyLessonCount: '1', // 주 강습횟수 선택
    coach: '', // 강습코치 선택
    court: '', // 코트(장소) 선택
    schedule: [{
      date: new Date(), // 스케줄 등록유형 (요일, 날짜)
      day: 'monday', // 요일
      startTime: '00:00', // 강습시간
      endTime: '00:20'
    }]
  });

  // 개별등록
  const [individualCreateFormData, onChangeIndividualCreateFormData, setIndividualCreateFormData] = useInput([{
    lessonDateType: 'date', // 강습날짜 유형
    lessonTime: '0', // 강습시간
    weeklyLessonCount: '1', // 주 강습횟수
    coach: '', // 강습코치
    court: '', // 코트(장소)
    date: new Date(), // 스케줄 등록유형 (요일, 날짜)
    day: 'monday', // 요일
    startTime: '00:00', // 강습시간
    endTime: '00:20'
  }]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { scheduleType } = commonFormData;

    const allCreateBody = { ...commonFormData, ...allCreateFormData };
    const individualBody = { ...commonFormData, schedule: [...individualCreateFormData] };

    if(scheduleType === 'all') {

      const allCheck = handleInputValidationCheck(allCreateBody ,{
        ...commonFormDataValidationSet,
        ...allCreateFormDataValidationSet
      });
      if(!allCheck) return;
    }
    else {
      const individualCheck = handleInputArrayValidationCheck(individualBody,{
        ...commonFormDataValidationSet,
        ...individualCreateFormValidationSet
      });
      if(!individualCheck) return;
    }

    const body = scheduleType === 'all' ? allCreateBody : individualBody;

    mutate(body);
  };

  // 강습시간 선택의 변화
  useEffect(() => {
    setAllCreateFormData((prev: FormAllOnceCreateType) => ({
      ...prev,
      schedule: Array.from({ length: Number(allCreateFormData.weeklyLessonCount) }, (_, i) => ({ 
        date: new Date(),
        day: 'monday',
        startTime: '00:00',
        endTime: `00:${allCreateFormData.lessonTime}`
      }))
    }));
  }, [allCreateFormData.lessonTime])


  // 주 강습횟수 선택의 변화
  useEffect(() => {
    setAllCreateFormData((prev: FormAllOnceCreateType) => {
      const newSchedule = Array.from({ length: Number(allCreateFormData.weeklyLessonCount) }, (_, i) => {
        const prevDate = prev.schedule[i]?.date || new Date(); // 이전 배열의 날짜 가져오기
        const newDate = new Date(prevDate);
        newDate.setDate(prevDate.getDate() + 7 * i); // 7을 곱해서 7일씩 증가
        return {
          date: newDate,
          day: 'monday',
          startTime: '00:00',
          endTime: `00:${allCreateFormData.lessonTime}`
        };
      });
    
      return {
        ...prev,
        schedule: [
          ...prev.schedule.slice(0, Math.min(prev.schedule.length, Number(allCreateFormData.weeklyLessonCount))),
          ...newSchedule.slice(prev.schedule.length)
        ]
      };
    });
  }, [allCreateFormData.weeklyLessonCount])

  return(
    <form
      css={{ display: 'flex', width: '100%', flexDirection: 'column' }}
      onSubmit={onSubmit}
    >
      <div css={{ display: 'flex', width: '100%' }}>
        <CommonInputForm
          commonFormData={commonFormData}
          onChangeCommonFormData={onChangeCommonFormData}
          setCommonFormData={setCommonFormData}
        />
        {commonFormData.scheduleType === 'all' ?
          <AllOnceCreateInputForm
            scheduleType={commonFormData.scheduleType}
            lesson={commonFormData.lesson}
            formData={allCreateFormData}
            onChangeAllCreateFormData={onChangeAllCreateFormData}
            setAllCreateFormData={setAllCreateFormData}
          /> :
          <IndividualCreateInputForm
            scheduleType={commonFormData.scheduleType}
            lesson={commonFormData.lesson}
            formData={individualCreateFormData}
            onChangeIndividualCreateFormData={onChangeIndividualCreateFormData}
            setIndividualCreateFormData={setIndividualCreateFormData}
          />
        }
      </div>
      <Button
				type={'submit'}
				variant={'iconBtn'}
				label={'스케줄 등록하기'}
				src={EditWhiteIcon}
				css={{
					width: '100%',
					justifyContent: 'center',
					border: 0,
					backgroundColor: 'var(--business-sub-color)',
					color: 'var(--white100)',
					padding: '12px 16px',
					margin: '24px 0 0 0',
				}}
			/>
    </form>
  )
}

export default ModalRegularLesson;