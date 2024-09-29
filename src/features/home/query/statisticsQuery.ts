import {
  getCustomerStatistics,
  getSalesStatistics,
  getTotalSales,
} from '@apis/home/home.api';
import {
  URL_HOME_CUSTOMER_STATISTICS,
  URL_HOME_SALES_STATISTICS,
  URL_HOME_TOTAL_SALES,
} from '@apis/home/home.url';
import { useQuery } from '@tanstack/react-query';

type HomeCustomerStatisticsQueryKey = [
  string,
  {
    year: number;
    month: number;
    date: number;
    hour: number;
    minute: number;
  },
];

const getDateQueryKey = (date: Date) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
};

export const useHomeCustomerStatisticsQuery = (date: Date) => {
  return useQuery<any, unknown, any, HomeCustomerStatisticsQueryKey>({
    queryKey: [URL_HOME_CUSTOMER_STATISTICS, getDateQueryKey(date)],
    queryFn: () => getCustomerStatistics(date),
    select: (data) => data.data,
  });
};

export const useHomeSalesStatisticsQuery = (date: Date) => {
  return useQuery({
    queryKey: [URL_HOME_SALES_STATISTICS, getDateQueryKey(date)],
    queryFn: () => getSalesStatistics(date),
    select: (data) => data.data,
  });
};

export const useTotalSalesQuery = (date: Date) => {
  return useQuery({
    queryKey: [URL_HOME_TOTAL_SALES, getDateQueryKey(date)],
    queryFn: () => getTotalSales(),
    select: (data) => data.data,
  });
};
