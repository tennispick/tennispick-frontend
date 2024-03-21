import { URL_FETCH_LESSON_LIST } from '@apis/lesson/lesson.url';
import { getLessonList } from '@apis/lesson/lesson.api';
import {
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

export { useLessonListQuery };
