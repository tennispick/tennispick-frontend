import { cn } from "@/shared/lib/utils";
import { TenInput } from "./TenInput";

interface Props {
  className?: string;
  labelClassName?: string;
  checkedItem: string;
  group: Record<string, any>[];
}

export const TenToggleRadio = ({ className, labelClassName, checkedItem, group }: Props) => {
  return (
    <div className={cn('inline-flex items-center bg-white-400 h-12 px-1.5 py-3 rounded-md', className)}>
      {group.map(({ label, value }) => {
        return (
          <div key={value}>
            <TenInput type="radio" className="hidden" />
            <label className={cn('py-[9px] px-3 text-sm cursor-pointer', checkedItem === value && 'bg-white-100 rounded-md', labelClassName)}>{label}</label>
          </div>
        )
      })}
    </div>
  )
}