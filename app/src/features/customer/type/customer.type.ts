import { SexType } from 'app/src/types/index';
import {
  CustomerAttendanceApiPayload,
  CustomerLessonCancelApiPayload,
} from 'app/src/apis/customer/customer.type';
import { LessonDateType, LessonType } from 'app/src/features/lesson/type/lesson.type';
import { DayType } from 'app/src/features/schedule/type/schedule.type';

// TODO Type Transfer
export type CustomerListQueryData = {
  id: number;
  center_id: number;
  name: string;
  age: string;
  birth: string;
  email: string;
  phone: string;
  sex: SexType;
  profile_image_url: string | null;
  created_at: string;
  updated_at: string;
};

export type CustomerLessonListQueryPayload = {
  id: string;
  lessonType: string;
};

export type CustomerLessonHistoryQueryPayload = {
  customerId: string;
  lessonType: LessonType;
  page: number;
};

export type CustomerAllLessonListQueryData = {
  id: number;
  centerId: number;
  customerId: number;
  centerCoachId: number;
  lessonId: number;
  type: LessonType;
  lessonName: string;
  coachName: string;
  registerAbleCount: number;
  remainLessonCount: number;
  paymentDt: string;
  createdAt: string;
  updatedAt: string;
};

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
    customerLessonId: number;
    customerName: string;
    lessonId: number;
    lessonName: string;
    coachId: number;
    coachName: string;
    courtId: number;
    courtName: string;
    lessonType: LessonType;
    lessonDateType: LessonDateType;
    isAble: string;
    date: string;
    day: DayType;
    startTime: string;
    endTime: string;
  };
  totalPage: string;
};

export type CustomerDetailQueryPayLoad = {
  id: string;
};

export type CustomerAttendanceQueryPayLoad = CustomerAttendanceApiPayload;

export type CustomerLessonCancelQueryPayLoad = CustomerLessonCancelApiPayload;

export type CustomerAdditionalLessonListData = {
  id: number;
  courtId: number;
  courtName: string;
  coachId: number;
  coachName: string;
  lessonId: number;
  lessonName: string;
  additionalDate: string;
  additionalStartTime: string;
  additionalEndTime: string;
  originDate: string;
  originStartTime: string;
  originEndTime: string;
};
