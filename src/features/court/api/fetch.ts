import { Court } from '@/entities/court/type';
import { URL_COURT } from '@/entities/court/url';
import { axios } from '@/shared/lib/fetcher/axios';
import { FSDResponse } from '@/shared/lib/fetcher/response';

export const getCourts = async (
  params?: Record<string, any>,
): Promise<FSDResponse<Court[]>> => {
  const response = await axios.get(URL_COURT, { params });
  return response.data;
};
