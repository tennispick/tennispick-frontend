import { cn } from "@/shared/lib/utils";
import { TenInput } from "./TenInput";
import { forwardRef } from "react";
import { ControllerRenderProps } from "react-hook-form";

type PartialControllerRenderProps = Partial<ControllerRenderProps>;

interface Props extends PartialControllerRenderProps {
  className?: string;
  labelClassName?: string;
  checkedItem: string;
  group: Record<string, any>[];
}

export const TenToggleRadio = forwardRef<HTMLDivElement, Props>(({ className, labelClassName, checkedItem, group, ...props }, ref) => {
  const handleClick = (value: string) => {
    props?.onChange?.(value);
  }
  return (
    <div
      ref={ref}
      className={cn('inline-flex items-center bg-white-400 h-12 px-1.5 py-3 rounded-md', className)}
    >
      {group.map(({ label, value }) => {
        return (
          <div key={value}>
            <TenInput type="radio" className="hidden" />
            <label
              htmlFor={value}
              className={cn('py-[9px] px-3 text-sm cursor-pointer', checkedItem === value && 'bg-white-100 rounded-md', labelClassName)}
              onClick={() => handleClick(value)}
            >{label}</label>
          </div>
        )
      })}
    </div>
  )
})