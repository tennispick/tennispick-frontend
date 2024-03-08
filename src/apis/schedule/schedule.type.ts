import { ScheduleType } from "@features/schedule/type/schedule.type";

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
} & ScheduleType;

type SchduleLessonByStartDateEndDatePeriodData = {
  id: number;
  coachName: string;
  customerName: string;
  lessonType: string;
  year: string;
  month: string;
  date: string;
  isForcedLessonChange: number;
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
