import { AxiosResponse } from 'axios';

export type Response<T> = AxiosResponse<T>;

export type FSDResponse<T> = {
  data: T;
  status: number,
  message: string
};

export const createInitialData = <T>(
  initialResponseData: T,
): Pick<Response<T>, 'data'> => ({
  data: initialResponseData,
});
