import { updateCoachDetail } from '@apis/coach/coach.api';
import { URL_COACH, URL_COACH_DETAIL } from '@apis/coach/coach.url';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUpdateCoachDetailMutation = (coachId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['put', URL_COACH_DETAIL(coachId)],
    mutationFn: (params: FormData) => updateCoachDetail(coachId, params),
    onSuccess: ({ data }) => {
      if (data.affectedRows > 0) {
        alert('코치님 정보가 수정되었어요.');
      } else {
        alert('코치님 정보 수정에 실패했어요.\n관리자에게 문의해주세요.');
      }
      queryClient.invalidateQueries({
        queryKey: [URL_COACH, { coachId }],
      });
    },
  });
};
