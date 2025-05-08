import { axios } from 'src/이전 파일들/utils/axios';
import { useQuery } from '@tanstack/react-query';

type ScheduleProps = {
  coachId?: number;
  startWeekDate: string;
  endWeekDate: string;
};

// 특정 날짜의 스케줄 일정 조회
const getScheduleByDate = async ({ day }: { day: Date }): Promise<Response> =>
  await axios.get(`/calendar/schedule?date=${day}`);
const getScheduleByDateQuery = ({ ...props }) => {
  try {
    const { day } = props;

    const calendarYear = day.getFullYear();
    const calendarMonth = day.getMonth() + 1;
    const currentDate = day.getDate();

    const { data, isFetching, isLoading } = useQuery({
      queryKey: ['schedule', calendarYear, calendarMonth, currentDate],
      queryFn: async () => await getScheduleByDate({ day }),
    });

    return {
      data: data,
      isFetching,
      isLoading,
    };
  } catch (error) {
    console.error(error);
  }
};

// 전체 스케줄 조회
const getScheduleFetch = async ({
  coachId,
  startWeekDate,
  endWeekDate,
}: ScheduleProps): Promise<Response> =>
  await axios.get(
    `/calendar?coachId=${coachId}&startWeekDate=${startWeekDate}&endWeekDate=${endWeekDate}`,
  );

const getScheduleQuery = (props: ScheduleProps) => {
  try {
    const { coachId, startWeekDate, endWeekDate } = props;
    const { data } = useQuery({
      queryKey: ['calendar', coachId, startWeekDate, endWeekDate],
      queryFn: async () =>
        await getScheduleFetch({ coachId, startWeekDate, endWeekDate }),
    });
    return {
      data,
    };
  } catch (error) {
    console.error(error);
  }
};

export {
  getScheduleByDate,
  getScheduleFetch,
  getScheduleByDateQuery,
  getScheduleQuery,
};
