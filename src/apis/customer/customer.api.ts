import {
  URL_FETCH_CUSTOMER_DETAIL,
  URL_FETCH_CUSTOMER_LESSON_LIST,
  URL_SEARCH_CUSTOMER_LIST_BY_KEYWORD,
} from './customer.url';
import { axios } from '@utils/axios';
import {
  CustomerLessonListApiPayload,
  CustomerDetailApiPayLoad,
  CustomerDetailData,
  SearchCustomerListByKeywordApiPayload,
} from './customer.type';
import { Response } from '@/types/response';

const getCustomerLessonList = async (params: CustomerLessonListApiPayload) => await axios.get(`${URL_FETCH_CUSTOMER_LESSON_LIST}/${params.id}`);

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


export { getCustomerLessonList, getCustomerDetail, getSearchCustomerListByKeyword };
