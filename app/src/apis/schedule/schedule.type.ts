import { LessonType } from 'app/src/features/lesson/type/lesson.type';
import { ScheduleType } from 'app/src/features/schedule/type/schedule.type';

export type ScheduleLessonByDateApiPayload = {
  day: Date;
};

export type ScheduleLessonByDateData = {
  id: number;
  coachId: number;
  courtId: number;
  customerId: number;
  lessonId: number;
  lessonType: LessonType;
  coachAttendance: string;
  customerAttendance: string;
  coachName: string;
  customerName: string;
  isForcedLessonChange: number;
  isRegularLesson: string;
  startTime: string;
  originStartTime: string;
  endTime: string;
  originEndTime: string;
  timeDiff: number;
  year: string;
  month: string;
  date: string;
};

export type LessonScheduleByPeriodPayload = {
  startDate: Date;
  endDate: Date;
};

export type DuplicateCheckScheduleLessonPayload = {
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

export type LessonSchduleByPeriodData = {
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
