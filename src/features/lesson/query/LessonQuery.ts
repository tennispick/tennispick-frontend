import {
  URL_FETCH_LESSON_LIST,
  URL_FETCH_LESSON_DETAIL,
} from '@apis/lesson/lesson.url';
import { getLessonList, getLessonDetail } from '@apis/lesson/lesson.api';
import {
  LessonDetailData,
  LessonDetailQueryPayload,
  LessonListQueryData,
  LessonListQueryPayload,
} from '../type/lesson.type';
import { useQuery } from '@tanstack/react-query';
import { Response } from '@/types/response';

const useLessonListQuery = (params: LessonListQueryPayload) => {
  try {
    const { type } = params;
    const { data, isLoading } = useQuery<Response<LessonListQueryData>>({
      queryKey: [URL_FETCH_LESSON_LIST, type],
      queryFn: async () => await getLessonList({ type: type }),
    });

    return {
      data: data?.data,
      isLoading,
    };
  } catch (error) {
    console.error(error);
    return { data: error };
  }
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
