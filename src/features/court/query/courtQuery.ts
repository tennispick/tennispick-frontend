import { getCourtList } from "@apis/court/court.api";
import { URL_FETCH_COURT_LIST } from "@apis/court/court.url";
import { useQuery } from "@tanstack/react-query";

const useGetCourtList = () =>{
  try {
    const { data } = useQuery({
      queryKey: [URL_FETCH_COURT_LIST],
      queryFn: async () => await getCourtList()
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
  useGetCourtList
}