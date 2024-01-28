import { useQuery } from '@tanstack/react-query';
import { getScheduleLessonByDate } from 'src/apis/schedule/schedule.api';
import { ScheduleLessonByDateQueryPayload } from '../type/schedule.type';
import { URL_SCHEDULE_LESSON_BY_DATE } from 'src/apis/schedule/schedule.url';

// 스케줄을 기간으로 조회
const useScheduleByPeriodQuery = () => {};

// 스케줄을 날짜로 조회
const useScheduleByDateQuery = (params: ScheduleLessonByDateQueryPayload) => {
  const { day } = params;

  const year = day.getFullYear();
  const month = day.getMonth() + 1;
  const date = day.getDate();

  const { data, isFetching, isLoading } = useQuery({
    queryKey: [URL_SCHEDULE_LESSON_BY_DATE, year, month, date],
    queryFn: async () => await getScheduleLessonByDate({ day }),
  });
  return {
    data,
    isFetching,
    isLoading,
  };
};

export { useScheduleByPeriodQuery, useScheduleByDateQuery };
