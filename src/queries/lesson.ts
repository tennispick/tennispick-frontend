import { axios } from '@utils/axios';
import { useQuery } from '@tanstack/react-query';

type LessonPayload = {
  id: string;
};

const getLessonFetch = async ({ id }: LessonPayload): Promise<any> => await axios.get(`/lesson?id=${id}`);
const getLessonQuery = ({ id }: LessonPayload): any => {
  try {
    const { data } = useQuery({
      queryKey: ['lesson', id],
      queryFn: async () => await getLessonFetch({ id }),
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
