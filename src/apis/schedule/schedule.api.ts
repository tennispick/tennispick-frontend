import {
  URL_CREATE_SCHEDULE_LESSON,
  URL_SCHEDULE_LESSON_BY_PERIOD,
  URL_SCHEDULE_LESSON_BY_DATE,
} from './schedule.url';
import { axios } from '@utils/axios';
import {
  ScheduleLessonByDateApiPayload,
  ScheduleLessonByStartDateEndDatePeriodPayload,
  SchduleLessonByStartDateEndDatePeriodData,
} from './schedule.type';

const getScheduleLessonByStartDateEndDatePeriod = async (
  params: ScheduleLessonByStartDateEndDatePeriodPayload,
): Promise<SchduleLessonByStartDateEndDatePeriodData> => {
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
  const { data } = await axios.post(`${URL_CREATE_SCHEDULE_LESSON}`, {
    ...params,
  });
  return data;
};

export {
  getScheduleLessonByDate,
  getScheduleLessonByStartDateEndDatePeriod,
  createScheduleLesson,
};
