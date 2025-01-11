import { URL_AUTH_LOGIN } from './auth.url';
import { LoginPayload } from './auth.type';
import { axios } from '@/shared/lib/fetcher/axios';

export const login = async (params: LoginPayload) =>
  await axios.post(URL_AUTH_LOGIN, { ...params });
