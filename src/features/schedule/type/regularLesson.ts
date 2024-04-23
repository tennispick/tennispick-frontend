import { LessonDateType, LessonType } from '@features/lesson/type/lesson.type';
import { ScheduleInputType } from '@features/schedule/type/schedule.type';

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
