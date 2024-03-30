import { axios } from '@utils/axios';
import {
  LessonListApiPayload,
  LessonDetailApiPayload,
  LessonCreateApiPayload,
} from './lesson.type';
import {
  URL_FETCH_LESSON_LIST,
  URL_FETCH_LESSON_DETAIL,
  URL_DELETE_LESSON,
  URL_CREATE_LESSON,
} from './lesson.url';
import { Response } from '@/types/response';
import { LessonDetailData } from '@features/lesson/type/lesson.type';

const getLessonList = async (params: LessonListApiPayload) =>
  await axios.get(`${URL_FETCH_LESSON_LIST}/${params.type}`);

const getLessonDetail = async (
  params: LessonDetailApiPayload,
): Promise<Response<LessonDetailData>> => {
  try {
    const result = await axios.get(`${URL_FETCH_LESSON_DETAIL}/${params.id}`);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createLesson = async (params: LessonCreateApiPayload) =>
  await axios.post(`${URL_CREATE_LESSON}`, params);

const deleteLesson = async (id: string) => {
  try {
    const { status, data } = await axios.delete(`${URL_DELETE_LESSON}/${id}`);
    if (status === 200 && data.affectedRows > 0)
      alert('레슨권이 삭제되었어요.');
    else alert('레슨권 삭제에 실패했어요.\n관리자에게 문의해주세요.');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getLessonList, getLessonDetail, createLesson, deleteLesson };
