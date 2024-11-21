import {
  updatePaymentSetting,
  updateSettingActiveStatus,
} from 'app/src/apis/setting/setting.api';
import {
  URL_CHANGE_SETTING_ACTIVE_STATUS,
  URL_PAYMENT_SETTING,
} from 'app/src/apis/setting/setting.url';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PaymentFormSchema } from '../component/payment/Payment';

export const useSettingMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [URL_CHANGE_SETTING_ACTIVE_STATUS],
    mutationFn: updateSettingActiveStatus,
    onError: (error) => {
      alert('설정값 변경에 실패했어요.\n관리자에게 문의해주세요.');
      console.error(error);
    },
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: [URL_CHANGE_SETTING_ACTIVE_STATUS],
      }),
  });
};

export const useUpdatePaymentSettingMutation = () => {
  return useMutation({
    mutationKey: [URL_PAYMENT_SETTING],
    mutationFn: (params: PaymentFormSchema) => updatePaymentSetting(params),
    onSuccess: ({ data }) => {
      if (data.affectedRows > 0) {
        alert('센터 정산설정값이 정상적으로 변경되었어요.');
        window.location.reload();
      } else
        alert(
          '센터 정산설정값 변경중에 문제가 생겼어요.\n관리자에게 문의해주세요.',
        );
    },
  });
};
