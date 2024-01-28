import {} from '@tanstack/react-query';
import { ChangeEventHandler } from 'react';

type UseQueryType<T> = {
  data: T;
  isFetching: boolean;
  isLoading: boolean;
};

type MutationType = {
  affectedRows: number;
  changedRows: number;
  fieldCount: number;
  info: number;
  insertId: number;
  serverStatus: number;
  warningStatus: number;
};

type UseInputType<T> = ChangeEventHandler<T>;

type ObjectType<T> = { [key: string]: T };

export type { UseQueryType, MutationType, UseInputType, ObjectType };
