import useInput from "@hooks/useInput";
import AllOnceCreateInputForm from "./AllOnceCreate/InputForm";
import CommonInputForm from "./CommonInputForm";
import IndividualCreateInputForm from "./IndividualCreate/InputForm";
import { useEffect } from "react";

const ModalRegularLesson = () => {

  // 공통 값
  const [commonFormData, onChangeCommonFormData] = useInput({
    scheduleType: 'all',
  });

  /*
    각 객체의 key 값으로 값을 셋팅
    * 강습날짜 유형 선택
    * 강습시간 선택
    * 주 강습횟수 선택 
    * 코치 선택
    * 코트 선택
    * 스케줄 일정은 배열로
  */
  const [allCrateFormData, onChangeAllCrateFormData] = useInput({
    lessonDateType: 'date', // 강습날짜 유형
    lessonTime: '0', // 강습시간 선택
    weeklyLessonCount: '1', // 주 강습횟수 선택
    // 스케줄 일정
  });

  // 개별 값
  /*
    하나의 배열 안에서, 객체의 값이 계속 추가되는 형태.
  */
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