import {
  ForwardedRef,
  SelectHTMLAttributes,
  forwardRef,
  ReactElement,
  ReactNode,
} from 'react';
import { css } from 'styled-system/css';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  props?: SelectHTMLAttributes<HTMLSelectElement>;
  width?: string;
  height?: string;
  margin?: string;
  children?: ReactNode;
}

const Select = forwardRef(
  (
    { ...props }: Props,
    ref?: ForwardedRef<HTMLSelectElement>,
  ): ReactElement<SelectHTMLAttributes<HTMLSelectElement>> => {
    return (
      <select
        ref={ref}
        className={css({
          width: props.width,
          height: props.height,
          margin: props.margin,
          ...VARIANT_STYLE,
        })}
        {...props}
      >
        {props.children}
      </select>
    );
  },
);

Select.displayName = 'Select';

const VARIANT_STYLE = css.raw({
  position: 'relative',
  height: '100%',
  lineHeight: '34px',
  padding: '2px 0 2px 10px',
  fontSize: '0.95rem',
  border: '1px solid var(--grey300)',
  borderRadius: '8px',
  outline: 0,
});

export default Select;
