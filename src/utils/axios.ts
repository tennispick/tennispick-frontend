import { getCookie } from "@lib/cookie";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000
})

/* Axios Request Interceptor */
instance.interceptors.request.use(
  (config) => {

    const accessToken = getCookie();
    config.headers['Content-type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
)

/* Axios Response Interceptor */
instance.interceptors.response.use(
  (response) => {
    if(response.status === 404) console.log('Page Not Fount 404 Error');
    return response;
  },
  async(error) => {
    console.error(error);
    if(error.response.status === 401){
      error.config.headers = {
        'Content-Type': 'application/json',
      };
      alert('유효하지 않은 사용자입니다.');
      return error.response;
    }
    return Promise.reject(error);
  }
)

export { instance as axios };