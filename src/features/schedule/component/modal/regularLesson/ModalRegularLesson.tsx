import useInput from "@hooks/useInput";
import AllOnceCreateInputForm from "./AllOnceCreate/InputForm";
import CommonInputForm from "./CommonInputForm";
import IndividualCreateInputForm from "./IndividualCreate/InputForm";
import { useEffect } from "react";

const ModalRegularLesson = () => {

  const [commonFormData, onChangeCommonFormData] = useInput({
    scheduleType: 'all',
  });

  const [allCrateFormData, onChangeAllCrateFormData] = useInput({
    lessonDateType: 'date', // 강습날짜 유형
    lessonTime: '0', // 강습시간 선택
    weeklyLessonCount: '1', // 주 강습횟수 선택
    // 스케줄 일정
  });

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

  return(
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
        />}
    </div>
  )
}

export default ModalRegularLesson;