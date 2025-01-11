import { cn } from "@/shared/lib/utils";
import { TenInput } from "@/shared/ui";
import { ComponentProps, ReactNode } from "react";

interface Props extends ComponentProps<typeof TenInput> {
  className?: string;
  label: string;
  children?: ReactNode;
  note?: ReactNode;
}

export const Field = ({ className, label, note, children, ...props }: Props) => {
  return (
    <div className={cn('py-3', className)}>
      <div className="mb-2">{label}</div>
      {children ? children : <TenInput {...props} />}
      {note}
    </div>
  )
};
