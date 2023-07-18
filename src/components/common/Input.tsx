import { Children, ForwardedRef, cloneElement, forwardRef, InputHTMLAttributes, ReactElement } from "react";

interface InputProps {
  id?: string;
  designType?: 'default' | 'labelBox';
  label?: string;
  children: ReactElement | never[];
}

const Input = ({
  id,
  designType = 'default',
  label,
  children,
  ...props
}: InputProps): ReactElement => {

  // TODO Text Length

  const child = Children.only(children);

  return (
    <div
      css={{
        position: "relative",
        ...CONTAINER_VARIANT_STYLE[designType]
      }}
      {...props}
    >
      {
        label &&
        <label
          htmlFor={id}
          css={{
            ...LABEL_VARIANT_STYLE[designType]
          }}
        >{label}</label>
      }
      {cloneElement(child, {
        id,
        ...child.props,
        css: {
          ...INPUT_TEXTFIELD_VARIANT_STYLE[designType]
        }
      })}
    </div>
  )
};

Input.TextField = forwardRef((props: any, ref: ForwardedRef<HTMLInputElement>): ReactElement<InputHTMLAttributes<HTMLInputElement>> => {

  return (
    <input
      type={props.type ? props.type : "text"}
      ref={ref}
      {...props}
    />
  )
})

const CONTAINER_VARIANT_STYLE: any = {
  default: {

  },
  labelBox: {
    margin: '0 auto 24px auto',
    border: '1px solid var(--basic-grey-color)',
    borderRadius: '4px',
    padding: '10px 16px 6px 16px'
  }
};

const LABEL_VARIANT_STYLE: any = {
  default: {

  },
  labelBox: {
    display: 'block',
    position: 'absolute',
    top: '-10px',
    left: '14px',
    padding: '0 12px',
    fontWeight: '500',
    color: 'var(--business-color)',
    backgroundColor: 'var(--basic-white-color)',
    zIndex: '2'
  }
}

const INPUT_TEXTFIELD_VARIANT_STYLE: any = {
  default: {

  },
  labelBox: {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: '0 0 0 10px',
    fontSize: '0.9rem',
    border: 0,
    outline: 0,
    zIndex: '1'
  }
}

export default Input;