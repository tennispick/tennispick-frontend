import * as React from "react"

import { cn } from "src/lib/utils"

export interface InputProps extends Omit<React.ComponentProps<"input">, "size"> {
  size?: "xs" | "s" | "m" | "lg" | "xl"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size = "m", ...props }, ref) => {
    const sizeClasses = {
      xs: "h-6 px-2 py-1 text-xs",
      s: "h-8 px-2 py-1 text-sm",
      m: "h-10 px-3 py-2 text-base md:text-sm",
      lg: "h-12 px-4 py-3 text-base md:text-sm",
      xl: "h-14 px-5 py-4 text-xl"
    }

    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-md border border-neutral-200 bg-white ring-offset-white file:border-0 file:bg-transparent file:font-medium file:text-neutral-950 placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 focus:border-gray-300 focus:outline-none",
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
