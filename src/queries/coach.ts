import { axios } from '@utils/axios';
import { useQuery } from '@tanstack/react-query';

interface CoachProps {}

const getCoachFetch = async (): Promise<any> => await axios.get('/coach');

const getCoachQuery = (): any => {
	try {
		const { data } = useQuery({
			queryKey: ['coach'],
			queryFn: async () => await getCoachFetch(),
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
	getCoachFetch,
	getCoachQuery,
};
