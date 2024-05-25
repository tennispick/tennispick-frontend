import { updateCustomerAttendance } from '@apis/customer/customer.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CustomerAttendanceQueryPayLoad } from '../type/customer.type';
import { URL_SCHEDULE_LESSON_BY_DATE } from '@apis/schedule/schedule.url';

export const useAttendanceMutate = (
  day: Date,
  onCloseModalHandler: () => void,
) => {
  const queryClient = useQueryClient();

  const year = day.getFullYear();
  const month = day.getMonth() + 1;
  const date = day.getDate();

  return useMutation({
    mutationKey: ['attendance'],
    mutationFn: (params: CustomerAttendanceQueryPayLoad) =>
      updateCustomerAttendance({
        ...params,
      }),
    onSuccess: ({ data }) => {
      if (data.affectedRows > 0) {
        queryClient.invalidateQueries({
          queryKey: [URL_SCHEDULE_LESSON_BY_DATE, { year, month, date }],
        });
        alert('출석이 완료되었습니다.');
      } else
        alert('출석 처리 중 에러가 발생했습니다.\n관리자에게 문의해주세요.');

      onCloseModalHandler();
    },
  });
};
