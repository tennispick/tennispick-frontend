import { URL_COURT } from '@/entities/court/url';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getCourts } from './fetch';
import { DEFAULT_PAGE_SIZE } from '@/shared/constants/pagination';

export const useCourtsQuery = () => {
  return useQuery({
    queryKey: [URL_COURT],
    queryFn: getCourts,
    select: (data) => data?.data,
  });
};

export const useCourtsInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: [URL_COURT],
    queryFn: ({ pageParam }) =>
      getCourts({ page: pageParam, pageSize: DEFAULT_PAGE_SIZE }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const hasNextPage =
        lastPage?.data && lastPage.data.length >= DEFAULT_PAGE_SIZE;
      return hasNextPage ? allPages.length + 1 : undefined;
    },
    select: ({ pages, pageParams }) => ({
      pages: pages.flatMap((page) => page.data),
      pageParams: pageParams,
    }),
  });
};
