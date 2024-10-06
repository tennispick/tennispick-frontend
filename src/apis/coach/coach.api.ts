import { axios } from '@utils/axios';
import {
  URL_COACH,
  URL_COACH_CUSTOMERS,
  URL_COACH_DETAIL,
  URL_COACH_LESSON_LIST,
  URL_COACH_PERFORMANCE,
} from './coach.url';
import {
  CoachCustomersPayload,
  CoachDeleteApiPayload,
  CoachDetailData,
  CoachLessonListData,
  CoachListData,
  CoachPerformanceData,
  CoachPerformancePayload,
  CoachTotalSalesData,
  CoachTotalSalesListData,
  CoachTotalSalesPayload,
} from './coach.type';
import { Response } from '@/types/response';
import { CoachCustomersData } from './coach.type';

export const getCoachList = async (): Promise<Response<CoachListData[]>> =>
  await axios.get(`${URL_COACH}`);

export const getCoachLessonList = async (): Promise<
  Response<CoachLessonListData[]>
> => await axios.get(`${URL_COACH_LESSON_LIST}`);

export const getCoachDetail = async (
  coachId: string,
): Promise<Response<CoachDetailData>> =>
  await axios.get(`${URL_COACH}/${coachId}`);

export const createCoach = async (params: FormData) => {
  try {
    const result = await axios.post(`${URL_COACH}`, params, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteCoach = async (params: CoachDeleteApiPayload) =>
  await axios.delete(`${URL_COACH}/${params.coachId}`);

export const getCoachTotalSales = async (
  params: CoachTotalSalesPayload,
): Promise<Response<CoachTotalSalesData[]>> => {
  const { coachId, ...rest } = params;
  return await axios.get(`${URL_COACH_DETAIL(coachId)}/totalSales`, {
    params: { ...rest },
  });
};

export const getCoachTotalSalesList = async (
  params: CoachTotalSalesPayload,
): Promise<Response<CoachTotalSalesListData[]>> => {
  const { coachId, ...rest } = params;
  return await axios.get(`${URL_COACH_DETAIL(coachId)}/totalSalesList`, {
    params: { ...rest },
  });
};

// DETAIL
export const getCoachCustomers = async (
  params: CoachCustomersPayload,
): Promise<Response<CoachCustomersData[]>> => {
  const { coachId, ...rest } = params;
  return await axios.get(URL_COACH_CUSTOMERS(coachId), {
    params: { ...rest },
  });
};

export const updateCoachDetail = async (coachId: string, params: FormData) => {
  return await axios.put(`${URL_COACH_DETAIL(coachId)}`, params, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const getCoachPerformance = async (
  params: CoachPerformancePayload,
): Promise<Response<CoachPerformanceData>> => {
  const { coachId, startDate, endDate } = params;
  return await axios.get(
    `${URL_COACH_PERFORMANCE(
      coachId,
    )}?startDate=${startDate}&endDate=${endDate}`,
  );
};
