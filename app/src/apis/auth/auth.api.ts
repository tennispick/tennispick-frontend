import { axios } from 'app/src/utils/axios';
import { URL_AUTH_LOGIN } from './auth.url';
import { LoginPayload } from './auth.type';

export const login = async (params: LoginPayload) =>
  await axios.post(URL_AUTH_LOGIN, { ...params });
