import { useMutation } from "@tanstack/react-query";
import { ScheduleMutationDataPayload } from "../type/schedule.type";
import { createScheduleLesson } from "@apis/schedule/schedule.api";

const useScheduleMutation = () => {

  const { mutate, isLoading } = useMutation((data: ScheduleMutationDataPayload) => createScheduleLesson(data), {
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (error) => {
      alert('스케줄 생성에 실패하였습니다.');
      console.error(error);
    }
  });

  return{
    mutate,
    isLoading
  }
};

export {
  useScheduleMutation
}