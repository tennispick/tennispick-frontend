import { axios } from "@utils/axios";
import { useQuery } from '@tanstack/react-query';

const getCourtFetch = async (): Promise<any> => await axios.get(`/court`);

const getCourtQuery = () => {
  try {
    const { data } = useQuery({
      queryKey: ['court', ],
      queryFn: async () => await getCourtFetch(),
    });
    return {
      data: data
    };
  } catch (error) {
    console.error(error);
    return { data: error }
  }
}

export { getCourtFetch, getCourtQuery }