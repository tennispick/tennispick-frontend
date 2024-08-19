import { InternalAxiosRequestConfig } from "axios";
import { getCookie, getCookies, hasCookie } from 'cookies-next';

export const RequestInterceptor = async (config: InternalAxiosRequestConfig) => {
  try {
    // console.log(config);
    // console.log('server config');

    const cookie = getCookie('userACT');

    const hasCookies = hasCookie('userACT');

    console.log("쿠키 값");
    console.log(cookie);
    const tt = getCookies();
    console.log(tt);
    console.log(hasCookies);

    // const contentType = config.headers['Content-Type'];
    // const accessToken = getCookie();
    // config.headers['Content-type'] = contentType ?? 'application/json';
    // config.headers['Authorization'] = `Bearer ${accessToken}`;

    // if (accessToken) {
    //   config.headers.Authorization = `Bearer ${accessToken}`; // 헤더 설정
    //   return config;
    // }
    // throw new Error('로그인이 필요합니다.');
    return config;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const RequestErrorInterceptor = () => {

};