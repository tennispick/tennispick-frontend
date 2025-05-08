import { WEEK_LIST } from "@/shared/constants/weekList";

// 입력된 날짜에 해당 주차의 특정 요일의 날짜를 반환하는 함수
export const getDayOfWeek = (date: Date, day: string) => {
  const dayIndex = WEEK_LIST.findIndex((item) => item === day);
  const dayDifference = dayIndex - date.getDay();
  const inputDayDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + dayDifference,
  );
  return inputDayDate;
};