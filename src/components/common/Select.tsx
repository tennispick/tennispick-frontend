import { ForwardedRef, PropsWithChildren, SelectHTMLAttributes, forwardRef } from "react"

interface Props extends PropsWithChildren {
  props?: SelectHTMLAttributes<HTMLSelectElement>;
}

const Select = forwardRef((props: Props, ref?: ForwardedRef<HTMLSelectElement>) => {

  console.log(props);

  return (
    <select
      css={{
        ...VARIANT_STYLE
      }}
    >
      {props.children}
    </select>
  )
});

const VARIANT_STYLE = {

}

export default Select;