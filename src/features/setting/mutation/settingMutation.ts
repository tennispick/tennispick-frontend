import { updateSettingActiveStatus } from '@apis/setting/setting.api';
import { URL_CHANGE_SETTING_ACTIVE_STATUS } from '@apis/setting/setting.url';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useSettingMutation = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationKey: [URL_CHANGE_SETTING_ACTIVE_STATUS],
    mutationFn: updateSettingActiveStatus,
    onSuccess: (res) => {
      const { data } = res;
      if (!data) {
        alert('다시 시도해주세요.');
        return;
      } else {
        if (data.affectedRows > 0) alert('설정값이 성공적으로 변경되었어요.');
        else
          alert('설정값 변경중에 문제가 생겼어요.\n관리자에게 문의해주세요.');
      }
    },
    onError: (error) => {
      alert('설정값 변경에 실패했어요.\n관리자에게 문의해주세요.');
      console.error(error);
    },
    onSettled: () =>
      queryClient.invalidateQueries([URL_CHANGE_SETTING_ACTIVE_STATUS]),
  });

  return {
    mutate,
    isLoading,
  };
};
export { useSettingMutation };
