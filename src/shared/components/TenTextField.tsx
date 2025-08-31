import { Input, InputProps } from "@components/ui/input";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: InputProps["size"]
}

export const TenTextField = forwardRef<HTMLInputElement, Props>(
  ({ size = "m", ...rest }, ref: ForwardedRef<HTMLInputElement>) => {
    return <Input size={size} ref={ref} {...rest} />
  }
)

TenTextField.displayName = "TenTextField";