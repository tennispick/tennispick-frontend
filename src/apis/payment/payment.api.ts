import {
  URL_COACH_MONTH_SALES,
  URL_CREATE_PAYMENT,
  URL_CREATE_REFUND,
  URL_DELETE_REFUND,
  URL_FETCH_PAYMENT_REFUND_LIST,
  URL_FETCH_TOTAL_COACH_SALES,
  URL_FETCH_TOTAL_SALES,
} from './payment.url';
import { axios } from '@utils/axios';
import {
  CustomerPaymentCreateApiPayload,
  CustomerPaymentRefundListApiPayload,
  CustomerPaymentRefundData,
  CustomerRefundCreateApiPayload,
  LessonTotalPaymentData,
  CoachTotalSalesData,
  CoachSalesByDateData,
} from './payment.type';
import { Response } from '@/types/response';

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

export const getCoachMonthSales = async (
  coachId: string,
): Promise<Response<CoachSalesByDateData[]>> =>
  await axios.get(`${URL_COACH_MONTH_SALES}/${coachId}`);

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
