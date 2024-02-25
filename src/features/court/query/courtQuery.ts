import { getCourtList } from '@apis/court/court.api';
import { URL_FETCH_COURT_LIST } from '@apis/court/court.url';
import { useQuery } from '@tanstack/react-query';

const useGetCourtListQuery = () => {
  try {
    const { data } = useQuery({
      queryKey: [URL_FETCH_COURT_LIST],
      queryFn: async () => await getCourtList(),
      select: (data) => data.data,
    });
    return {
      data,
    };
  } catch (error) {
    console.error(error);
    return { data: error };
  }
};

export { useGetCourtListQuery };
