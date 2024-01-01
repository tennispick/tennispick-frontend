import { URL_SCHEDULE_LESSON_BY_DATE } from "./schedule.url";
import { axios } from "@utils/axios";
import { ScheduleLessonByDateApiPayload } from "./schedule.type";

const API_SCHEDULE_LESSON_BY_PERIOD = async () => '';
const getScheduleLessonByDate = async (params: ScheduleLessonByDateApiPayload) => {
  const { day } = params;
  const { data } = await axios.get(`${URL_SCHEDULE_LESSON_BY_DATE}?date=${day}`);
  return data;
};

export {
  API_SCHEDULE_LESSON_BY_PERIOD,
  getScheduleLessonByDate
};