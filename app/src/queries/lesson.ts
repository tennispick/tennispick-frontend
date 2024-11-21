import { axios } from 'app/src/utils/axios';
import { useQuery } from '@tanstack/react-query';
import { URL_FETCH_LESSON_LIST } from 'app/src/apis/lesson/lesson.url';

type LessonPayload = {
  id?: string;
};

const getLessonFetch = async ({ id }: LessonPayload): Promise<any> =>
  await axios.get(`/lesson?id=${id}`);
const getLessonQuery = ({ id }: LessonPayload): any => {
  try {
    const { data } = useQuery({
      queryKey: [URL_FETCH_LESSON_LIST, id],
      queryFn: async () => await getLessonFetch({ id }),
      select: (data) => data.data,
    });
    return {
      data: data,
    };
  } catch (error) {
    console.error(error);
    return { data: error };
  }
};

export { getLessonFetch, getLessonQuery };
