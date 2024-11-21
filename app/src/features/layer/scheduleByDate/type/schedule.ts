import { STRING_WEEK_LIST } from 'app/src/features/schedule/constants/schedule';

type WeekListToUnionType<T> = {
  [key in (typeof STRING_WEEK_LIST)[number]]: {
    [key: number]: T;
  };
};

type ScheduleListsType = {
  date: Date;
  weekCount: number;
  isWeekDay: boolean;
  // lists: {
  // 	year: number;
  // 	month: number;
  // 	weekCount: number;
  // 	dayList: WeekListToUnionType<number[]>;
  // }
};

export type { WeekListToUnionType, ScheduleListsType };
