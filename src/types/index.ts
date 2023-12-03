import { } from '@tanstack/react-query';

export type UseQueryType<T> = {
  data: T,
  isFetching: boolean;
  isLoading: boolean;
}