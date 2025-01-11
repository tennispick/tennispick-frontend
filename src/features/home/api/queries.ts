import { useQuery } from "@tanstack/react-query";
import { URL_HOME_CUSTOMER_STATISTICS, URL_HOME_SALES_STATISTICS } from "@/entities/home/url";
import { getCustomerStatistics, getSalesStatistics } from "@/features/home/api/fetch";
import { getDateQueryKey } from "@/shared/utils/query";

export const useCustomerStatistics = (date: Date) => {
  return useQuery({
    queryKey: [URL_HOME_CUSTOMER_STATISTICS, getDateQueryKey(date)],
    queryFn: () => getCustomerStatistics(date),
    select: ({ data }) => data.data,
  });
};

export const useSalesStatistics = (date: Date) => {
  return useQuery({
    queryKey: [URL_HOME_SALES_STATISTICS, getDateQueryKey(date)],
    queryFn: () => getSalesStatistics(date),
    select: ({ data }) => data.data,
  });
};

export const useTotalSales = () => {

}