import { AxiosResponse } from 'axios';

type Response<T> = {
  data: T;
} & AxiosResponse;

export type { Response };

// const createInitialData = <T>(initialResponseData: T): Pick<Response<T>, 'data'> => ({
//   data: initialResponseData,
// });
