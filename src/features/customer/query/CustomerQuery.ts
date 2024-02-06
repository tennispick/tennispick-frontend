import { useQuery } from '@tanstack/react-query';
import { CustomerDetailQueryPayLoad } from '../type/customer.type';
import { getCustomerDetail } from '@apis/customer/customer.api';
import { URL_FETCH_CUSTOMER_DETAIL } from '@apis/customer/customer.url';

const useCustomerDetailQuery = (params: CustomerDetailQueryPayLoad) => {
  try {
    const { id } = params;
    const { data, isLoading } = useQuery({
      queryKey: [URL_FETCH_CUSTOMER_DETAIL, id],
      queryFn: async () => await getCustomerDetail({ id: id }),
    });

    return {
      data: data?.data,
      isLoading,
    };
  } catch (error) {
    console.error(error);
    return { data: error };
  }
};

export { useCustomerDetailQuery };
