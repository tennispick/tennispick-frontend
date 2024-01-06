import { getCoachList } from "@apis/coach/coach.api";
import { URL_FETCH_COACH_LIST } from "@apis/coach/coach.url";
import { useQuery } from "@tanstack/react-query";

const useGetCoachList = () =>{
  try {
    const { data } = useQuery({
      queryKey: [URL_FETCH_COACH_LIST],
      queryFn: async () => await getCoachList()
    })
		return {
			data,
		};
	} catch (error) {
		console.error(error);
		return { data: error };
	}
};

export {
  useGetCoachList
}