import { createInitialData } from '@/types/response';
import {
  getCoachDetail,
  getCoachLessonList,
  getCoachList,
} from '@apis/coach/coach.api';
import { CoachDetailData, CoachListData } from '@apis/coach/coach.type';
import { URL_COACH } from '@apis/coach/coach.url';
import { useQuery } from '@tanstack/react-query';

export const useGetCoachListQuery = ({
  enabled = true,
}: {
  enabled?: boolean;
}): {
  data: CoachListData[] | undefined;
  isLoading?: boolean;
  error: unknown;
} => {
  return useQuery({
    queryKey: [URL_COACH],
    queryFn: async () => await getCoachList(),
    select: (data) => data?.data,
    enabled: enabled,
  });
};

export const useGetCoachLessonListQuery = () => {
  return useQuery({
    queryKey: [URL_COACH],
    queryFn: async () => await getCoachLessonList(),
    select: (data) => data.data,
  });
};

export const useCoachDetailQuery = (coachId: string) => {
  return useQuery({
    queryKey: [URL_COACH, { coachId }],
    queryFn: async () => await getCoachDetail(coachId),
    select: (data) => data.data,
    initialData: createInitialData({} as CoachDetailData),
  });
};
