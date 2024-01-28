import { axios } from '@utils/axios';
import { URL_FETCH_COACH_LIST } from './coach.url';

const getCoachList = async () => {
  const { data } = await axios.get(`${URL_FETCH_COACH_LIST}`);
  return data;
};

export { getCoachList };
