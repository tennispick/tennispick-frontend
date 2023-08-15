import { axios } from "@utils/axios";
import { useQuery } from '@tanstack/react-query';

interface ScheduleProps {
  coachId?: number;
  startWeekDate: string;
  endWeekDate: string;
}

const getFetch = async ({ coachId, startWeekDate, endWeekDate }: ScheduleProps): Promise<any> => await axios.get(`/calendar?coachId=${coachId}&startWeekDate=${startWeekDate}&endWeekDate=${endWeekDate}`);

const getScheduleQuery = (props: ScheduleProps) =>{
  try{
    const { coachId, startWeekDate, endWeekDate } = props;
    const { data } = useQuery({
      queryKey: ['calendar', coachId, startWeekDate, endWeekDate],
      queryFn: async () => await getFetch({ coachId, startWeekDate, endWeekDate }),
    });
    return {
      data
    };
  }catch(error){
    console.error(error);
  }
}

export { getScheduleQuery }