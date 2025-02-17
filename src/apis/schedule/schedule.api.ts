import {
  URL_CREATE_SCHEDULE_LESSON,
  URL_CREATE_CHANGE_SCHEDULE_LESSON,
  URL_SCHEDULE_LESSON_BY_PERIOD,
  URL_SCHEDULE_LESSON_BY_DATE,
  URL_UPDATE_SCHEDULE_LESSON,
  URL_DELETE_SCHEDULE_LESSON,
  URL_IS_DUPLICATE_CHECK_SCHEDULE_LESSON,
  URL_CREATE_ADDITIONAL_SCHEDULE_LESSON,
} from './schedule.url';
import { axios } from '@utils/axios';
import {
  ScheduleLessonByDateApiPayload,
  LessonScheduleByPeriodPayload,
  DuplicateCheckScheduleLessonPayload,
  LessonSchduleByPeriodData,
} from './schedule.type';

// 특정 기간내에 스케줄이 있는지
export const getLessonSchduleByPeriod = async (
  params: LessonScheduleByPeriodPayload,
): Promise<LessonSchduleByPeriodData> => {
  try {
    const { startDate, endDate } = params;
    const { data } = await axios.get(
      `${URL_SCHEDULE_LESSON_BY_PERIOD}?startDate=${startDate}&endDate=${endDate}`,
    );
    return data;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getScheduleLessonByDate = async (
  params: ScheduleLessonByDateApiPayload,
) => {
  const { day } = params;
  const { data } = await axios.get(
    `${URL_SCHEDULE_LESSON_BY_DATE}?date=${day}`,
  );
  return data;
};

const createScheduleLesson = async (params: any) => {
  const param = params.length
    ? params
    : {
        ...params,
      };
  const { data } = await axios.post(`${URL_CREATE_SCHEDULE_LESSON}`, param);
  return data;
};

export const createAdditionalScheduleLesson = async (param: FormData) => {
  const { data } = await axios.post(
    `${URL_CREATE_ADDITIONAL_SCHEDULE_LESSON}`,
    param,
  );
  return data;
};

export const createChangeScheduleLesson = async (params: any) => {
  const { data } = await axios.post(`${URL_CREATE_CHANGE_SCHEDULE_LESSON}`, {
    ...params,
  });
  return data;
};

const updateScheduleLesson = async (params: any) => {
  const { data } = await axios.put(`${URL_UPDATE_SCHEDULE_LESSON}`, {
    ...params,
  });
  return data;
};

const deleteScheduleLesson = async (params: any) => {
  const { data } = await axios.put(`${URL_DELETE_SCHEDULE_LESSON}`, {
    id: params,
  });
  return data;
};

const isDuplicateCheckScheduleLesson = async (
  params: DuplicateCheckScheduleLessonPayload,
) => {
  const { coachId, courtId, schedule } = params;

  if (!coachId || !courtId || !schedule) return {};

  const { data } = await axios.post(
    `${URL_IS_DUPLICATE_CHECK_SCHEDULE_LESSON}`,
    {
      coachId,
      courtId,
      schedule,
    },
  );
  return data;
};

export {
  getScheduleLessonByDate,
  createScheduleLesson,
  updateScheduleLesson,
  deleteScheduleLesson,
  isDuplicateCheckScheduleLesson,
};
