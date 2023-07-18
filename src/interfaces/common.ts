import { FieldValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface ObjectProps<T> {
  [key: string]: T;
};

export interface UseFormProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: any;
}