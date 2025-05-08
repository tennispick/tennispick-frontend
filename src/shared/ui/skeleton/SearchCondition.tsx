import { cn } from "@/shared/lib/utils";
import { TenSkeleton } from "@/shared/ui";

interface Props {
  className?: string;
  rowHeaderClassName?: string;
  rowDataClassName?: string;
}

export const SearchConditionSkeleton = ({ className, rowHeaderClassName, rowDataClassName }: Props) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <TenSkeleton className={cn("h-8", rowHeaderClassName)} />
      <TenSkeleton className={cn("h-8", rowDataClassName)} />
    </div>
  )
};