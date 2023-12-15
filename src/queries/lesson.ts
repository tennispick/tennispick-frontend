import { axios } from '@utils/axios';
import { useQuery } from '@tanstack/react-query';

interface LessonProps {}

const getLessonFetch = async (): Promise<any> => await axios.get('/lesson');

const getLessonQuery = (): any => {
	try {
		const { data } = useQuery({
			queryKey: ['lesson'],
			queryFn: async () => await getLessonFetch(),
		});
		return {
			data: data,
		};
	} catch (error) {
		console.error(error);
		return { data: error };
	}
};

export {
	getLessonFetch,
	getLessonQuery,
};
