export enum LessonDate {
  DATE = 'date',
  DAY = 'day',
}

export enum Weekday {
  WEEKDAY = 'weekday',
  WEEKEND = 'weekend',
}

export enum Lesson {
  PRIVATE = 'private',
  GROUP = 'group',
}

export type LessonTicket = {
  id: string;
  centerId: string;
  name: string;
  lessonCount: number;
  price: number;
  isWeekday: Weekday;
  type: Lesson;
  time: string;
  timesAWeek: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};
