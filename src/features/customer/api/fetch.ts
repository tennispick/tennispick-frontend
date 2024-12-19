import { URL_COACH } from '@/entities/coach/url';
import { FSDResponse } from '@/shared/lib/fetcher/response';
import { Coach } from '@/shared/types/coach';
import { axios } from '@/이전 파일들/utils/axios';

export const getCoachs = async (
  params?: Record<string, any>,
): Promise<FSDResponse<Coach[]>> => {
  const response = await axios.get(URL_COACH, { params: params });
  return response.data;
};
