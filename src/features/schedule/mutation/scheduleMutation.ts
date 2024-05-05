import { useMutation } from '@tanstack/react-query';
import { createScheduleLesson } from '@apis/schedule/schedule.api';
import { ResponseType } from 'src/types';
import { isEmptyObj } from '@utils/object';

const useScheduleMutation = () => {
  const { mutate, isLoading } = useMutation(
    (data: any) => createScheduleLesson(data),
    {
      onSuccess: (res) => {
        if (isEmptyObj(res)) {
          alert(
            '등록 가능한 수강권의 횟수가 없거나\n스케줄이 중복되었어요.\n관리자에게 문의해주세요.',
          );
        } else {
          const responseLength = res.filter(
            ({ code }: ResponseType) => code === 201,
          ).length;

          if (res.length === responseLength)
            alert('스케줄이 정상적으로 등록되었어요.');
          else{
            alert(
              '스케줄 생성이 일부만 등록되었어요.\n관리자에게 문의해주세요.',
            );
            window.location.reload();
          }
        }
      },
      onError: (error) => {
        alert('스케줄 생성에 실패했어요.\n관리자에게 문의해주세요.');
        console.error(error);
      },
    },
  );

  return {
    mutate,
    isLoading,
  };
};

export { useScheduleMutation };
