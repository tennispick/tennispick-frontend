import { useQuery } from '@tanstack/react-query';
import {
  CustomerLessonListQueryPayload,
  CustomerLessonHistoryQueryPayload,
  CustomerLessonListQueryData,
  CustomerLessonHistoryQueryData,
  CustomerDetailQueryPayLoad,
} from '../type/customer.type';
import {
  getCustomerDetail,
  getCustomerLessonHistory,
  getCustomerLessonList,
} from '@apis/customer/customer.api';
import {
  URL_FETCH_CUSTOMER_LESSON_LIST,
  URL_FETCH_CUSTOMER_DETAIL,
  URL_FETCH_CUSTOMER_LESSON_HISTORY,
} from '@apis/customer/customer.url';
import { Response } from '@/types/response';

const useCustomerLessonListQuery = (params: CustomerLessonListQueryPayload) => {
  try {
    const { id, lessonType } = params;
    const { data, isLoading } = useQuery<Response<CustomerLessonListQueryData>>(
      {
        queryKey: [URL_FETCH_CUSTOMER_LESSON_LIST, id, lessonType],
        queryFn: async () =>
          await getCustomerLessonList({ id: id, lessonType: lessonType }),
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

const useCustomerLessonHistoryQuery = (
  params: CustomerLessonHistoryQueryPayload,
) => {
  try {
    const { customerId, page } = params;
    const { data, isLoading } = useQuery<
      Response<CustomerLessonHistoryQueryData>
    >({
      queryKey: [URL_FETCH_CUSTOMER_LESSON_HISTORY, { customerId, page }],
      queryFn: async () => await getCustomerLessonHistory({ customerId, page }),
      enabled: !!customerId,
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

export {
  useCustomerLessonListQuery,
  useCustomerLessonHistoryQuery,
  useCustomerDetailQuery,
};
