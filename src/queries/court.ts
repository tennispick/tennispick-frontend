import { axiosInstance } from '@lib/axios';
import { useQuery } from '@tanstack/react-query';

const getCourtFetch = async (): Promise<any> => await axiosInstance.get('/court');

const getCourtDetailFetch = async (id: string): Promise<any> =>
  await axiosInstance.get(`/court/${id}`);

const generateCourt = async (data: object): Promise<any> =>
  await axiosInstance.post('/court', { data: data });

const updateCourtDetailInfo = async (id: string, data: object): Promise<any> =>
  await axiosInstance.put(`/court/${id}`, { data: data });

const deleteCourtDetailInfo = async (id: string): Promise<any> =>
  await axiosInstance.delete('/court', { data: { id: id } });

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
    return { data: error };
  }
};

export {
  getCourtFetch,
  getCourtDetailFetch,
  updateCourtDetailInfo,
  deleteCourtDetailInfo,
  generateCourt,
  getCourtDetailQuery,
};
