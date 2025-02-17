import { createInitialData } from '@/types/response';
import {
  getCoachCustomers,
  getCoachDetail,
  getCoachLessonList,
  getCoachList,
  getCoachPerformance,
  getCoachTotalSales,
  getCoachTotalSalesList,
} from '@apis/coach/coach.api';
import {
  CoachCustomersPayload,
  CoachDetailData,
  CoachListData,
  CoachPerformanceData,
  CoachTotalSalesData,
  CoachTotalSalesPayload,
} from '@apis/coach/coach.type';
import {
  URL_COACH,
  URL_COACH_CUSTOMERS,
  URL_COACH_DETAIL,
  URL_COACH_PERFORMANCE,
} from '@apis/coach/coach.url';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useGetCoachListQuery = ({
  enabled = true,
}: {
  enabled?: boolean;
}) => {
  return useQuery({
    queryKey: [URL_COACH],
    queryFn: async () => await getCoachList(),
    select: (data) => data?.data,
    enabled: enabled,
  });
};

export const useGetCoachLessonListQuery = () => {
  return useQuery({
    queryKey: [URL_COACH],
    queryFn: async () => await getCoachLessonList(),
    select: (data) => data.data,
  });
};

export const useCoachDetailQuery = (coachId: string) => {
  return useQuery({
    queryKey: [URL_COACH, { coachId }],
    queryFn: async () => await getCoachDetail(coachId),
    select: (data) => data.data,
    initialData: createInitialData({} as CoachDetailData),
  });
};

export const useCoachTotalSalesQuery = (params: CoachTotalSalesPayload) => {
  return useQuery({
    queryKey: [`${URL_COACH_DETAIL(params.coachId)}/totalSales`, params],
    queryFn: async () => await getCoachTotalSales(params),
    select: (data) => data.data,
    initialData: createInitialData([
      {
        totalPrice: 0,
        totalCashPrice: 0,
        totalAccountTransferPrice: 0,
        totalCardPrice: 0,
        totalRefundPrice: 0,
        totalRefundCashPrice: 0,
        totalRefundAccountTransferPrice: 0,
        totalRefundCardPrice: 0,
      },
    ] as CoachTotalSalesData[]),
  });
};

export const useCoachTotalSalesListQuery = (params: CoachTotalSalesPayload) => {
  return useInfiniteQuery({
    queryKey: [`${URL_COACH_DETAIL(params.coachId)}/totalSalesList`, params],
    queryFn: async ({ pageParam = 1 }) =>
      await getCoachTotalSalesList({ ...params, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage?.data && lastPage.data.length > 0
        ? allPage.length + 1
        : undefined;
    },
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.data),
      pageParams: [...data.pageParams],
    }),
  });
};

export const useCoachCustomersQuery = (params: CoachCustomersPayload) => {
  const { coachId } = params;
  return useInfiniteQuery({
    queryKey: [URL_COACH_CUSTOMERS(coachId), params],
    queryFn: async ({ pageParam = 1 }) =>
      await getCoachCustomers({ ...params, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage?.data && lastPage.data.length > 0
        ? allPage.length + 1
        : undefined;
    },
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.data),
      pageParams: [...data.pageParams],
    }),
  });
};

const initialCoachPerformance: CoachPerformanceData = {
  lessonCount: [
    {
      lessonDateCount: 0,
    },
  ],
  lesson: [
    {
      additionalLessonCount: 0,
      regularLessonCount: 0,
    },
  ],
  customerAttendance: [
    {
      absentLessons: 0,
      attendanceRate: 0,
      attendedLessons: 0,
      totalLessons: 0,
    },
  ],
};

export const useCoachPerformanceQuery = (
  coachId: string,
  startDate: string,
  endDate: string,
) => {
  return useQuery({
    queryKey: [URL_COACH_PERFORMANCE(coachId), { startDate, endDate }],
    queryFn: () => getCoachPerformance({ coachId, startDate, endDate }),
    select: (data) => data.data,
    initialData: createInitialData(
      initialCoachPerformance as CoachPerformanceData,
    ),
  });
};
