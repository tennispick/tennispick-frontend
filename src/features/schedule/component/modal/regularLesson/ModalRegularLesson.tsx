import useInput from "@hooks/useInput";
import AllOnceCreateInputForm from "./AllOnceCreate/InputForm";
import CommonInputForm from "./CommonInputForm";
import IndividualCreateInputForm from "./IndividualCreate/InputForm";
import { FormEvent, useEffect } from "react";
import { Button } from "@components/index";
import { EditWhiteIcon } from '@icons/index';
import { FormAllOnceCreateType, ScheduleType } from "@features/schedule/type/schedule.type";

type Props = {

};

const ModalRegularLesson = ({ }: Props) => {

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log('스케줄 등록하기');

    // console.log('공통정보', commonFormData);
    // console.log('일괄등록', allCrateFormData);
  };

  const [commonFormData, onChangeCommonFormData] = useInput({
    scheduleType: 'all', // 스케줄 등록유형
    lessonType: 'individual', // 레슨유형
    customer: [], // 회원
    lessonCoupon: '', // 수강권
  });

  // 일괄등록
  const [allCrateFormData, onChangeAllCrateFormData, setAllCreateFormData] = useInput({
    lessonDateType: 'date', // 강습날짜 유형
    lessonTime: '0', // 강습시간 선택
    weeklyLessonCount: '1', // 주 강습횟수 선택
    coach: '', // 강습코치 선택
    court: '', // 코트(장소) 선택
    schedule: [{
      date: '', // 스케줄 등록유형 (요일, 날짜)
      day: '', // 요일
      startTime: new Date(), // 강습시간
      endTime: new Date()
    }]
  });

  // 개별등록
  const [individualCreateFormData, onChangeIndividualCreateFormData, setIndividualCreateFormData] = useInput([{
    lessonDateType: 'date', // 강습날짜 유형
    lessonTime: '0', // 강습시간
    weeklyLessonCount: '1', // 주 강습횟수
    coach: '', // 강습코치
    court: '', // 코트(장소)
    date: '', // 스케줄 등록유형 (요일, 날짜)
    day: '', // 요일
    startTime: new Date(), // 강습시간
    endTime: new Date()
  }]);

  useEffect(() => {
    setAllCreateFormData((prev: FormAllOnceCreateType) => ({
      ...prev,
      schedule: Array.from({ length: Number(allCrateFormData.weeklyLessonCount) }, (_, i) => ({
        date: '',
        day: '',
        startTime: new Date(),
        endTime: new Date()
      }))
    }))
  }, [allCrateFormData.weeklyLessonCount])

  return(
    <form
      css={{ display: 'flex', width: '100%', flexDirection: 'column' }}
      onSubmit={onSubmit}
    >
      <div css={{ display: 'flex', width: '100%' }}>
        <CommonInputForm commonFormData={commonFormData} onChangeCommonFormData={onChangeCommonFormData}/>
        {commonFormData.scheduleType === 'all' ?
          <AllOnceCreateInputForm
            formData={allCrateFormData}
            onChangeAllCrateFormData={onChangeAllCrateFormData}
          /> :
          <IndividualCreateInputForm
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