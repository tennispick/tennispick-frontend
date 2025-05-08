import {
  LessonDateType,
  LessonType,
} from '@/이전 파일들/features/lesson/type/lesson.type';
import {
  DayType,
  ScheduleInputType,
} from '@/이전 파일들/features/schedule/type/schedule.type';

export type CommonDataProps = {
  scheduleType: ScheduleInputType;
  lessonType: LessonType;
  customer: { id: string; name: string }[];
  lesson: string;
};

export type AllOnceFormDataProps = {
  lessonDateType: LessonDateType;
  lessonTime: string;
  coach: string;
  court: string;
};

export type IndividualFormDataProps = {
  lessonDateType: LessonDateType;
  lessonTime: string;
  coach: string;
  court: string;
  date: Date;
  day: DayType;
  startTime: string;
  endTime: string;
};
