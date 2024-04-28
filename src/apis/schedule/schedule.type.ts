import { ScheduleType } from '@features/schedule/type/schedule.type';

type ScheduleLessonByDateApiPayload = {
  day: Date;
};

type ScheduleLessonByStartDateEndDatePeriodPayload = {
  startDate: Date;
  endDate: Date;
};

type DuplicateCheckScheduleLessonPayload = {
  coachId: string;
  courtId: string;
  schedule: Array<ScheduleType>;
};

export type DuplicateCheckScheduleLessonData = {
  centerId: string;
  coachId: string;
  courtId: string;
  date: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
};

type SchduleLessonByStartDateEndDatePeriodData = {
  id: number;
  coachName: string;
  coachId: number;
  customerName: string;
  customerId: number;
  courtId: number;
  lessonId: number;
  lessonType: string;
  year: string;
  month: string;
  date: string;
  isForcedLessonChange: number;
  isRegularLesson: string;
  timeDiff: number;
  coachAttendance?: string;
  customerAttendance?: string;
  originStartTime: string;
  originEndTime: string;
  startTime: string;
  endTime: string;
};

export type {
  ScheduleLessonByDateApiPayload,
  ScheduleLessonByStartDateEndDatePeriodPayload,
  DuplicateCheckScheduleLessonPayload,
  SchduleLessonByStartDateEndDatePeriodData,
};
