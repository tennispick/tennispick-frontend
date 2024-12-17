import {
  getCustomerStatistics,
  getSalesStatistics,
} from 'src/이전 파일들/apis/home/home.api';
import {
  URL_HOME_CUSTOMER_STATISTICS,
  URL_HOME_SALES_STATISTICS,
} from 'src/이전 파일들/apis/home/home.url';
import { isServer, useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { createInitialData } from 'src/이전 파일들/types/response';
import { CustomerStatistics } from '../type/customer-statistics';

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
    second: date.getSeconds(),
  };
};

export const useHomeCustomerStatisticsQuery = (date: Date) => {
  return useQuery({
    queryKey: [URL_HOME_CUSTOMER_STATISTICS, getDateQueryKey(date)],
    queryFn: () => getCustomerStatistics(date),
    select: ({ data }) => data.data,
  });
};

export const useHomeSalesStatisticsQuery = (date: Date) => {
  return useQuery({
    queryKey: [URL_HOME_SALES_STATISTICS, getDateQueryKey(date)],
    queryFn: () => getSalesStatistics(date),
    select: ({ data }) => data.data,
  });
};
