import { URL_COACH } from '@/entities/coach/url';
import { axios } from '@/shared/lib/fetcher/axios';
import { FSDResponse } from '@/shared/lib/fetcher/response';
import { Coach } from '@/shared/types/coach';

export const getCoachs = async (
  params?: Record<string, any>,
): Promise<FSDResponse<Coach[]>> => {
  const response = await axios.get(URL_COACH, { params: params });
  return response.data;
};
