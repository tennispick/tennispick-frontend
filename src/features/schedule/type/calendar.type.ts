import { STRING_WEEK_LIST } from "@features/schedule/constants/schedule";

type CalendarYearList<T> = {
  [key: string]: Array<T>;
};

type CalendarDayList<T> = {
  [key in typeof STRING_WEEK_LIST[number]]: CalendarYearList<T>;
};

export type {
  CalendarDayList
}