import { axios } from "@utils/axios";
import { useQuery } from '@tanstack/react-query';

interface CustomerProps {

}

const getCustomerFetch = async (): Promise<any> => await axios.get('/customer');

const getCustomerDetailFetch = async (id: string): Promise<any> => await axios.get(`/customer/${id}`);

const generateCustomer = async (data: object): Promise<any> => await axios.post('/customer', { data: data });

const getCustomerQuery = (): any => {
  try {
    const { data } = useQuery({
      queryKey: ['customer',],
      queryFn: async () => await getCustomerFetch(),
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
  getCustomerFetch,
  getCustomerDetailFetch,
  generateCustomer,
  getCustomerQuery
}