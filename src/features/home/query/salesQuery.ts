import { createInitialData } from '@/types/response';
import {
  getCoachMonthSettlement,
  getCoachTotalSales,
} from '@apis/payment/payment.api';
import {
  CoachSettlementByDateData,
  CoachTotalSalesData,
} from '@apis/payment/payment.type';
import {
  URL_COACH_MONTH_SETTLEMENT,
  URL_FETCH_TOTAL_COACH_SALES,
} from '@apis/payment/payment.url';
import { useQuery } from '@tanstack/react-query';

export const useGetCoachTotalSalesQuery = () => {
  return useQuery({
    queryKey: [URL_FETCH_TOTAL_COACH_SALES],
    queryFn: async () => await getCoachTotalSales(),
    select: (data) => data.data,
    initialData: createInitialData([] as CoachTotalSalesData[]),
  });
};

export const useCoachMonthSettlementQuery = (coachId: string, date: string) => {
  return useQuery({
    queryKey: [URL_COACH_MONTH_SETTLEMENT, { coachId, date }],
    queryFn: async () => await getCoachMonthSettlement(coachId, date),
    select: ({ data }: { data: { sales: any; settlement: any } }) => {
      const { sales, settlement } = data;

      const salesResult = sales.reduce(
        (acc: number, { timePrice }: CoachSettlementByDateData) =>
          acc + timePrice,
        0,
      );
      const settlementResult = settlement.reduce(
        (acc: number, { timePrice }: CoachSettlementByDateData) =>
          acc + timePrice,
        0,
      );

      return { sales: salesResult, settlement: settlementResult };
    },
    initialData: createInitialData(
      [] as unknown as {
        sales: CoachSettlementByDateData[];
        settlement: CoachSettlementByDateData[];
      },
    ),
  });
};
