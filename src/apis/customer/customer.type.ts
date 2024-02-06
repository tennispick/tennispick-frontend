import { FormCommonInputType } from '@features/schedule/type/schedule.type';

type CustomerDetailApiPayLoad = {
  id: string;
};

type CustomerDetailData = {
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

type SearchCustomerListByKeywordApiPayload = {
  keyword: string;
} & Pick<FormCommonInputType, 'customer'>;

export type {
  CustomerDetailApiPayLoad,
  CustomerDetailData,
  SearchCustomerListByKeywordApiPayload,
};
