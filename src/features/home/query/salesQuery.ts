import { createInitialData } from '@/types/response';
import { getCoachTotalSales, getTotalSales } from '@apis/payment/payment.api';
import {
  CoachTotalSalesData,
  LessonTotalPaymentData,
} from '@apis/payment/payment.type';
import {
  URL_FETCH_TOTAL_COACH_SALES,
  URL_FETCH_TOTAL_SALES,
} from '@apis/payment/payment.url';
import { useQuery } from '@tanstack/react-query';

export const useGetTotalSalesQuery = () => {
  return useQuery({
    queryKey: [URL_FETCH_TOTAL_SALES],
    queryFn: async () => await getTotalSales(),
    select: (data) => data.data,
    initialData: createInitialData([] as LessonTotalPaymentData[]),
  });
};

export const useGetCoachTotalSalesQuery = () => {
  return useQuery({
    queryKey: [URL_FETCH_TOTAL_COACH_SALES],
    queryFn: async () => await getCoachTotalSales(),
    select: (data) => data.data,
    initialData: createInitialData([] as CoachTotalSalesData[]),
  });
};
