import { axios } from '@utils/axios';
import { URL_FETCH_COACH_LIST } from './coach.url';
import { CoachListData } from './coach.type';

const getCoachList = async (): Promise<{ data: CoachListData[] }> => await axios.get(`${URL_FETCH_COACH_LIST}`);

export { getCoachList };
