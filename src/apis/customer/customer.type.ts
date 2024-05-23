import { LessonDateType, LessonType } from '@features/lesson/type/lesson.type';
import {
  CommonFormInputType,
  DayType,
} from '@features/schedule/type/schedule.type';

export type CustomerLessonListApiPayload = {
  id: string;
  lessonType: string;
};

export type CustomerLessonHistoryPayload = {
  customerId: string;
  lessonType: LessonType;
  page: number;
};

export type CustomerDetailApiPayLoad = {
  id: string;
};

export type CustomerLessonHistoryData = {
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
    isAble: string;
    date: string;
    day: DayType;
    startTime: string;
    endTime: string;
  };
  totalPage: string;
};

export type CustomerDetailData = {
  id: number;
  centerId: number;
  name: string;
  phone: string;
  sex: string;
  birth: string;
  email: string;
  termsAgree: string;
  address?: string;
  addressDetail?: string;
  weight?: string;
  height?: string;
  profileImageUrl?: string;
  digitalSignatureImageUrl?: string;
};

export type SearchCustomerListByKeywordApiPayload = {
  keyword: string;
} & Pick<CommonFormInputType, 'customer' | 'lesson' | 'lessonType'>;

export type CustomerDeleteApiPayload = {
  customerId: string;
};

export type CustomerMemoListApiData = {
  customerCommentId: number;
  customerId: number;
  centerCoachId: number;
  title: string;
  content: string;
  type: string;
  name: string;
  position: 'coach' | 'admin';
  createdAt: string;
  updatedAt: string;
};

export type CustomerMemoApiPayload = {
  customerId: string;
  type: string;
  title: string;
  content: string;
};
