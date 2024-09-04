import { createInitialData } from '@/types/response';
import {
  getCoachDetail,
  getCoachLessonList,
  getCoachList,
  getCoachTotalSales,
} from '@apis/coach/coach.api';
import {
  CoachDetailData,
  CoachListData,
  CoachTotalSalesPayload,
} from '@apis/coach/coach.type';
import { URL_COACH, URL_COACH_TOTAL_SALES } from '@apis/coach/coach.url';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useGetCoachListQuery = ({
  enabled = true,
}: {
  enabled?: boolean;
}): {
  data: CoachListData[] | undefined;
  isLoading?: boolean;
  error: unknown;
} => {
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

export const useCoachTotalSalesListQuery = (params: CoachTotalSalesPayload) => {
  return useInfiniteQuery({
    queryKey: [URL_COACH_TOTAL_SALES, params],
    queryFn: async ({ pageParam = 1 }) =>
      await getCoachTotalSales({ ...params, page: pageParam }),
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
