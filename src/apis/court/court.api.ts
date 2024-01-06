import { axios } from "@utils/axios";
import { URL_FETCH_COURT_LIST } from "./court.url";
import { CourtListApiPayload } from "./court.type";

const getCourtList = async (params?: CourtListApiPayload) =>{
  const { data } = await axios.get(`${URL_FETCH_COURT_LIST}`);
  return data;
};

export {
  getCourtList,
}