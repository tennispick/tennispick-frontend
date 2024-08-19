import { getCookie } from '@lib/cookie';
import { InternalAxiosRequestConfig } from 'axios';

export const RequestInterceptor = async (
  config: InternalAxiosRequestConfig,
) => {
  try {
    const contentType = config.headers['Content-Type'];
    const accessToken = getCookie('userACT');
    config.headers['Content-type'] = contentType ?? 'application/json';
    config.headers['Authorization'] = `Bearer ${accessToken}`;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`; // 헤더 설정
      return config;
    }
    throw new Error('로그인이 필요합니다.');
  } catch (error) {
    return Promise.reject(error);
  }
};

export const RequestErrorInterceptor = () => {};
