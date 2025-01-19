import { cn } from "@/shared/lib/utils";
import { Input } from "@/shared/ui/components/input";
import { TenSpinner } from "@/shared/ui/TenSpinner";

interface Props {
  isSearched?: boolean;
  wrapperClassName?: string;
  className?: string;
  isLoading: boolean;
}

export const TenSearchInput = ({ isSearched, wrapperClassName, className, isLoading, ...props }: Props) => {
  return (
    <div className={cn("flex items-center h-10 border border-input rounded-md px-3", isSearched && "border-b-0 rounded-b-none")}>
      <Input
        wrapperClassName={cn("flex-1", wrapperClassName)}
        className={cn(className)}
        {...props}
      />
      <div className="relative w-4 h-4">
        {isLoading && <TenSpinner wrapperClassName="border-0" className="w-full h-full" />}
      </div>
    </div>
  )
};