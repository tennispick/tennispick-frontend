import {
  URL_CREATE_PAYMENT,
  URL_CREATE_REFUND,
  URL_FETCH_PAYMENT_REFUND_LIST,
} from './payment.url';
import { axios } from '@utils/axios';
import {
  CustomerPaymentCreateApiPayload,
  CustomerPaymentRefundListApiPayload,
  CustomerPaymentRefundData,
  CustomerRefundCreateApiPayload,
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

export const createCustomerPayment = async (
  params: CustomerPaymentCreateApiPayload,
) => await axios.post(`${URL_CREATE_PAYMENT}`, params);

export const createCustomerRefund = async (
  params: CustomerRefundCreateApiPayload,
) => await axios.post(`${URL_CREATE_REFUND}`, params);
