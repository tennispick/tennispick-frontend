import { URL_COACH } from '@/entities/coach/url';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getCoachs } from './fetch';
import { DEFAULT_PAGE_SIZE } from '@/shared/constants/pagination';

export const useCoachsQuery = () => {
  return useQuery({
    queryKey: [URL_COACH],
    queryFn: getCoachs,
    select: (data) => data?.data,
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
      getCoachs({ page: pageParam, pageSize: pageSize }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      console.log(lastPage);
      const hasNextPage = lastPage?.data && lastPage.data.length >= pageSize;
      return hasNextPage ? allPages.length + 1 : undefined;
    },
    select: ({ pages, pageParams }) => ({
      pages: pages.flatMap((page) => page.data),
      pageParams: pageParams,
    }),
  });
};
