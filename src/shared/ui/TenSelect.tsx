import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/components/select"
import { cn } from "@/shared/lib/utils"
import { ForwardedRef, HTMLAttributes, forwardRef } from "react"
import { ControllerRenderProps, FieldError } from "react-hook-form"
import ErrorIcon from '@/public/icons/error_important.svg';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, keyof ControllerRenderProps>, ControllerRenderProps {
  placeholder: string
  data?: {
    label: string
    value: string
  }[]
  defaultValue?: string
  disabled?: boolean
  errors?: FieldError
}

// TODO Ref
export const TenSelect = forwardRef<HTMLDivElement, Props>(({ className, placeholder, data = [], defaultValue, disabled, value, onChange, errors, ...props }, ref: ForwardedRef<HTMLDivElement>) => {

  return (
    <>
      <Select
        onValueChange={onChange}
        defaultValue={defaultValue ?? value}
        disabled={disabled}
      >
        <SelectTrigger className={cn("w-[180px]", className)}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        {data.length > 0 && (
          <SelectContent className="max-h-[200px] overflow-auto" {...props}>
            <SelectGroup>
              {data.map((item) => (
                <SelectItem key={item.value} value={`${item.value}`}>{item.label}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        )}
      </Select>
      {errors?.message && (
        <div className="relative flex items-center gap-1 my-2 text-red-500">
          <ErrorIcon />
          <span>{errors.message}</span>
        </div>
      )}
    </>
  )
})