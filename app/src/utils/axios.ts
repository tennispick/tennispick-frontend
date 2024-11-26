import { getCookie } from 'app/src/shared/lib/cookie';
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
});

/* Axios Request Interceptor */
instance.interceptors.request.use(
  async (config) => {
    const contentType = config.headers['Content-Type'];
    const accessToken = getCookie('userACT');

    config.headers['Content-type'] = contentType ?? 'application/json';
    if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    // console.error(error);
    return Promise.reject(error);
  },
);

/* Axios Response Interceptor */
instance.interceptors.response.use(
  (response) => {
    if (response.status === 404) console.log('Page Not Fount 404 Error');
    return response;
  },
  async (error) => {
    if (error?.response?.status === 401) {
      error.config.headers = {
        'Content-Type': 'application/json',
      };
      if (typeof window !== 'undefined') {
        window.alert('유효하지 않은 사용자입니다.');
        window.location.href = '/login';
      }
      return error.response;
    }
    // console.error(error);
    return Promise.reject(error);
  },
);

export { instance as axios };
