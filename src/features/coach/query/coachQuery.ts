import { getCoachList } from '@apis/coach/coach.api';
import { CoachListData } from '@apis/coach/coach.type';
import { URL_FETCH_COACH_LIST } from '@apis/coach/coach.url';
import { useQuery } from '@tanstack/react-query';

const useGetCoachListQuery = (): {
  data: { data: CoachListData[] } | undefined;
  isLoading?: boolean;
  error: unknown;
} => {
  const { data, isLoading, error } = useQuery({
    queryKey: [URL_FETCH_COACH_LIST],
    queryFn: async (): Promise<{ data: CoachListData[] }> => {
      try {
        return await getCoachList();
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });

  return {
    data,
    isLoading,
    error,
  };
};

export { useGetCoachListQuery };
