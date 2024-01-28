import { FormCommonInputType } from '@features/schedule/type/schedule.type';

type SearchCustomerListByKeywordApiPayload = {
  keyword: string;
} & Pick<FormCommonInputType, 'customer'>;

export type { SearchCustomerListByKeywordApiPayload };
