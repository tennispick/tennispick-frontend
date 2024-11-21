import {
  URL_FETCH_LESSON_LIST,
  URL_FETCH_LESSON_DETAIL,
} from 'app/src/apis/lesson/lesson.url';
import { getLessonList, getLessonDetail } from 'app/src/apis/lesson/lesson.api';
import {
  LessonDetailQueryPayload,
  LessonListQueryData,
  LessonListQueryPayload,
} from '../type/lesson.type';
import { useQuery } from '@tanstack/react-query';
import { createInitialData } from 'app/src/types/response';

const useLessonListQuery = (params: LessonListQueryPayload) => {
  const { type, isInitialData = true } = params;
  return useQuery({
    queryKey: [URL_FETCH_LESSON_LIST, { type }],
    queryFn: async () => await getLessonList({ type: type }),
    select: (data) => data?.data,
    initialData: isInitialData
      ? createInitialData([] as LessonListQueryData[])
      : undefined,
  });
};

const useLessonDetailQuery = (params: LessonDetailQueryPayload) => {
  const { id } = params;
  return useQuery({
    queryKey: [URL_FETCH_LESSON_DETAIL, { id }],
    queryFn: async () => await getLessonDetail({ id: id }),
    select: (data) => data?.data,
  });
};

export { useLessonListQuery, useLessonDetailQuery };
