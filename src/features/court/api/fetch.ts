import { Court } from "@/entities/court/type";
import { URL_COURT } from "@/entities/court/url";
import { FSDResponse } from "@/shared/lib/axios/response";
import { axios } from "@/이전 파일들/utils/axios";

export const getCourts = async (params?: Record<string, any>): Promise<FSDResponse<Court[]>> => {
  const response = await axios.get(URL_COURT, { params });
  return response.data;
}
