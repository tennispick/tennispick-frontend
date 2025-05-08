import { ComponentProps, ReactNode } from "react";
import { cn } from "@/shared/lib/utils";
import { Input } from '@/shared/ui/components/input';
import { TenSearchInput } from "./TenSearchInput";
import { FieldError } from "react-hook-form";
import ErrorIcon from '@/public/icons/error_important.svg';

interface Props<T> extends ComponentProps<typeof Input> {
  placeholder: string;
  isLoading: boolean;
  data?: T[];
  children: ReactNode;
  errors?: FieldError;
}

export const TenAutoCompleteInput = <T,>({ data, isLoading, children, errors, ...props }: Props<T>) => {
  const isSearched = data && data.length > 0;
  return (
    <div className="relative">
      <TenSearchInput
        isLoading={isLoading}
        isSearched={isSearched}
        className="w-full"
        {...props}
      />
      {isSearched && (
        <section
          className={cn("absolute left-0 w-full min-h-10 z-10 border border-white-600 rounded-b-md bg-white-100")}
        >
          {children}
        </section>
      )}
      {errors?.message && (
        <div className="relative flex items-center gap-1 my-2 text-red-500">
          <ErrorIcon />
          <span>{errors.message}</span>
        </div>
      )}
    </div>
  )
}