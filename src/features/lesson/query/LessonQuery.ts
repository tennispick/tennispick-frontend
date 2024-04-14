import {
  URL_FETCH_LESSON_LIST,
  URL_FETCH_LESSON_DETAIL,
} from '@apis/lesson/lesson.url';
import { getLessonList, getLessonDetail } from '@apis/lesson/lesson.api';
import {
  LessonDetailData,
  LessonDetailQueryPayload,
  LessonListQueryPayload,
} from '../type/lesson.type';
import { useQuery } from '@tanstack/react-query';
import { Response } from '@/types/response';

const useLessonListQuery = (params: LessonListQueryPayload) => {
  const { type, isSuspense = false } = params;
  const { data, isLoading } = useQuery({
    queryKey: [URL_FETCH_LESSON_LIST, { type }],
    queryFn: async () => await getLessonList({ type: type }),
    select: (data) => data.data,
    suspense: isSuspense,
  });

  return {
    data: data,
    isLoading,
  };
};

const useLessonDetailQuery = (params: LessonDetailQueryPayload) => {
  const { id } = params;
  const { data, isLoading } = useQuery<Response<LessonDetailData>>({
    queryKey: [URL_FETCH_LESSON_DETAIL, id],
    queryFn: async () => await getLessonDetail({ id: id }),
  });

  return {
    data,
    isLoading,
  };
};

export { useLessonListQuery, useLessonDetailQuery };
