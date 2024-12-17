import { URL_COACH } from '@/entities/coach/url';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getCoach } from './fetch';
import camelcaseKeys from 'camelcase-keys';
import { DEFAULT_PAGE_SIZE } from '@/shared/constants/pagination';

export const useCoachsQuery = (enabled = false) => {
  return useQuery({
    queryKey: [URL_COACH],
    queryFn: () => getCoach(),
    select: (data) => data?.data,
    enabled: enabled,
  });
};

export const useCoachsInfiniteQuery = ({
  pageSize = DEFAULT_PAGE_SIZE,
}: {
  pageSize: number;
}) => {
  return useInfiniteQuery({
    queryKey: [URL_COACH],
    queryFn: ({ pageParam }) =>
      getCoach({ page: pageParam, pageSize: pageSize }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const hasNextPage = lastPage?.data && lastPage.data.length >= pageSize;
      return hasNextPage ? allPages.length + 1 : undefined;
    },
    select: ({ pages, pageParams }) => ({
      pages: camelcaseKeys(
        pages.flatMap((page) => page.data),
        { deep: true },
      ),
      pageParams: pageParams,
    })
  });
};
