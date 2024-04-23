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
    date: string;
    day: DayType;
    startTime: string;
    endTime: string;
  };
  totalPage: string;
};

export type CustomerDetailData = {
  id: number;
  center_id: number;
  name: string;
  phone: string;
  sex: string;
  birth: string;
  email: string;
  terms_agree: string;
  address?: string;
  addres_detail?: string;
  weight?: string;
  height?: string;
  profile_image_url?: string;
};

export type SearchCustomerListByKeywordApiPayload = {
  keyword: string;
} & Pick<CommonFormInputType, 'customer' | 'lesson' | 'lessonType'>;

export type CustomerDeleteApiPayload = {
  customerId: string;
};
