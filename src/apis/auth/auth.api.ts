import { axiosInstance } from '@lib/axios';
import { URL_AUTH_LOGIN } from './auth.url';
import { LoginPayload } from './auth.type';

export const login = async (params: LoginPayload) =>
  await axiosInstance.post(URL_AUTH_LOGIN, { ...params });
