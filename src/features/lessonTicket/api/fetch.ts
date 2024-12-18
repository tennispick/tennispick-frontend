import { LessonTicket } from "@/entities/lessonTicket/type";
import { URL_LESSON_TICKET } from "@/entities/lessonTicket/url"
import { FSDResponse } from "@/shared/lib/axios/response";
import { axios } from "@/이전 파일들/utils/axios"

// TODO URL Search params Type
export const getLessonTickets = async (params?: Record<string, any>): Promise<FSDResponse<LessonTicket[]>> => {
  const response = await axios.get(URL_LESSON_TICKET, { params });
  return response.data;
};