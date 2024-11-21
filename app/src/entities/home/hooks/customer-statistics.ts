import {
  getCustomerStatistics,
  getSalesStatistics,
} from 'app/src/apis/home/home.api';
import {
  URL_HOME_CUSTOMER_STATISTICS,
  URL_HOME_SALES_STATISTICS,
} from 'app/src/apis/home/home.url';
import { isServer, useQuery, useSuspenseQuery } from '@tanstack/react-query';

export type HomeCustomerStatisticsQueryKey = [
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
  return useSuspenseQuery<any, unknown, any, HomeCustomerStatisticsQueryKey>({
    queryKey: [URL_HOME_CUSTOMER_STATISTICS, getDateQueryKey(date)],
    queryFn: async () => await getCustomerStatistics(date),
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