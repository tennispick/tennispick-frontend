import { useQuery } from '@tanstack/react-query';
import {
  CustomerLessonListQueryPayload,
  CustomerLessonHistoryQueryPayload,
  CustomerLessonListQueryData,
  CustomerLessonHistoryQueryData,
  CustomerDetailQueryPayLoad,
  CustomerAllLessonListQueryData,
} from '../type/customer.type';
import {
  getCustomerAllLessonList,
  getCustomerDetail,
  getCustomerLessonHistory,
  getCustomerLessonList,
  getCustomerLessonScheduleHistory,
  getCustomerMemoList,
} from '@apis/customer/customer.api';
import {
  URL_FETCH_CUSTOMER_LESSON_LIST,
  URL_FETCH_CUSTOMER_DETAIL,
  URL_FETCH_CUSTOMER_LESSON_HISTORY,
  URL_CUSTOMER_MEMO,
  URL_FETCH_CUSTOMER_ALL_LESSON_LIST,
  URL_FETCH_CUSTOMER_LESSON_SCHEDULE_HISTORY_LIST,
  URL_CUSTOMER_ADDITIONAL_LESSON,
} from '@apis/customer/customer.url';
import { Response } from '@/types/response';
import { getCustomerAdditionalLessonList } from '@apis/customer/customer.api';

export const useCustomerAllLessonListQuery = (
  params: Pick<CustomerLessonListQueryPayload, 'id'>,
) => {
  try {
    const { id } = params;
    const { data, isLoading } = useQuery<
      Response<CustomerAllLessonListQueryData>
    >({
      queryKey: [URL_FETCH_CUSTOMER_ALL_LESSON_LIST, id],
      queryFn: async () => await getCustomerAllLessonList({ id: id }),
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

export const useCustomerLessonListQuery = (
  params: CustomerLessonListQueryPayload,
) => {
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

export const useCustomerLessonHistoryQuery = (
  params: CustomerLessonHistoryQueryPayload,
) => {
  try {
    const { customerId, lessonType, page } = params;
    const { data, isLoading } = useQuery<
      Response<CustomerLessonHistoryQueryData>
    >({
      queryKey: [
        URL_FETCH_CUSTOMER_LESSON_HISTORY,
        { customerId, lessonType, page },
      ],
      queryFn: async () =>
        await getCustomerLessonHistory({ customerId, lessonType, page }),
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

export const useCustomerLessonScheduleHistoryQuery = (params: {
  customerId: number;
  customerLessonId: number;
}) => {
  try {
    const { customerId, customerLessonId } = params;
    const { data, isLoading } = useQuery({
      queryKey: [
        URL_FETCH_CUSTOMER_LESSON_SCHEDULE_HISTORY_LIST,
        { customerId, customerLessonId },
      ],
      queryFn: async () =>
        await getCustomerLessonScheduleHistory({
          customerId,
          customerLessonId,
        }),
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

export const useCustomerDetailQuery = (params: CustomerDetailQueryPayLoad) => {
  try {
    const { id } = params;
    const { data, isLoading } = useQuery({
      queryKey: [URL_FETCH_CUSTOMER_DETAIL, id],
      queryFn: async () => await getCustomerDetail({ id: id }),
      enabled: !!id,
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

export const useCustomerAdditionalLessonListQuery = (customerId: string) => {
  try {
    const { data, isFetching } = useQuery({
      queryKey: [URL_CUSTOMER_ADDITIONAL_LESSON, { customerId }],
      queryFn: async () => await getCustomerAdditionalLessonList(customerId),
      select: (data) => data?.data,
    });

    return { data, isFetching };
  } catch (error) {
    console.error(error);
    return { data: error };
  }
};

export const useCustomerMemoListQuery = (customerId: string) => {
  try {
    const { data, isLoading } = useQuery({
      queryKey: [URL_CUSTOMER_MEMO, customerId],
      queryFn: async () => await getCustomerMemoList(customerId),
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
