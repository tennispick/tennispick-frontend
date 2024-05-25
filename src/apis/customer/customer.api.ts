import {
  URL_DELETE_CUSTOMER,
  URL_FETCH_CUSTOMER_DETAIL,
  URL_FETCH_CUSTOMER_LESSON_HISTORY,
  URL_FETCH_CUSTOMER_LESSON_LIST,
  URL_SEARCH_CUSTOMER_LIST_BY_KEYWORD,
  URL_CREATE_CUSTOMER_MEMO,
  URL_UPDATE_CUSTOMER_ATTENDANCE,
} from './customer.url';
import { axios } from '@utils/axios';
import {
  CustomerLessonListApiPayload,
  CustomerLessonHistoryPayload,
  CustomerDetailApiPayLoad,
  CustomerDetailData,
  CustomerLessonHistoryData,
  SearchCustomerListByKeywordApiPayload,
  CustomerDeleteApiPayload,
  CustomerAttendanceApiPayload,
} from './customer.type';
import { Response } from '@/types/response';
import { URL_FETCH_CUSTOMER_MEMO_LIST } from './customer.url';

export const getCustomerLessonList = async (
  params: CustomerLessonListApiPayload,
) =>
  await axios.get(
    `${URL_FETCH_CUSTOMER_LESSON_LIST}/${params.id}?lessonType=${params.lessonType}`,
  );

export const getCustomerLessonHistory = async (
  params: CustomerLessonHistoryPayload,
): Promise<Response<CustomerLessonHistoryData>> =>
  await axios.get(
    `${URL_FETCH_CUSTOMER_LESSON_HISTORY}/${params.customerId}?lessonType=${params.lessonType}&page=${params.page}`,
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

export const getCustomerMemoList = async (customerId: string) =>
  await axios.get(`${URL_FETCH_CUSTOMER_MEMO_LIST}/${customerId}`);

export const createCustomerMemo = async (params: FormData) =>
  await axios.post(`${URL_CREATE_CUSTOMER_MEMO}`, params);

export const updateCustomerAttendance = async (
  params: CustomerAttendanceApiPayload,
) => await axios.post(`${URL_UPDATE_CUSTOMER_ATTENDANCE}`, params);
