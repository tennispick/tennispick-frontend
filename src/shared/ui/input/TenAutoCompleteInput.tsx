import { ComponentProps } from "react";
import { TenInput } from "./TenInput"
import { cn } from "@/shared/lib/utils";
import { Customer } from "@/shared/types";

interface Props extends ComponentProps<typeof TenInput> {
  placeholder: string;
  isLoading: boolean;
  data: Customer[];
}

export const TenAutoCompleteInput = ({ isLoading, data, ...props }: Props) => {
  return (
    <div className="relative">
      <TenInput {...props} />
      <section
        className={cn("absolute left-0 w-full min-h-10 mt-2 border border-white-600 rounded-md z-10 px-3 py-2")}>자동 완성
      </section>
    </div>
  )
}