import {
  createCustomerMemo,
  updateCustomerMemo,
} from 'src/이전 파일들/apis/customer/customer.api';
import { URL_CUSTOMER_MEMO } from 'src/이전 파일들/apis/customer/customer.url';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateMemoMutate = (
  customerId: string,
  handleCreateMemoClick: () => void,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [URL_CUSTOMER_MEMO, { customerId }],
    mutationFn: (params: FormData) => createCustomerMemo(params),
    onSuccess: ({ data }) => {
      if (data.affectedRows > 0) {
        alert('메모가 등록되었어요.');
      } else {
        alert('메모 등록에 실패했어요.\n관리자에게 문의해주세요.');
      }

      queryClient.invalidateQueries({
        queryKey: [URL_CUSTOMER_MEMO, { customerId }],
      });
      handleCreateMemoClick();
    },
  });
};

export const useUpdateMemoMutate = (
  id: string,
  customerId: string,
  handleHideDrawerClick: () => void,
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [`${URL_CUSTOMER_MEMO}/put`, { customerCommentId: id }],
    mutationFn: (params: FormData) => updateCustomerMemo(id, params),
    onSuccess: ({ data }) => {
      if (data.affectedRows > 0) {
        alert('메모가 수정되었어요.');

        // TODO SetQueryData
        queryClient.invalidateQueries({
          queryKey: [URL_CUSTOMER_MEMO, customerId],
        });
      } else {
        alert('메모 수정에 실패했어요.\n관리자에게 문의해주세요.');
      }
    },
    onSettled: () => handleHideDrawerClick(),
  });
};
