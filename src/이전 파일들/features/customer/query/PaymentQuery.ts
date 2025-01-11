import { useQuery } from '@tanstack/react-query';
import { PaymentRefundListQueryPayload } from '../type/payment.type';
import { URL_FETCH_PAYMENT_REFUND_LIST } from 'src/이전 파일들/apis/payment/payment.url';
import { getPaymentRefundList } from 'src/이전 파일들/apis/payment/payment.api';
import { createInitialData } from 'src/이전 파일들/types/response';
import { CustomerPaymentRefundData } from 'src/이전 파일들/apis/payment/payment.type';

export const usePaymentListQuery = (params: PaymentRefundListQueryPayload) => {
  const { type, customerId } = params;
  return useQuery({
    queryKey: [URL_FETCH_PAYMENT_REFUND_LIST, { type, customerId }],
    queryFn: async () =>
      await getPaymentRefundList({ type: type, customerId: customerId }),
    select: (data) => data.data,
    initialData: createInitialData([] as CustomerPaymentRefundData[]),
  });
};
