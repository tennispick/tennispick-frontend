import axios from './axios';
import { RequestInterceptor, RequestErrorInterceptor } from './interceptors.server';

axios.interceptors.request.use(RequestInterceptor, RequestErrorInterceptor);
// axios.interceptors.response.use(RequestInterceptor, RequestErrorInterceptor)

export default axios;