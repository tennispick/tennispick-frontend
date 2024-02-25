import { axios } from '@utils/axios';
import { URL_FETCH_COURT_LIST } from './court.url';

const getCourtList = async () => await axios.get(`${URL_FETCH_COURT_LIST}`);

export { getCourtList };
