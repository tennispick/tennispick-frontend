import { updateCustomerDetail } from '@apis/customer/customer.api';
import { URL_CUSTOMER_DETAIL } from '@apis/customer/customer.url';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUpdateCustomerDetailMutation = (customerId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [`${URL_CUSTOMER_DETAIL(customerId)}`],
    mutationFn: (params: FormData) => updateCustomerDetail(customerId, params),
    onSuccess: ({ data }) => {
      if (data.affectedRows > 0) {
        alert('회원님 정보가 수정되었어요.');
      } else {
        alert('회원님 정보 수정에 실패했어요.\n관리자에게 문의해주세요.');
      }
      queryClient.invalidateQueries({
        queryKey: [URL_CUSTOMER_DETAIL(customerId), { customerId }],
      });
    },
  });
};
