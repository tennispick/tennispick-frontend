import {
  ChangeEventHandler,
  Dispatch,
  SetStateAction as StateAction,
} from 'react';

type UseQueryType<T> = {
  data: T;
  isFetching: boolean;
  isLoading: boolean;
};

type ResponseType = {
  code: number;
  message: string;
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

type SetStateAction<T> = Dispatch<StateAction<T>>;

type UseInputType<T> = ChangeEventHandler<T>;

type ObjectType<T> = { [key: string]: T };

export type {
  UseQueryType,
  ResponseType,
  MutationType,
  SetStateAction,
  UseInputType,
  ObjectType,
};
