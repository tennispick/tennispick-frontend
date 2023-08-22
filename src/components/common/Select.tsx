import { ForwardedRef, PropsWithChildren, SelectHTMLAttributes, forwardRef, ReactElement, ReactNode } from "react"

interface Props extends SelectHTMLAttributes<HTMLSelectElement>{
  props?: SelectHTMLAttributes<HTMLSelectElement>;
  width?: string;
  height?: string;
  margin?: string;
  children?: ReactNode;
}

const Select = forwardRef(({ ...props }: Props, ref?: ForwardedRef<HTMLSelectElement>): ReactElement<SelectHTMLAttributes<HTMLSelectElement>> => {

  return (
    <select
      css={{
        width: props.width,
        height: props.height,
        margin: props.margin,
        ...VARIANT_STYLE,
      }}
      {...props}
    >
      {props.children}
    </select>
  )
});

const VARIANT_STYLE: object = {
  position: 'relative',
  height: '100%',
  lineHeight: '34px',
  padding: '2px 0 2px 10px',
  fontSize: '0.95rem',
  border: '1px solid var(--basic-grey3-color)',
  borderRadius: '8px',
  outline: 0,
}

export default Select;