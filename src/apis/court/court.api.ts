import { axios } from '@utils/axios';
import { URL_FETCH_COURT_LIST } from './court.url';

const getCourtList = async () => {
  const { data } = await axios.get(`${URL_FETCH_COURT_LIST}`);
  return data;
};

export { getCourtList };
