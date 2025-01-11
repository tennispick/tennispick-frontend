import { useQuery } from '@tanstack/react-query';
import {
  getScheduleLessonByDate,
  isDuplicateCheckScheduleLesson,
  getLessonSchduleByPeriod,
} from 'src/이전 파일들/apis/schedule/schedule.api';
import {
  ScheduleLessonByStartDateEndDatePeriodQueryPayload,
  ScheduleLessonByDateQueryPayload,
  DuplicateCheckScheduleLessonQueryPayload,
} from '../type/schedule.type';
import {
  URL_IS_DUPLICATE_CHECK_SCHEDULE_LESSON,
  URL_SCHEDULE_LESSON_BY_DATE,
  URL_SCHEDULE_LESSON_BY_PERIOD,
} from 'src/이전 파일들/apis/schedule/schedule.url';

export const useLessonScheduleByPeriodQuery = (
  params: ScheduleLessonByStartDateEndDatePeriodQueryPayload,
) => {
  const { startDate, endDate } = params;

  return useQuery({
    queryKey: [URL_SCHEDULE_LESSON_BY_PERIOD, startDate, endDate],
    queryFn: async () => await getLessonSchduleByPeriod({ startDate, endDate }),
    select: (data) => data,
  });
};

const useScheduleByDateQuery = (params: ScheduleLessonByDateQueryPayload) => {
  const { day } = params;

  const year = day.getFullYear();
  const month = day.getMonth() + 1;
  const date = day.getDate();

  const { data, isFetching, isLoading } = useQuery({
    queryKey: [URL_SCHEDULE_LESSON_BY_DATE, { year, month, date }],
    queryFn: async () => await getScheduleLessonByDate({ day }),
  });
  return {
    data,
    isFetching,
    isLoading,
  };
};

// 선택한 날짜에 해당 코트에 예약가능 여부 확인
const useDuplicateCheckScheduleLessonQuery = (
  params: DuplicateCheckScheduleLessonQueryPayload,
) => {
  const { coach, court, schedule } = params;
  const { data, isFetching, isLoading, refetch } = useQuery({
    queryKey: [URL_IS_DUPLICATE_CHECK_SCHEDULE_LESSON, coach, court, schedule],
    queryFn: async () =>
      await isDuplicateCheckScheduleLesson({
        coachId: coach,
        courtId: court,
        schedule,
      }),
  });

  return {
    data,
    isFetching,
    isLoading,
    refetch,
  };
};

export { useScheduleByDateQuery, useDuplicateCheckScheduleLessonQuery };
