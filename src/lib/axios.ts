import { getCookie } from '@lib/cookie';
import axios, { AxiosInstance } from 'axios';

const createInstance = (): AxiosInstance => {
    const instance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        timeout: 5000,
        headers: { 'Content-Type': 'application/json' },
    });

    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status === 404) {
                console.error('404 Page Not Found');
            }
            return Promise.reject(error);
        }
    );

    return instance;
}

const axiosInstance = createInstance();

const authAxiosInstance = createInstance();

authAxiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('userACT');

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

authAxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        alert('유효하지 않은 사용자입니다.');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export { axiosInstance, authAxiosInstance };
