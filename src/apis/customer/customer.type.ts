import { CommonFormInputType } from '@features/schedule/type/schedule.type';

export type CustomerLessonListApiPayload = {
  id: string;
  lessonType: string;
};

export type CustomerDetailApiPayLoad = {
  id: string;
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
