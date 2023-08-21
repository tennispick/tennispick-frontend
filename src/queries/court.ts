import { axios } from "@utils/axios";
import { useQuery } from '@tanstack/react-query';

const getCourtFetch = async (): Promise<any> => await axios.get('/court');

const getCourtDetailFetch = async (id: string): Promise<any> => await axios.get(`/court/${id}`);

const updateCourtDetailInfo = async (id: string, data: object): Promise<any> => await axios.put(`/court/${id}`, { data: data });

const deleteCourtDetailInfo = async (id: string): Promise<any> => await axios.delete('/court', { data: { id: id } });

const generateCourt = async (data: object): Promise<any> => await axios.post('/court', { data: data });

const getCourtQuery = (): any => {
  try {
    const { data } = useQuery({
      queryKey: ['court',],
      queryFn: async () => await getCourtFetch(),
    });
    return {
      data: data,
    };
  } catch (error) {
    console.error(error);
    return { data: error }
  }
}

const getCourtDetailQuery = (id: string) => {
  try {
    const { data } = useQuery({
      queryKey: ['court', id],
      queryFn: async () => await getCourtDetailFetch(id),
    });
    return {
      data: data,
    };
  } catch (error) {
    console.error(error);
    return { data: error }
  }
}

export {
  getCourtFetch,
  getCourtDetailFetch,
  updateCourtDetailInfo,
  deleteCourtDetailInfo,
  generateCourt,
  getCourtQuery,
  getCourtDetailQuery
}