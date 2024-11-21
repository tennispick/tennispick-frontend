import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import {
  CustomerLessonListQueryPayload,
  CustomerLessonHistoryQueryPayload,
  CustomerDetailQueryPayLoad,
} from '../type/customer.type';
import {
  getCustomerAllLessonList,
  getCustomerDetail,
  getCustomerFetch,
  getCustomerLessonHistory,
  getCustomerLessonList,
  getCustomerLessonScheduleHistory,
  getCustomerMemoList,
} from 'app/src/apis/customer/customer.api';
import {
  URL_FETCH_CUSTOMER_LESSON_LIST,
  URL_FETCH_CUSTOMER_LESSON_HISTORY,
  URL_CUSTOMER_MEMO,
  URL_FETCH_CUSTOMER_ALL_LESSON_LIST,
  URL_FETCH_CUSTOMER_LESSON_SCHEDULE_HISTORY_LIST,
  URL_CUSTOMER_ADDITIONAL_LESSON,
  URL_CUSTOMER_DETAIL,
  URL_CUSTOMER,
} from 'app/src/apis/customer/customer.url';
import { createInitialData } from 'app/src/types/response';
import { getCustomerAdditionalLessonList } from 'app/src/apis/customer/customer.api';
import { CustomerDetailData } from 'app/src/apis/customer/customer.type';

export const useCustomerListQuery = (params: { limit: number }) => {
  const { limit } = params;
  return useInfiniteQuery({
    queryKey: [URL_CUSTOMER, { limit }],
    queryFn: ({ pageParam }) => getCustomerFetch({ limit, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const hasNextPage = lastPage?.data && lastPage.data.length >= limit;
      return hasNextPage ? allPages.length + 1 : undefined;
    },
    select: ({ pages, pageParams }) => ({
      pages: pages.flatMap((page) => page.data),
      pageParams: pageParams,
    }),
  });
};

export const useCustomerAllLessonListQuery = (
  params: Pick<CustomerLessonListQueryPayload, 'id'>,
) => {
  const { id } = params;
  return useQuery({
    queryKey: [URL_FETCH_CUSTOMER_ALL_LESSON_LIST, id],
    queryFn: async () => await getCustomerAllLessonList({ id: id }),
    select: (data) => data?.data,
  });
};

export const useCustomerLessonListQuery = (
  params: CustomerLessonListQueryPayload,
) => {
  const { id, lessonType } = params;
  return useQuery({
    queryKey: [URL_FETCH_CUSTOMER_LESSON_LIST, id, lessonType],
    queryFn: async () =>
      await getCustomerLessonList({ id: id, lessonType: lessonType }),
    select: (data) => data?.data,
  });
};

export const useCustomerLessonHistoryQuery = (
  params: CustomerLessonHistoryQueryPayload,
) => {
  const { customerId, lessonType, page } = params;
  const initialData = {
    lessonHistory: [{}] as any,
    totalPage: '0',
  };

  return useQuery({
    queryKey: [
      URL_FETCH_CUSTOMER_LESSON_HISTORY,
      { customerId, lessonType, page },
    ],
    queryFn: async () =>
      await getCustomerLessonHistory({ customerId, lessonType, page }),
    select: (data) => data?.data,
    initialData: createInitialData(initialData),
    enabled: !!customerId,
  });
};

export const useCustomerLessonScheduleHistoryQuery = (params: {
  customerId: number;
  customerLessonId: number;
}) => {
  const { customerId, customerLessonId } = params;
  return useQuery({
    queryKey: [
      URL_FETCH_CUSTOMER_LESSON_SCHEDULE_HISTORY_LIST,
      { customerId, customerLessonId },
    ],
    queryFn: async () =>
      await getCustomerLessonScheduleHistory({
        customerId,
        customerLessonId,
      }),
    select: (data) => data?.data,
  });
};

export const useCustomerDetailQuery = (params: CustomerDetailQueryPayLoad) => {
  const { id } = params;
  return useQuery({
    queryKey: [URL_CUSTOMER_DETAIL(id), id],
    queryFn: async () => await getCustomerDetail({ id: id }),
    select: (data) => data?.data,
    initialData: createInitialData({} as CustomerDetailData),
    enabled: !!id,
  });
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
  return useQuery({
    queryKey: [URL_CUSTOMER_MEMO, customerId],
    queryFn: async () => await getCustomerMemoList(customerId),
    select: (data) => data?.data,
  });
};
