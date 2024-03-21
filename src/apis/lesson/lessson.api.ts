import { axios } from '@utils/axios';
import { LessonListApiPayload } from './lesson.type';
import { URL_FETCH_LESSON_LIST } from './lesson.url';

const getLessonList = async (params: LessonListApiPayload) => await axios.get(`${URL_FETCH_LESSON_LIST}/${params.type}`);

export {
  getLessonList
}