import { LessonDateType, LessonType } from "@features/lesson/type/lesson.type";
import { DayType } from "@features/schedule/type/schedule.type";

export type CustomerLessonListQueryPayload = {
  id: string;
  lessonType: string;
};

export type CustomerLessonHistoryQueryPayload = {
  customerId: string;
  page: number;
}

export type CustomerLessonListQueryData = {
  id: number;
  centerId: number;
  customerId: number;
  centerCoachId: number;
  lessonId: number;
  lessonName: string;
  registerAbleCount: number;
  remainLessonCount: number;
  createdAt: string;
  updatedAt: string;
};

export type CustomerLessonHistoryQueryData = {
  lessonHistory: {
    id: number;
    customerName: string;
    lessonId: number;
    lessonName: string;
    coachId: number;
    coachName: string;
    courtId: number;
    courtName: string;
    lessonType: LessonType;
    lessonDateType: LessonDateType;
    date: string;
    day: DayType;
    startTime: string;
    endTime: string;
  };
  totalPage: string;
}

export type CustomerDetailQueryPayLoad = {
  id: string;
};