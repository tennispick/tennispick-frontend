import { ForwardedRef, PropsWithChildren, SelectHTMLAttributes, forwardRef } from "react"

interface Props extends PropsWithChildren {
  props?: SelectHTMLAttributes<HTMLSelectElement>;
  width?: string;
  height?: string;
  margin?: string;
}

const Select = forwardRef(({ ...props }: Props, ref?: ForwardedRef<HTMLSelectElement>) => {

  return (
    <select
      css={{
        width: props.width,
        height: props.height,
        margin: props.margin,
        ...VARIANT_STYLE,
      }}
    >
      {props.children}
    </select>
  )
});

const VARIANT_STYLE: object = {
  position: 'relative',
  height: '100%',
  padding: '2px 0 2px 10px',
  fontSize: '0.95rem',
  border: '1px solid var(--basic-grey3-color)',
  borderRadius: '8px',
  outline: 0,
}

export default Select;