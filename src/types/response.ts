import { AxiosResponse } from 'axios';

type Response<T> = {
  data: T;
} & AxiosResponse;

export type { Response };
