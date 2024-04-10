import { useQuery } from '@tanstack/react-query';
import { PaymentRefundListQueryPayload } from '../type/payment.type';
import { URL_FETCH_PAYMENT_REFUND_LIST } from '@apis/payment/payment.url';
import { getPaymentRefundList } from '@apis/payment/payment.api';

export const usePaymentListQuery = (params: PaymentRefundListQueryPayload) => {
  const { type, customerId } = params;
  const { data, isLoading } = useQuery({
    queryKey: [URL_FETCH_PAYMENT_REFUND_LIST, { type, customerId }],
    queryFn: async () =>
      await getPaymentRefundList({ type: type, customerId: customerId }),
    select: (data) => data.data,
    suspense: true,
  });

  return {
    data,
    isLoading,
  };
};
