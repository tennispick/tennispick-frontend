import { AxiosResponse } from 'axios';

export type Response<T> = AxiosResponse<T>;

export const createInitialData = <T>(
  initialResponseData: T,
): Pick<Response<T>, 'data'> => ({
  data: initialResponseData,
});
