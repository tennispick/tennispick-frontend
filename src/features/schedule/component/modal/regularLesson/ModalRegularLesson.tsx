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
  });

  // 개별 값
  /*
    하나의 배열 안에서, 객체의 값이 계속 추가되는 형태.
  */
  const [individualCreateFormData, onChangeIndividualCreateFormData] = useInput({

  });

  return(
    <div css={{ display: 'flex', width: '100%' }}>
      <CommonInputForm commonFormData={commonFormData} onChangeCommonFormData={onChangeCommonFormData}/>
      {commonFormData.scheduleType === 'all' ?
        <AllOnceCreateInputForm
          formData={allCrateFormData}
          onChangeAllCrateFormData={onChangeAllCrateFormData}
        /> :
        <IndividualCreateInputForm
        />}
    </div>
  )
}

export default ModalRegularLesson;