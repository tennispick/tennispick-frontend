import { axios } from '@utils/axios';
import {
  URL_COACH,
  URL_COACH_LESSON_LIST,
  URL_COACH_TOTAL_SALES,
} from './coach.url';
import {
  CoachDeleteApiPayload,
  CoachDetailData,
  CoachLessonListData,
  CoachListData,
  CoachTotalSalesData,
  CoachTotalSalesPayload,
} from './coach.type';
import { Response } from '@/types/response';

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
  return await axios.get(`${URL_COACH_TOTAL_SALES}/${coachId}`, {
    params: { ...rest },
  });
};
