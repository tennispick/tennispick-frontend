import { axios } from '@utils/axios';
import { useQuery } from '@tanstack/react-query';

const getCustomerFetch = async () => await axios.get('/customer');

const getCustomerDetailFetch = async (id: string): Promise<any> =>
  await axios.get(`/customer/${id}`);

const generateCustomer = async (data: object): Promise<any> =>
  await axios.post('/customer', { data: data });

const getCustomerQuery = (): any => {
  return useQuery({
    queryKey: ['customer'],
    queryFn: async () => await getCustomerFetch(),
    select: (data) => data.data,
  });
};

const getCustomerDetailQuery = (id: string): any => {
  try {
    const { data, isLoading } = useQuery({
      queryKey: ['customer', id],
      queryFn: async () => await getCustomerDetailFetch(id),
    });
    return {
      data: data,
      isLoading,
    };
  } catch (error) {
    console.error(error);
    return { data: error };
  }
};

export {
  getCustomerFetch,
  getCustomerDetailFetch,
  generateCustomer,
  getCustomerQuery,
  getCustomerDetailQuery,
};
