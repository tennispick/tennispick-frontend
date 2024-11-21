import {
  URL_COACH_MONTH_SETTLEMENT,
  URL_CREATE_PAYMENT,
  URL_CREATE_REFUND,
  URL_DELETE_REFUND,
  URL_FETCH_PAYMENT_REFUND_LIST,
  URL_FETCH_TOTAL_COACH_SALES,
  URL_FETCH_TOTAL_SALES,
} from './payment.url';
import { axios } from 'app/src/utils/axios';
import {
  CustomerPaymentCreateApiPayload,
  CustomerPaymentRefundListApiPayload,
  CustomerPaymentRefundData,
  CustomerRefundCreateApiPayload,
  LessonTotalPaymentData,
  CoachTotalSalesData,
  CoachSettlementByDateData,
} from './payment.type';
import { Response } from 'app/src/types/response';

export const getPaymentRefundList = async (
  params: CustomerPaymentRefundListApiPayload,
): Promise<Response<CustomerPaymentRefundData[]>> => {
  return await axios.get(`${URL_FETCH_PAYMENT_REFUND_LIST}`, {
    params: {
      type: params.type,
      customerId: params.customerId,
    },
  });
};

export const getTotalSales = async (): Promise<
  Response<LessonTotalPaymentData[]>
> => await axios.get(`${URL_FETCH_TOTAL_SALES}`);

export const getCoachTotalSales = async (): Promise<
  Response<CoachTotalSalesData[]>
> => await axios.get(`${URL_FETCH_TOTAL_COACH_SALES}`);

export const getCoachMonthSettlement = async (
  coachId: string,
  date: string,
): Promise<
  Response<{
    sales: CoachSettlementByDateData[];
    settlement: CoachSettlementByDateData[];
  }>
> => await axios.get(`${URL_COACH_MONTH_SETTLEMENT}/${coachId}?date=${date}`);

export const createCustomerPayment = async (
  params: CustomerPaymentCreateApiPayload,
) => await axios.post(`${URL_CREATE_PAYMENT}`, params);

export const createCustomerRefund = async (
  params: CustomerRefundCreateApiPayload,
) => await axios.post(`${URL_CREATE_REFUND}`, params);

export const cancelCustomerRefund = async (id: number) =>
  await axios.delete(`${URL_DELETE_REFUND}`, {
    params: {
      id,
    },
  });
