import { authAxiosInstance } from '@lib/axios';
import { URL_FETCH_COURT_LIST } from './court.url';

const getCourtList = async () => await authAxiosInstance.get(`${URL_FETCH_COURT_LIST}`);

export { getCourtList };
