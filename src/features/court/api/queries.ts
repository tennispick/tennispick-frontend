import { URL_COURT } from "@/entities/court/url"
import { useInfiniteQuery } from "@tanstack/react-query"
import { getCourts } from "./fetch"
import { DEFAULT_PAGE_SIZE } from "@/shared/constants/pagination"
import camelcaseKeys from "camelcase-keys"

export const useCourtsInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: [URL_COURT],
    queryFn: ({ pageParam }) => getCourts({ page: pageParam, pageSize: DEFAULT_PAGE_SIZE }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const hasNextPage = lastPage?.data && lastPage.data.length >= DEFAULT_PAGE_SIZE;
      return hasNextPage ? allPages.length + 1 : undefined;
    },
    select: ({ pages, pageParams }) => ({
      pages: camelcaseKeys(
        pages.flatMap((page) => page.data),
        { deep: true },
      ),
      pageParams: pageParams,
    })
  })
}
