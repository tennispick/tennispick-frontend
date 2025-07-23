export type InputComponentType =
  | 'scheduleType'
  | 'customer'
  | 'lesson'
  | 'lessonType'
  | 'lessonDateType'
  | 'lessonTime'
  | 'lessonCount'
  | 'coach'
  | 'court';

export type ScheduleListType = {
  id: number;
  date: string;
  day: string;
  startTime: string;
  endTime: string;
};

export type ScheduleDataType = {
  scheduleType: string; // 스케줄 등록유형
  customer: string; // 회원 정보
  lesson: string; // 수강권 정보
  lessonType: string; // 강습유형
  lessonDateType: string; // 강습날짜 유형
  lessonTime: string; // 강습시간
  lessonCountOfWeek: number; // 주 강습횟수
  coach: string; // 코치
  court: string; // 코트
};
