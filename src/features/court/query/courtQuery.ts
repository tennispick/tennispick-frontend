import { getCourtList } from '@apis/court/court.api';
import { CourtListData } from '@apis/court/court.type';
import { URL_FETCH_COURT_LIST } from '@apis/court/court.url';
import { useQuery } from '@tanstack/react-query';

const useGetCourtListQuery = ({ enabled = true }: { enabled?: boolean }) => {
  return useQuery({
    queryKey: [URL_FETCH_COURT_LIST],
    queryFn: async (): Promise<{ data: CourtListData[] }> => {
      try {
        return await getCourtList();
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    select: (data) => data.data,
    enabled: enabled,
  });
};

export { useGetCourtListQuery };
