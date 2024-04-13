import { axios } from '@utils/axios';
import { URL_FETCH_COACH_LIST, URL_DELETE_COACH } from './coach.url';
import { CoachDeleteApiPayload, CoachListData } from './coach.type';

export const getCoachList = async (): Promise<{ data: CoachListData[] }> =>
  await axios.get(`${URL_FETCH_COACH_LIST}`);

export const deleteCoach = async (params: CoachDeleteApiPayload) =>
  await axios.delete(`${URL_DELETE_COACH}/${params.coachId}`);
