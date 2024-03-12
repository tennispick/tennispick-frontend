import { useQuery } from '@tanstack/react-query';
import {
  getScheduleLessonByStartDateEndDatePeriod,
  getScheduleLessonByDate,
  isDuplicateCheckScheduleLesson,
} from 'src/apis/schedule/schedule.api';
import {
  ScheduleLessonByStartDateEndDatePeriodQueryPayload,
  ScheduleLessonByDateQueryPayload,
  DuplicateCheckScheduleLessonQueryPayload,
} from '../type/schedule.type';
import {
  URL_IS_DUPLICATE_CHECK_SCHEDULE_LESSON,
  URL_SCHEDULE_LESSON_BY_DATE,
  URL_SCHEDULE_LESSON_BY_PERIOD,
} from 'src/apis/schedule/schedule.url';

// 시작날짜와 종료날짜로 스케줄 일정 조회
const useScheduleByPeriodQuery = (
  params: ScheduleLessonByStartDateEndDatePeriodQueryPayload,
) => {
  const { startDate, endDate } = params;

  const { data, isFetching, isLoading } = useQuery({
    queryKey: [URL_SCHEDULE_LESSON_BY_PERIOD, startDate, endDate],
    queryFn: async () =>
      await getScheduleLessonByStartDateEndDatePeriod({ startDate, endDate }),
  });
  return {
    data,
    isFetching,
    isLoading,
  };
};

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

export {
  useScheduleByPeriodQuery,
  useScheduleByDateQuery,
  useDuplicateCheckScheduleLessonQuery,
};
