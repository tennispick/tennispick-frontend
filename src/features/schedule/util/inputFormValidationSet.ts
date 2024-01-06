const commonFormDataValidationSet = {
  scheduleType: '스케줄 등록유형이 선택되지 않았어요.', // 스케줄 등록유형
  lessonType: '레슨유형이 선택되지 않았어요.', // 레슨유형
  customer: '회원님을 1명이상 선택해주세요.', // 회원
  lesson: '수강권을 선택해주세요.', // 수강권
};

const allCreateFormDataValidationSet = {
  lessonDateType: '강습날짜 유형을 선택해주세요.', // 강습날짜 유형
  lessonTime: '강습시간을 선택해주세요.', // 강습시간 선택
  weeklyLessonCount: '주 강습횟수를 선택해주세요.', // 주 강습횟수 선택
  coach: '코치님을 선택해주세요.', // 강습코치 선택
  court: '코트를 선택해주세요.', // 코트(장소) 선택
  schedule: '강습일정을 1개이상 등록해주세요.' //
};

const individualCreateFormValidationSet = {
  lessonDateType: '강습날짜 유형을 선택해주세요.', // 강습날짜 유형
  lessonTime: '강습시간을 선택해주세요.', // 강습시간 선택
  weeklyLessonCount: '주 강습횟수를 선택해주세요.', // 주 강습횟수 선택
  coach: '코치님을 선택해주세요.', // 강습코치 선택
  court: '코트를 선택해주세요.', // 코트(장소) 선택
  date: '스케줄 등록유형(요일, 날짜)를 선택해주세요.', // 스케줄 등록유형 (요일, 날짜)
  day: '요일을 선택해주세요.', // 요일
  startTime: '강습 시작시간을 선택해주세요.',
  endTime: '강습 종료시간을 선택해주세요.'
};

const regularLessonFormDataValidationSet = {
  ...commonFormDataValidationSet,
}

export {
  commonFormDataValidationSet,
  allCreateFormDataValidationSet,
  individualCreateFormValidationSet
}