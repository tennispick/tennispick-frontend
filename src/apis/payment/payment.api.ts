import {
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
} from './payment.type';
import { Response } from '@/types/response';

export const getPaymentRefundList = async (
  params: CustomerPaymentRefundListApiPayload,
): Promise<Response<CustomerPaymentRefundData>> => {
  try {
    const result = await axios.get(`${URL_FETCH_PAYMENT_REFUND_LIST}`, {
      params: {
        type: params.type,
        customerId: params.customerId,
      },
    });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTotalSales = async (): Promise<
  Response<LessonTotalPaymentData>
> => {
  try {
    const result = await axios.get(`${URL_FETCH_TOTAL_SALES}`);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCoachTotalSales = async (): Promise<
  Response<LessonTotalPaymentData>
> => {
  try {
    const result = await axios.get(`${URL_FETCH_TOTAL_COACH_SALES}`);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

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
