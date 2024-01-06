import { URL_CREATE_SCHEDULE_LESSON, URL_SCHEDULE_LESSON_BY_DATE } from "./schedule.url";
import { axios } from "@utils/axios";
import { ScheduleLessonByDateApiPayload } from "./schedule.type";
import { ScheduleMutationDataPayload } from "@features/schedule/type/schedule.type";

const getScheduleLessonByDate = async (params: ScheduleLessonByDateApiPayload) => {
  const { day } = params;
  const { data } = await axios.get(`${URL_SCHEDULE_LESSON_BY_DATE}?date=${day}`);
  return data;
};

const createScheduleLesson = async (params: ScheduleMutationDataPayload) => {
  const { data } = await axios.post(`${URL_CREATE_SCHEDULE_LESSON}`, { ...params });
  return data;
};

export {
  getScheduleLessonByDate,
  createScheduleLesson
};