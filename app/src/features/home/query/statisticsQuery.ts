import {
  getTotalSales,
} from 'app/src/apis/home/home.api';
import {
  URL_HOME_TOTAL_SALES,
} from 'app/src/apis/home/home.url';
import { useQuery } from '@tanstack/react-query';

const getDateQueryKey = (date: Date) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
};

export const useTotalSalesQuery = (date: Date) => {
  return useQuery({
    queryKey: [URL_HOME_TOTAL_SALES, getDateQueryKey(date)],
    queryFn: () => getTotalSales(),
    select: (data) => data.data,
  });
};
