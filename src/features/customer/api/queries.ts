import { URL_CUSTOMER, URL_CUSTOMER_AVAILABLE_LESSONS } from "@/entities/customer/url";
import { useQuery } from "@tanstack/react-query";
import { getCustomerAvailableLessons, getCustomers } from "./fetch";
import { QueryParams } from "@/shared/types/commons";

export const useCustomersQuery = (params: QueryParams) => {
  return useQuery({
    queryKey: [URL_CUSTOMER, {...params}],
    queryFn: () => getCustomers(params),
    enabled: params.keyword !== '',
  })
}

export const useCustomersInfiniteQuery = () => {};

export const useCustomerAvailableLessons = (keyword: string) => {
  return useQuery({
    queryKey: [URL_CUSTOMER_AVAILABLE_LESSONS, keyword],
    queryFn: () => getCustomerAvailableLessons(keyword),
  });
}