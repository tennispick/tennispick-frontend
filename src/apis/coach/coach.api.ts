import { axios } from "@utils/axios";
import { URL_FETCH_COACH_LIST } from "./coach.url";
import { CoachListApiPayload } from "./coach.type";

const getCoachList = async (params?: CoachListApiPayload) =>{
  const { data } = await axios.get(`${URL_FETCH_COACH_LIST}`);
  return data;
};

export {
  getCoachList,
}