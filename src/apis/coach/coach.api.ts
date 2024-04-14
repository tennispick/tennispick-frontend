import { axios } from '@utils/axios';
import {
  URL_FETCH_COACH_LIST,
  URL_DELETE_COACH,
  URL_FETCH_COACH_LESSON_LIST,
} from './coach.url';
import {
  CoachDeleteApiPayload,
  CoachLessonListData,
  CoachListData,
} from './coach.type';
import { Response } from '@/types/response';

export const getCoachList = async (): Promise<{ data: CoachListData[] }> =>
  await axios.get(`${URL_FETCH_COACH_LIST}`);

export const getCoachLessonList = async (): Promise<
  Response<CoachLessonListData>
> => {
  try {
    const result = await axios.get(`${URL_FETCH_COACH_LESSON_LIST}`);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteCoach = async (params: CoachDeleteApiPayload) =>
  await axios.delete(`${URL_DELETE_COACH}/${params.coachId}`);
