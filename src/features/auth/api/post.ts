import { LoginPayload } from "@/entities/auth/type";
import { URL_LOGIN } from "@/entities/auth/url";
import { axios } from "@/shared/lib/fetcher/axios";
import { LoginResponse } from "@/features/auth/type/login.type";
import { Response } from "@/shared/lib/fetcher/response";

export const login = async (params: LoginPayload): Promise<Response<LoginResponse>> => await axios.post(URL_LOGIN, params)