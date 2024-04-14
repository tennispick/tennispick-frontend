import { getCoachTotalSales, getTotalSales } from '@apis/payment/payment.api';
import {
  URL_FETCH_TOTAL_COACH_SALES,
  URL_FETCH_TOTAL_SALES,
} from '@apis/payment/payment.url';
import { useQuery } from '@tanstack/react-query';

export const useGetTotalSalesQuery = () => {
  const { data } = useQuery({
    queryKey: [URL_FETCH_TOTAL_SALES],
    queryFn: async () => await getTotalSales(),
    select: (data) => data.data,
  });

  return { data };
};

export const useGetCoachTotalSalesQuery = () => {
  const { data } = useQuery({
    queryKey: [URL_FETCH_TOTAL_COACH_SALES],
    queryFn: async () => await getCoachTotalSales(),
    select: (data) => data.data,
  });

  return { data };
};
