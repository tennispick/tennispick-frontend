import { useMutation } from '@tanstack/react-query';
import {
  createChangeScheduleLesson,
  createScheduleLesson,
} from '@apis/schedule/schedule.api';
import { ResponseType } from 'src/types';
import { isEmptyObj } from '@utils/object';

export const useScheduleMutation = () => {
  return useMutation({
    mutationFn: (data: any) => createScheduleLesson(data),
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
        else
          alert('스케줄 생성이 일부만 등록되었어요.\n관리자에게 문의해주세요.');
        window.location.reload();
      }
    },
    onError: (error) => {
      alert('스케줄 생성에 실패했어요.\n관리자에게 문의해주세요.');
      console.error(error);
    },
  });
};

export const useScheduleChangeMutation = () => {
  return useMutation({
    mutationFn: (data: any) => createChangeScheduleLesson(data),
    onSuccess: (res: any) => {
      if (res.affectedRows > 0) alert('스케줄이 변경되었어요.');
      else alert('스케줄 변경에 실패했어요.\n관리자에게 문의해주세요.');
      window.location.reload();
    },
    onError: (error: any) => {
      alert('스케줄 변경에 실패했어요.\n관리자에게 문의해주세요.');
      console.error(error);
    },
  });
};
