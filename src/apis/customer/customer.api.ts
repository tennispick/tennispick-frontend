import {
  URL_DELETE_CUSTOMER,
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
  CustomerDeleteApiPayload,
} from './customer.type';
import { Response } from '@/types/response';

export const getCustomerLessonList = async (
  params: CustomerLessonListApiPayload,
) =>
  await axios.get(
    `${URL_FETCH_CUSTOMER_LESSON_LIST}/${params.id}?lessonType=${params.lessonType}`,
  );

export const getCustomerDetail = async (
  params: CustomerDetailApiPayLoad,
): Promise<Response<CustomerDetailData>> =>
  await axios.get(`${URL_FETCH_CUSTOMER_DETAIL}/${params.id}`);

export const getSearchCustomerListByKeyword = async (
  params: SearchCustomerListByKeywordApiPayload,
) => {
  const { lesson, lessonType, keyword, customer } = params;
  const { data } = await axios.get(`${URL_SEARCH_CUSTOMER_LIST_BY_KEYWORD}`, {
    params: {
      lesson: lesson,
      lessonType: lessonType,
      keyword: keyword,
      customer: JSON.stringify(customer),
    },
  });
  return data;
};

export const deleteCustomer = async (params: CustomerDeleteApiPayload) =>
  await axios.delete(`${URL_DELETE_CUSTOMER}/${params.customerId}`);
