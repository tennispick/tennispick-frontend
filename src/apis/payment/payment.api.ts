import {
  URL_COACH_MONTH_SETTLEMENT,
  URL_CREATE_PAYMENT,
  URL_CREATE_REFUND,
  URL_DELETE_REFUND,
  URL_FETCH_PAYMENT_REFUND_LIST,
  URL_FETCH_TOTAL_COACH_SALES,
  URL_FETCH_TOTAL_SALES,
} from './payment.url';
import {
  CustomerPaymentCreateApiPayload,
  CustomerPaymentRefundListApiPayload,
  CustomerPaymentRefundData,
  CustomerRefundCreateApiPayload,
  LessonTotalPaymentData,
  CoachTotalSalesData,
  CoachSettlementByDateData,
} from './payment.type';
import { Response } from '@/types/response';
import { axiosInstance } from '@lib/axios';

export const getPaymentRefundList = async (
  params: CustomerPaymentRefundListApiPayload,
): Promise<Response<CustomerPaymentRefundData[]>> => {
  return await axiosInstance.get(`${URL_FETCH_PAYMENT_REFUND_LIST}`, {
    params: {
      type: params.type,
      customerId: params.customerId,
    },
  });
};

export const getTotalSales = async (): Promise<
  Response<LessonTotalPaymentData[]>
> => await axiosInstance.get(`${URL_FETCH_TOTAL_SALES}`);

export const getCoachTotalSales = async (): Promise<
  Response<CoachTotalSalesData[]>
> => await axiosInstance.get(`${URL_FETCH_TOTAL_COACH_SALES}`);

export const getCoachMonthSettlement = async (
  coachId: string,
  date: string,
): Promise<
  Response<{
    sales: CoachSettlementByDateData[];
    settlement: CoachSettlementByDateData[];
  }>
> => await axiosInstance.get(`${URL_COACH_MONTH_SETTLEMENT}/${coachId}?date=${date}`);

export const createCustomerPayment = async (
  params: CustomerPaymentCreateApiPayload,
) => await axiosInstance.post(`${URL_CREATE_PAYMENT}`, params);

export const createCustomerRefund = async (
  params: CustomerRefundCreateApiPayload,
) => await axiosInstance.post(`${URL_CREATE_REFUND}`, params);

export const cancelCustomerRefund = async (id: number) =>
  await axiosInstance.delete(`${URL_DELETE_REFUND}`, {
    params: {
      id,
    },
  });
