import { useQuery } from '@tanstack/react-query';
import {
  CustomerLessonListQueryPayload,
  CustomerLessonListQueryData,
  CustomerDetailQueryPayLoad,
} from '../type/customer.type';
import {
  getCustomerDetail,
  getCustomerLessonList,
} from '@apis/customer/customer.api';
import {
  URL_FETCH_CUSTOMER_LESSON_LIST,
  URL_FETCH_CUSTOMER_DETAIL,
} from '@apis/customer/customer.url';
import { Response } from '@/types/response';

const useCustomerLessonListQuery = (params: CustomerLessonListQueryPayload) => {
  try {
    const { id } = params;
    const { data, isLoading } = useQuery<Response<CustomerLessonListQueryData>>(
      {
        queryKey: [URL_FETCH_CUSTOMER_LESSON_LIST, id],
        queryFn: async () => await getCustomerLessonList({ id: id }),
      },
    );

    return {
      data: data?.data,
      isLoading,
    };
  } catch (error) {
    console.error(error);
    return { data: error };
  }
};

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

export { useCustomerLessonListQuery, useCustomerDetailQuery };
