import { } from '@tanstack/react-query';
import { ChangeEventHandler } from 'react';

type UseQueryType<T> = {
  data: T,
  isFetching: boolean;
  isLoading: boolean;
}

type UseInputType<T> = ChangeEventHandler<T>;

export type {
  UseQueryType,
  UseInputType
}