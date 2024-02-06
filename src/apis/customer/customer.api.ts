import {
  URL_FETCH_CUSTOMER_DETAIL,
  URL_SEARCH_CUSTOMER_LIST_BY_KEYWORD,
} from './customer.url';
import { axios } from '@utils/axios';
import {
  CustomerDetailApiPayLoad,
  CustomerDetailData,
  SearchCustomerListByKeywordApiPayload,
} from './customer.type';
import { Response } from '@/types/response';

const getCustomerDetail = async (
  params: CustomerDetailApiPayLoad,
): Promise<Response<CustomerDetailData>> =>
  await axios.get(`${URL_FETCH_CUSTOMER_DETAIL}/${params.id}`);

// 키워드로 회원목록 조회
const getSearchCustomerListByKeyword = async (
  params: SearchCustomerListByKeywordApiPayload,
) => {
  const { keyword, customer } = params;
  const { data } = await axios.get(`${URL_SEARCH_CUSTOMER_LIST_BY_KEYWORD}`, {
    params: {
      keyword: keyword,
      customer: JSON.stringify(customer),
    },
  });
  return data;
};

export { getCustomerDetail, getSearchCustomerListByKeyword };
